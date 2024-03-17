import { Game } from '../models/GameModel';

//export const revalidate = 60 * 60 * 24 * 7 * 4; // 4 weeks

interface ApiResponse {
  results: Game[];
}

const getGames = async (page: number = 1) => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page=${page}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const games = data.results;

    return games;
  } catch (error) {
    console.log('Error fetching games', error);
    return []; // Return an empty array in case of error
  }
};

const getGamesById = async (id: number) => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const game = await response.json();

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
