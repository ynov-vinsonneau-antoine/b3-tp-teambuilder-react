import { useState } from "react";

const Compteur = () => {
  const [count, setCount] = useState(0);
  const double = count * 2;
  return (
    <div>
      <p className="text-lg font-semibold text-amber-50">Count: {count}</p>
      <p className="text-lg font-semibold text-amber-50">Double: {double}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-lg bg-violet-500 px-4 py-2 text-white hover:bg-violet-400"
      >
        Increment
      </button>
    </div>
  );
};

export default Compteur;
