import useTeamStore, { MAX_TEAM_SIZE } from "../../store/team.store";
import TeamSlot from "./TeamSlot.component";

// [0, 1, 2, 3, 4, 5] : les six emplacements, remplis ou non.
const slots = Array.from({ length: MAX_TEAM_SIZE }, (_, index) => index);

const TeamSlots = () => {
  const { team, removeFromTeam } = useTeamStore();

  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
      {slots.map((slot) => (
        <TeamSlot
          key={slot}
          member={team[slot]}
          onRemove={() => removeFromTeam(team[slot].id)}
        />
      ))}
    </div>
  );
};

export default TeamSlots;
