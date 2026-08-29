import { useState } from "react";
import type { PokemonType } from "../../types/pokemon.type";
import useTeamStore, { MAX_TEAM_SIZE } from "../../store/team.store";
import { API_URL } from "../../utils/pokemon.utils";
import PokeballIcon from "../ui/PokeballIcon.component";
import TrashIcon from "../ui/TrashIcon.component";

type TeamIconButtonProps = {
  pokemon: PokemonType;
  isInTeam: boolean;
};

const TeamIconButton = ({ pokemon, isInTeam }: TeamIconButtonProps) => {
  const { team, addToTeam, removeFromTeam } = useTeamStore();
  const [loading, setLoading] = useState(false);

  const isTeamFull = team.length >= MAX_TEAM_SIZE;

  // La liste ne donne ni les types ni les statistiques : on va chercher
  // la fiche au moment du clic. C'est un fetch en dehors d'un useEffect,
  // parce qu'il répond à une action de l'utilisateur, pas à un affichage.
  const handleAdd = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/pokemon/${pokemon.name}`);
      if (!response.ok) throw new Error(`Erreur ${response.status}`);

      const data = await response.json();
      const types = data.types.map(
        (entry: { type: { name: string } }) => entry.type.name
      );

      addToTeam({ id: pokemon.id, name: pokemon.name, types });
    } catch {
      // Un seul Pokémon n'a pas pu être ajouté : inutile de casser la page.
      console.error(`Impossible d'ajouter ${pokemon.name} à l'équipe.`);
    } finally {
      setLoading(false);
    }
  };

  if (isInTeam) {
    return (
      <button
        onClick={() => removeFromTeam(pokemon.id)}
        aria-label={`Retirer ${pokemon.name} de l'équipe`}
        title="Retirer de l'équipe"
        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-red-600 text-white transition-colors hover:bg-red-500"
      >
        <TrashIcon />
      </button>
    );
  }

  return (
    <button
      onClick={handleAdd}
      disabled={isTeamFull || loading}
      aria-label={`Ajouter ${pokemon.name} à l'équipe`}
      title={isTeamFull ? "Équipe complète" : "Ajouter à l'équipe"}
      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white transition-transform hover:scale-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
    >
      <PokeballIcon />
    </button>
  );
};

export default TeamIconButton;
