export const API_URL = "https://pokeapi.co/api/v2";

const SPRITES_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

// Les régions du jeu. Chacune correspond à une génération, et
// /generation/{id} donne la liste des espèces qui y apparaissent.
export const REGIONS = [
  { generation: 1, label: "Kanto" },
  { generation: 2, label: "Johto" },
  { generation: 3, label: "Hoenn" },
  { generation: 4, label: "Sinnoh" },
  { generation: 5, label: "Unys" },
  { generation: 6, label: "Kalos" },
  { generation: 7, label: "Alola" },
  { generation: 8, label: "Galar" },
  { generation: 9, label: "Paldea" },
];

// On ne cumule jamais plus de deux types dans le filtre.
export const MAX_SELECTED_TYPES = 2;

// Les 18 types du jeu. Ils servent à construire les boutons de filtre.
export const POKEMON_TYPES = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

// Le nom français de chaque type. L'API ne parle qu'anglais : on garde
// ses noms comme clés, et on ne traduit qu'au moment de l'affichage.
export const TYPE_LABELS: Record<string, string> = {
  normal: "Normal",
  fire: "Feu",
  water: "Eau",
  electric: "Électrik",
  grass: "Plante",
  ice: "Glace",
  fighting: "Combat",
  poison: "Poison",
  ground: "Sol",
  flying: "Vol",
  psychic: "Psy",
  bug: "Insecte",
  rock: "Roche",
  ghost: "Spectre",
  dragon: "Dragon",
  dark: "Ténèbres",
  steel: "Acier",
  fairy: "Fée",
};

// Une couleur par type, pour les pastilles.
export const TYPE_COLORS: Record<string, string> = {
  normal: "bg-stone-500",
  fire: "bg-orange-500",
  water: "bg-blue-500",
  electric: "bg-yellow-600",
  grass: "bg-green-500",
  ice: "bg-cyan-500",
  fighting: "bg-red-600",
  poison: "bg-fuchsia-600",
  ground: "bg-amber-700",
  flying: "bg-indigo-500",
  psychic: "bg-pink-500",
  bug: "bg-lime-600",
  rock: "bg-stone-600",
  ghost: "bg-violet-700",
  dragon: "bg-indigo-700",
  dark: "bg-stone-800",
  steel: "bg-slate-500",
  fairy: "bg-pink-500",
};

// L'API ne donne pas l'id du Pokémon dans la liste, seulement son url.
// "https://pokeapi.co/api/v2/pokemon/25/" donne 25.
export const getIdFromUrl = (url: string) => {
  const parts = url.split("/").filter((part) => part !== "");
  return Number(parts[parts.length - 1]);
};

// Les images se déduisent de l'id : aucun appel supplémentaire.
export const getSpriteUrl = (id: number) => `${SPRITES_URL}/${id}.png`;

export const getArtworkUrl = (id: number) =>
  `${SPRITES_URL}/other/official-artwork/${id}.png`;
