import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type {
  PokemonDetailType,
  PokemonSpeciesType,
} from "../types/pokemon.type";
import { API_URL, getArtworkUrl } from "../utils/pokemon.utils";
import Loader from "../components/ui/Loader.component";
import ErrorMessage from "../components/ui/ErrorMessage.component";
import TypeBadge from "../components/ui/TypeBadge.component";
import StatBar from "../components/pokemon/StatBar.component";
import TeamToggleButton from "../components/pokemon/TeamToggleButton.component";

const PokemonDetailPage = () => {
  // Le nom vient de l'url : /pokemon/pikachu
  const { name } = useParams();

  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);
  const [species, setSpecies] = useState<PokemonSpeciesType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Le tableau de dépendances contient `name` : si on change de Pokémon,
  // l'effet se rejoue et va chercher la bonne fiche.
  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/pokemon/${name}`);
        if (!response.ok) throw new Error(`Erreur ${response.status}`);
        const data = await response.json();

        // Deuxième appel, qui dépend du premier : la description et le nom
        // français sont sur l'espèce, dont le premier appel donne l'url.
        const speciesResponse = await fetch(data.species.url);
        if (!speciesResponse.ok)
          throw new Error(`Erreur ${speciesResponse.status}`);
        const speciesData = await speciesResponse.json();

        setPokemon(data);
        setSpecies(speciesData);
      } catch {
        setError("Ce Pokémon est introuvable.");
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, [name]);

  if (loading) return <Loader message="Chargement de la fiche…" />;
  if (error) return <ErrorMessage message={error} />;
  if (!pokemon) return null;

  // On aplatit la forme de l'API pour ne manipuler que des chaînes.
  const types = pokemon.types.map((entry) => entry.type.name);

  // L'API renvoie ses textes dans toutes les langues. On prend le français,
  // et l'anglais quand la traduction n'existe pas — c'est le cas des
  // Pokémon les plus récents.
  const frenchName = species?.names.find(
    (entry) => entry.language.name === "fr"
  )?.name;

  const genus = species?.genera.find(
    (entry) => entry.language.name === "fr"
  )?.genus;

  const flavorEntry =
    species?.flavor_text_entries.find((entry) => entry.language.name === "fr") ??
    species?.flavor_text_entries.find((entry) => entry.language.name === "en");

  // Les descriptions contiennent des retours à la ligne du jeu d'origine.
  const description = flavorEntry?.flavor_text.replace(/\s+/g, " ");

  return (
    <section>
      <Link
        to="/"
        className="mb-6 inline-block text-sm text-gray-500 transition-colors hover:text-gray-900"
      >
        ← Retour au Pokédex
      </Link>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6">
          <img
            src={getArtworkUrl(pokemon.id)}
            alt={pokemon.name}
            className="h-56 w-56"
          />

          <span className="text-sm font-medium text-gray-400">
            #{String(pokemon.id).padStart(3, "0")}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">
            {frenchName ?? pokemon.name}
          </h1>
          <span className="text-sm text-gray-500 capitalize">
            {pokemon.name}
          </span>

          <div className="mt-3 flex gap-2">
            {types.map((type) => (
              <TypeBadge key={type} type={type} />
            ))}
          </div>

          <div className="mt-4">
            <TeamToggleButton
              pokemon={{ id: pokemon.id, name: pokemon.name, types }}
            />
          </div>
        </div>

        <div>
          {genus && (
            <p className="mb-1 text-sm font-semibold text-red-600">{genus}</p>
          )}

          {description && (
            <p className="mb-6 text-sm leading-relaxed text-gray-700">
              {description}
            </p>
          )}

          <h2 className="mb-3 text-sm font-semibold text-gray-700">
            Statistiques
          </h2>

          <div className="flex flex-col gap-2">
            {pokemon.stats.map((entry) => (
              <StatBar
                key={entry.stat.name}
                label={entry.stat.name}
                value={entry.base_stat}
              />
            ))}
          </div>

          <h2 className="mt-6 mb-3 text-sm font-semibold text-gray-700">
            Gabarit
          </h2>

          <p className="text-sm text-gray-500">
            {pokemon.height / 10} m · {pokemon.weight / 10} kg
          </p>
        </div>
      </div>
    </section>
  );
};

export default PokemonDetailPage;
