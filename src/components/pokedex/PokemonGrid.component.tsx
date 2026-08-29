import type { PokemonType } from "../../types/pokemon.type";
import useTeamStore from "../../store/team.store";
import PokemonCard from "./PokemonCard.component";

type PokemonGridProps = {
  pokemons: PokemonType[];
};

const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  const { team } = useTeamStore();

  if (pokemons.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-gray-200 px-6 py-16 text-center text-sm text-gray-400">
        Aucun Pokémon ne correspond à votre recherche.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isInTeam={team.some((member) => member.id === pokemon.id)}
        />
      ))}
    </div>
  );
};

export default PokemonGrid;
