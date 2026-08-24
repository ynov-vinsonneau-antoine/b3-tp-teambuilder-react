# Team Builder, le point de départ

Projet du cours **State management et asynchrone** (B2 · React & TypeScript).

Vous allez construire une application qui compose une équipe de cinq champions de
League of Legends, et qui vous dit ce qu'elle vaut.

## Démarrer

```bash
npm install
npm run dev
```

Le projet est déjà câblé : Vite, TypeScript, Tailwind CSS et React Router.
**Il n'y a rien à configurer.** On code.

## Ce qui est déjà là

```
src/
├── App.tsx                  les routes
├── components/
│   ├── layout.tsx           la barre de navigation + <Outlet />
│   ├── ui/Button.component.tsx   le bouton de l'app
│   ├── ErrorState.tsx       un écran d'erreur réutilisable
│   └── BackLink.tsx         un lien « retour »
└── pages/
    ├── HomePage.tsx         la page d'accueil (finie)
    ├── ChampionsPage.tsx    vide, c'est ici qu'on travaille
    ├── TeamPage.tsx         vide, et ici aussi
    └── NotFoundPage.tsx     la 404 (finie)
```

Les deux pages vides contiennent des commentaires qui disent, étape par étape, ce
qui viendra s'y ajouter. Suivez le cours, ils se rempliront tout seuls.

## L'API

**Data Dragon**, le CDN public de Riot. Aucune clé, aucun compte, aucune inscription.

```
https://ddragon.leagueoflegends.com/cdn/16.16.1/data/fr_FR/champion.json
https://ddragon.leagueoflegends.com/cdn/16.16.1/img/champion/Ahri.png
```

Collez la première URL dans un onglet de votre navigateur avant d'écrire la moindre
ligne. **Regardez la forme de la réponse.** Elle n'est pas celle que vous imaginez.

> ⚠️ L'API officielle de Riot (`api.riotgames.com`) est une autre chose : elle exige
> une clé **et** refuse les requêtes venant du navigateur. N'y allez pas.

## Le programme

| | Étape | Ce qu'on y apprend |
|---|---|---|
| 1 | Le state | `useState`, et pourquoi une variable normale ne suffit pas |
| 2 | L'appel API | `fetch`, `async` / `await`, `.json()` |
| 3 | Loading et erreurs | `try` / `catch` / `finally`, et `if (!res.ok)` |
| 4 | `useEffect` | charger sans bouton, et le tableau de dépendances |
| 5 | Zustand | une équipe qui survit au changement de page |

## Les commandes

| | |
|---|---|
| `npm run dev` | le serveur de développement |
| `npm run build` | vérifie les types **et** construit le site |
| `npm run lint` | ESLint |

## Un réflexe à prendre dès aujourd'hui

Gardez les **devtools ouverts** en permanence, sur l'onglet **Console** et l'onglet
**Réseau**. Les trois quarts des bugs de ce cours s'y voient en quinze secondes.
