export type ChampionType = {
  id: string;        // "Ahri"
  name: string;      // "Ahri"
  title: string;     // "Renarde à neuf queues"
  tags: string[];    // ["Mage", "Assassin"]
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
};