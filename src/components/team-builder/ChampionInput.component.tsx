import { useState } from "react";
import Button from "../ui/Button.component";

type ChampionInputProps = {
  onAdd: (name: string) => void;
  disabled: boolean;
};

const ChampionInput = ({ onAdd, disabled }: ChampionInputProps) => {
  const [name, setName] = useState("");

  const handleAdd = () => {
    onAdd(name);
    setName("");
  };

  return (
    <div className="mb-6 flex gap-2">
      <input
        type="text"
        value={name}
        placeholder="Nom du champion"
        onChange={(e) => setName(e.target.value)}
        className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 placeholder:text-slate-600 focus:border-violet-500 focus:outline-none"
      />

      <Button onClick={handleAdd} disabled={disabled || name === ""}>
        Ajouter
      </Button>
    </div>
  );
};

export default ChampionInput;
