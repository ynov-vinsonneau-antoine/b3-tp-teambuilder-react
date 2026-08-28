import { useEffect, useState } from "react";
import type { ChampionType } from "../types/champions.type";
import ChampionsList from "../components/champions/ChampionsList.component";

const ChampionsPage = () => {
  const URL =
    "https://ddragon.leagueoflegends.com/cdn/16.16.1/data/fr_FR/champion.json";
  const [champions, setChampions] = useState<ChampionType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadChampions = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error(`Erreur ${response.status}`);
        const data = await response.json();
        setChampions(Object.values(data.data));
      } catch {
        setError("Impossible de charger les champions.");
      } finally {
        setLoading(false);
      }
    };
    loadChampions();
  }, []);

  if (loading) return <p className="text-slate-400">Chargement…</p>;
  if (error) return <p className="text-rose-400">{error}</p>;

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

      <ChampionsList champions={champions} />
    </section>
  );
};

export default ChampionsPage;
