import { create } from 'zustand';
import { Game } from '../models/GameModel';

type Games = {
  games: Game[];
  setGames: (games: Game[]) => void;
  filteredGames: Game[];
  setFilteredGames: (games: Game[]) => void;
};

const initialState: Games = {
  games: [],
  setGames: () => {},
  filteredGames: [],
  setFilteredGames: () => {},
};

export const useGamesStore = create<Games>((set) => ({
  ...initialState,
  setGames: (games: Game[]) => set({ games }),
  filteredGames: [],
  setFilteredGames: (games: Game[]) => set({ filteredGames: games }),
}));

export default function useGames() {
  const { games, setGames, filteredGames, setFilteredGames } = useGamesStore();

  return { games, setGames, filteredGames, setFilteredGames };
}
