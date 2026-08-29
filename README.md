# Pokédex — TP de consommation d'API

Projet du cours **State management et asynchrone** (B2 · React & TypeScript).

Trois pages, un store, et les données de [PokéAPI](https://pokeapi.co) : un Pokédex
cherchable et filtrable, une fiche détaillée, et une équipe de six.

## Démarrer

```bash
npm install
npm run dev
```

Vite, TypeScript, Tailwind CSS, React Router et Zustand sont déjà installés.

## Les trois pages

| Route | Page | Ce qu'elle fait |
| --- | --- | --- |
| `/` | `PokedexPage` | La liste complète, une recherche par nom, un filtre par types (deux au maximum) |
| `/pokemon/:name` | `PokemonDetailPage` | La fiche : artwork, nom français, catégorie, description, statistiques, ajout à l'équipe |
| `/equipe` | `TeamPage` | Les six emplacements et le récapitulatif des types |

## Les appels à l'API

Tout est public, sans clé. Préfixe : `https://pokeapi.co/api/v2`

| Appel | Poids | Utilisé par |
| --- | --- | --- |
| `/pokemon?limit=1400` | 93 Ko | `PokedexPage`, une seule fois au chargement |
| `/type/{nom}` | ~40 Ko | `PokedexPage`, un appel par type sélectionné |
| `/pokemon/{nom}` | 290 Ko | `PokemonDetailPage` |
| `/pokemon-species/{id}` | 50 Ko | `PokemonDetailPage`, pour le nom et la description en français |

Les images ne coûtent **aucun appel** : leur url se déduit de l'id du Pokémon,
cf. `src/utils/pokemon.utils.ts`.

## Structure

```
src/
├── App.tsx                       les routes
├── types/pokemon.type.ts         les formes renvoyées par l'API
├── utils/pokemon.utils.ts        url de l'API, urls des images, les 18 types
├── store/team.store.ts           l'équipe, en Zustand
├── components/
│   ├── Layout.component.tsx      navigation + <Outlet />
│   ├── ui/                       Button, Loader, ErrorMessage, TypeBadge
│   ├── pokedex/                  SearchInput, TypeFilter, PokemonCard, PokemonGrid
│   ├── pokemon/                  StatBar, TeamToggleButton
│   └── team/                     TeamSlot, TeamSlots, TeamRecap
└── pages/                        PokedexPage, PokemonDetailPage, TeamPage, NotFoundPage
```

## Les trois pièges du sujet

**PokéAPI n'a pas de recherche côté serveur.** Aucun `?q=`. On charge les 1302 noms
une seule fois, puis on filtre au rendu. C'est ce qui rend la recherche instantanée :
il n'y a aucun réseau entre la frappe et l'affichage.

**L'id n'est pas la position dans la liste.** Les ids vont de 1 à 1025, puis sautent
à 10001–10326 pour les formes alternatives. Il faut le lire dans l'`url` que la liste
fournit — c'est le rôle de `getIdFromUrl`.

**Une fiche pèse 290 Ko.** Charger le détail des 60 Pokémon affichés pour connaître
leurs types représenterait 17 Mo. Les types viennent de `/type/`, jamais du détail.

## Ce qui n'est stocké nulle part

Aucune valeur calculable n'est rangée dans un `useState` :

- la liste filtrée de `PokedexPage` se recalcule à chaque affichage ;
- les types couverts et absents de `TeamRecap` aussi.

Un seul `useState` porte la recherche : le texte tapé. Le reste s'en déduit.

## Vérifier

```bash
npm run lint
npm run build
```
