import { create } from "zustand";
import type { TeamMemberType } from "../types/pokemon.type";

export const MAX_TEAM_SIZE = 6;

type TeamStoreType = {
  team: TeamMemberType[];
  addToTeam: (pokemon: TeamMemberType) => void;
  removeFromTeam: (id: number) => void;
};

const useTeamStore = create<TeamStoreType>((set) => ({
  team: [],

  addToTeam: (pokemon) =>
    set((state) => {
      // L'équipe est pleine, ou le Pokémon y est déjà : on ne change rien.
      if (state.team.length >= MAX_TEAM_SIZE) return state;
      if (state.team.some((member) => member.id === pokemon.id)) return state;

      return { team: [...state.team, pokemon] };
    }),

  removeFromTeam: (id) =>
    set((state) => ({
      team: state.team.filter((member) => member.id !== id),
    })),
}));

export default useTeamStore;
