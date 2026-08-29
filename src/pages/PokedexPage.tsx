import { useEffect, useState } from "react";
import type { PokemonListItemType, PokemonType } from "../types/pokemon.type";
import {
  API_URL,
  getIdFromUrl,
  MAX_SELECTED_TYPES,
} from "../utils/pokemon.utils";
import Loader from "../components/ui/Loader.component";
import ErrorMessage from "../components/ui/ErrorMessage.component";
import SearchInput from "../components/pokedex/SearchInput.component";
import TypeFilter from "../components/pokedex/TypeFilter.component";
import PokemonGrid from "../components/pokedex/PokemonGrid.component";

const PokedexPage = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  // null signifie « aucun filtre de type actif ».
  const [namesByType, setNamesByType] = useState<string[] | null>(null);

  // Premier effet : la liste complète, une seule fois, au chargement.
  useEffect(() => {
    const loadPokemons = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/pokemon?limit=1400`);
        if (!response.ok) throw new Error(`Erreur ${response.status}`);

        const data = await response.json();
        const list = data.results.map((item: PokemonListItemType) => ({
          id: getIdFromUrl(item.url),
          name: item.name,
        }));

        setPokemons(list);
      } catch {
        setError("Impossible de charger le Pokédex.");
      } finally {
        setLoading(false);
      }
    };

    loadPokemons();
  }, []);

  // Deuxième effet : les noms des Pokémon qui ont TOUS les types choisis.
  // Son tableau de dépendances n'est pas vide : il se rejoue à chaque
  // changement de la sélection.
  useEffect(() => {
    const loadNamesByType = async () => {
      if (selectedTypes.length === 0) {
        setNamesByType(null);
        return;
      }

      try {
        let names: string[] | null = null;

        for (const type of selectedTypes) {
          const response = await fetch(`${API_URL}/type/${type}`);
          if (!response.ok) throw new Error(`Erreur ${response.status}`);

          const data = await response.json();
          const namesOfType: string[] = data.pokemon.map(
            (entry: { pokemon: PokemonListItemType }) => entry.pokemon.name
          );

          // Le premier type donne la liste de départ.
          // Chaque type suivant la réduit : c'est ça, le cumul des filtres.
          names =
            names === null
              ? namesOfType
              : names.filter((name) => namesOfType.includes(name));
        }

        setNamesByType(names);
      } catch {
        setError("Impossible de charger les types.");
      }
    };

    loadNamesByType();
  }, [selectedTypes]);

  const toggleType = (type: string) => {
    setSelectedTypes((currentTypes) => {
      // Déjà sélectionné : on l'enlève.
      if (currentTypes.includes(type)) {
        return currentTypes.filter((currentType) => currentType !== type);
      }

      // Deux types au maximum : au-delà, on ne change rien.
      if (currentTypes.length >= MAX_SELECTED_TYPES) return currentTypes;

      return [...currentTypes, type];
    });
  };

  if (loading) return <Loader message="Chargement du Pokédex…" />;
  if (error) return <ErrorMessage message={error} />;

  // Aucune de ces valeurs n'est rangée dans un state :
  // elles se recalculent à chaque affichage.
  const filteredPokemons = pokemons
    .filter((pokemon) => pokemon.name.includes(search.toLowerCase()))
    .filter(
      (pokemon) => namesByType === null || namesByType.includes(pokemon.name)
    );

  return (
    <section>
      <header className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Pokédex</h1>
        <p className="mt-1 text-sm text-gray-500">
          Cherchez, filtrez par types, puis ouvrez une fiche.
        </p>
      </header>

      <div className="mb-5 flex flex-col gap-3">
        <SearchInput search={search} onSearchChange={setSearch} />
        <TypeFilter selectedTypes={selectedTypes} onToggleType={toggleType} />
      </div>

      <p className="mb-3 text-xs text-gray-500">
        {filteredPokemons.length} Pokémon
      </p>

      <PokemonGrid pokemons={filteredPokemons} />
    </section>
  );
};

export default PokedexPage;
