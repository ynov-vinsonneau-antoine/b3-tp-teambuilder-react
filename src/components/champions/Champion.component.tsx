import type { ChampionType } from "../../types/champions.type";

type ChampionProps = {
  champion: ChampionType;
};

const Champion = ({ champion }: ChampionProps) => {
  return (
    <article className="flex flex-col items-center rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center transition-colors hover:border-violet-500/50">
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
