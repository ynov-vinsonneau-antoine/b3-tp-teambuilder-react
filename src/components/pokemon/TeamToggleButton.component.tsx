import type { TeamMemberType } from "../../types/pokemon.type";
import useTeamStore, { MAX_TEAM_SIZE } from "../../store/team.store";
import Button from "../ui/Button.component";

type TeamToggleButtonProps = {
  pokemon: TeamMemberType;
};

const TeamToggleButton = ({ pokemon }: TeamToggleButtonProps) => {
  const { team, addToTeam, removeFromTeam } = useTeamStore();

  const isInTeam = team.some((member) => member.id === pokemon.id);
  const isTeamFull = team.length >= MAX_TEAM_SIZE;

  if (isInTeam) {
    return (
      <Button variant="secondary" onClick={() => removeFromTeam(pokemon.id)}>
        Retirer de l'équipe
      </Button>
    );
  }

  return (
    <Button onClick={() => addToTeam(pokemon)} disabled={isTeamFull}>
      {isTeamFull ? "Équipe complète" : "Ajouter à l'équipe"}
    </Button>
  );
};

export default TeamToggleButton;
