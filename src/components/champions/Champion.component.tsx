import type { ChampionType } from "../../types/champions.type";
import useTeamStore from "../../store/champions.store";

type ChampionProps = {
  champion: ChampionType;
};

const Champion = ({ champion }: ChampionProps) => {
  const { team, addChampion, removeChampion } = useTeamStore();

  const isSelected = team.some((c) => c.id === champion.id);

  return (
    <article
      className={`relative flex flex-col items-center rounded-xl border p-4 text-center transition-colors ${
        isSelected
          ? "border-violet-500 bg-violet-500/10"
          : "border-slate-800 bg-slate-900/60 hover:border-violet-500/50"
      }`}
    >
      <button
        onClick={() =>
          isSelected ? removeChampion(champion) : addChampion(champion)
        }
        aria-label={
          isSelected
            ? `Retirer ${champion.name} de l'équipe`
            : `Ajouter ${champion.name} à l'équipe`
        }
        className={`absolute right-2 top-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-lg font-bold leading-none text-white transition-colors ${
          isSelected
            ? "bg-rose-500/90 hover:bg-rose-400"
            : "bg-violet-500 hover:bg-violet-400"
        }`}
      >
        {isSelected ? "−" : "+"}
      </button>

      <img
        src={`https://ddragon.leagueoflegends.com/cdn/16.16.1/img/champion/${champion.id}.png`}
        alt={champion.name}
        className="h-20 w-20 rounded-lg"
      />

      <h3 className="mt-3 font-semibold text-slate-50">{champion.name}</h3>
      <p className="text-xs text-slate-400">{champion.title}</p>

      <div className="mt-3 flex flex-wrap justify-center gap-1">
        {champion.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default Champion;
