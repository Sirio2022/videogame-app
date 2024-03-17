import { Genres } from '../models/GenresModel';

interface GenresResponse {
  results: Genres[];
}

const getGenres = async () => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/genres?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const genres = data.results;

    return genres;
  } catch (error) {
    console.log('Error fetching genres', error);
    return []; // Return an empty array in case of error
  }
};

const genresService = {
  getGenres,
};

export default genresService;
