import type { ChampionType } from "../../types/champions.type";
import Champion from "./Champion.component";

type ChampionsListProps = {
  champions: ChampionType[];
};

const ChampionsList = ({ champions }: ChampionsListProps) => {
  if (champions.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-slate-800 px-6 py-16 text-center text-sm text-slate-600">
        Aucun champion à afficher.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {champions.map((champion) => (
        <Champion key={champion.id} champion={champion} />
      ))}
    </div>
  );
};

export default ChampionsList;
