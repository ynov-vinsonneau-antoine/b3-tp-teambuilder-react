import useTeamStore from "../../store/champions.store";
import TeamSlots from "./TeamSlots.component";
import TeamRecap from "./TeamRecap.component";

const TeamBuilder = () => {
  const { team, removeChampion } = useTeamStore();

  return (
    <div>
      <TeamSlots team={team} onRemove={removeChampion} />
      <TeamRecap />
    </div>
  );
};

export default TeamBuilder;
