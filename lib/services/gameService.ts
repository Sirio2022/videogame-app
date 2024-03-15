import Axios from '@/app/utils/axiosWithCache';
import { Game } from '../models/GameModel';

//export const revalidate = 60 * 60 * 24 * 7 * 4; // 4 weeks

interface ApiResponse {
  results: Game[];
}

const getGames = async (page: number = 1) => {
  try {
    const response = await Axios.get<ApiResponse>(
      `games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}&page=${page}`,
      {
        headers: {
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
          Expires: '0',
        },
      }
    );
    console.log('response', response);

    const games = response.data.results;

    return games;
  } catch (error) {
    console.log('Error fetching games', error);
  }
};

const getGamesById = async (id: number) => {
  try {
    const response = await Axios.get<Game>(
      `games/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`
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
