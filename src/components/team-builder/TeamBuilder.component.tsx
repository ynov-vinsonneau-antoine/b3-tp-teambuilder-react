import { useState } from "react";
import ChampionInput from "./ChampionInput.component";
import TeamSlots from "./TeamSlots.component";

const TeamBuilder = () => {
  const [team, setTeam] = useState<string[]>([]);

  const slotsLeft = 5 - team.length;

  const addChampion = (name: string) => {
    setTeam([...team, name]);
  };

  const removeChampion = (index: number) => {
    setTeam(team.filter((_, i) => i !== index));
  };

  return (
    <div>
      <ChampionInput onAdd={addChampion} disabled={slotsLeft === 0} />

      <TeamSlots team={team} onRemove={removeChampion} />

      <p className="mt-3 text-center text-sm text-slate-500">
        Il reste {slotsLeft} place{slotsLeft > 1 ? "s" : ""}.
      </p>
    </div>
  );
};

export default TeamBuilder;
