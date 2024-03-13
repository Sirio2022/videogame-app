import Axios from '@/app/utils/axiosWithCache';
import { Game } from '../models/GameModel';

//export const revalidate = 60 * 60 * 24 * 7 * 4; // 4 weeks

interface ApiResponse {
  results: Game[];
}

const getGames = async () => {
  try {
    const response = await Axios.get<ApiResponse>(
      'games?key=291db4993f4a4bdb93b5f5d4f06a9a04'
    );

    const games = response.data.results;

    return games;
  } catch (error) {
    console.log('Error fetching games', error);
  }
};

const getGamesBySlug = async (slug: string) => {};

const gameService = {
  getGames,
  getGamesBySlug,
};

export default gameService;
