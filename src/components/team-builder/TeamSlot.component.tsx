import type { ChampionType } from "../../types/champions.type";

type TeamSlotProps = {
  champion?: ChampionType;
  onRemove: () => void;
};

const TeamSlot = ({ champion, onRemove }: TeamSlotProps) => {
  if (!champion) {
    return (
      <div className="flex h-32 flex-1 items-center justify-center rounded-xl border border-dashed border-slate-800 text-2xl text-slate-700">
        +
      </div>
    );
  }

  return (
    <div className="relative flex h-32 flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-violet-500/50 bg-violet-500/10 px-2 text-center">
      <button
        onClick={onRemove}
        aria-label={`Retirer ${champion.name} de l'équipe`}
        className="absolute right-1.5 top-1.5 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-rose-500/90 text-xs font-bold leading-none text-white transition-colors hover:bg-rose-400"
      >
        ×
      </button>

      <img
        src={`https://ddragon.leagueoflegends.com/cdn/16.16.1/img/champion/${champion.id}.png`}
        alt={champion.name}
        className="h-14 w-14 rounded-lg"
      />

      <span className="text-xs font-semibold text-slate-100">
        {champion.name}
      </span>
    </div>
  );
};

export default TeamSlot;
