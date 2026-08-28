import { useState } from "react";
import type { ChampionType } from "../types/champions.type";
import ChampionsList from "../components/champions/ChampionsList.component";

const ChampionsPage = () => {
  const URL =
    "https://ddragon.leagueoflegends.com/cdn/16.16.1/data/fr_FR/champion.json";
  const [champions, setChampions] = useState<ChampionType[]>([]);

  const loadChampions = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const championsArray: ChampionType[] = Object.values(data.data);
      setChampions(championsArray);
    } catch (error) {
      console.error("Erreur lors du chargement des champions :", error);
    }
  };
  return (
    <section>
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Champions
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Parcourez le roster et ajoutez des champions à votre équipe.
        </p>
      </header>

      {champions.length === 0 ? (
        <button
          onClick={loadChampions}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Charger les champions
        </button>
      ) : (
        <div>
          <ChampionsList champions={champions} />
        </div>
      )}
    </section>
  );
};

export default ChampionsPage;
