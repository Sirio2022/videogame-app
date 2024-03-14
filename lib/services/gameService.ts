import Axios from '@/app/utils/axiosWithCache';
import { Game } from '../models/GameModel';

//export const revalidate = 60 * 60 * 24 * 7 * 4; // 4 weeks

interface ApiResponse {
  results: Game[];
}

const getGames = async () => {
  try {
    const response = await Axios.get<ApiResponse>(
      `games?key=${process.env.RAWG_API_KEY}`
    );

    const games = response.data.results;

    return games;
  } catch (error) {
    console.log('Error fetching games', error);
  }
};

const getGamesById = async (id: number) => {
  try {
    const response = await Axios.get<Game>(
      `games/${id}?key=${process.env.RAWG_API_KEY}`
    );

    const game = response.data;

    return game;
  } catch (error) {
    console.log('Error fetching game', error);
  }
};

const gameService = {
  getGames,
  getGamesById,
};

export default gameService;
