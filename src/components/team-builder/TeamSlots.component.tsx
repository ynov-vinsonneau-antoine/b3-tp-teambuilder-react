import type { ChampionType } from "../../types/champions.type";
import TeamSlot from "./TeamSlot.component";

type TeamSlotsProps = {
  team: ChampionType[];
  onRemove: (champion: ChampionType) => void;
};

const TeamSlots = ({ team, onRemove }: TeamSlotsProps) => {
  if (team.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-slate-800 px-6 py-16 text-center text-sm text-slate-600">
        Votre équipe est vide.
      </p>
    );
  }

  return (
    <div className="flex gap-3">
      {[0, 1, 2, 3, 4].map((i) => (
        <TeamSlot
          key={i}
          champion={team[i]}
          onRemove={() => onRemove(team[i])}
        />
      ))}
    </div>
  );
};

export default TeamSlots;
