// Ce que renvoie /pokemon?limit=1400 : un nom et une url, rien d'autre.
export type PokemonListItemType = {
  name: string;
  url: string;
};

// Ce qu'on garde en mémoire pour afficher la grille.
export type PokemonType = {
  id: number;
  name: string;
};

// Ce que renvoie /pokemon/{nom}. On ne déclare que les champs qu'on affiche.
export type PokemonDetailType = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: { name: string };
  }[];
  stats: {
    base_stat: number;
    stat: { name: string };
  }[];
  // L'url de l'espèce, à suivre pour obtenir la description.
  species: {
    name: string;
    url: string;
  };
};

// Ce que renvoie /pokemon-species/{id} : les textes, dans toutes les langues.
export type PokemonSpeciesType = {
  names: {
    name: string;
    language: { name: string };
  }[];
  genera: {
    genus: string;
    language: { name: string };
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: { name: string };
  }[];
};

// Ce qu'on range dans l'équipe. On y ajoute les types : le récapitulatif
// en a besoin, et on ne veut pas les redemander à l'API.
export type TeamMemberType = {
  id: number;
  name: string;
  types: string[];
};
