import type { ChampionType } from "../types/champions.type";
import { create } from "zustand";

export const MAX_TEAM_SIZE = 5;

type TeamStoreType = {
    team: ChampionType[];
    champions: ChampionType[];
    addChampion: (champion: ChampionType) => void;
    removeChampion: (champion: ChampionType) => void;
    setChampions: (champions: ChampionType[]) => void;
}

const useTeamStore = create<TeamStoreType>((set) => ({
    team: [],
    champions: [],
    setChampions: (champions) => set({ champions }),
    addChampion: (champion) => set((state) => {
        if (state.team.length >= MAX_TEAM_SIZE) return state;
        return { team: [...state.team, champion] };
    }),
    removeChampion: (champion) => set((state) => ({
        team: state.team.filter((c) => c.id !== champion.id),
    })),
}));

export default useTeamStore;
