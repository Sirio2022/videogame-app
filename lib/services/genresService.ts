import Axios from '@/app/utils/axiosWithCache';
import { Genres } from '../models/GenresModel';

interface GenresResponse {
  results: Genres[];
}

const getGenres = async () => {
  try {
    const response = await Axios.get<GenresResponse>(
      `genres?key=${process.env.RAWG_API_KEY}`
    );

    const genres = response.data.results;

    return genres;
  } catch (error) {
    console.log('Error fetching genres', error);
  }
};

const genresService = {
  getGenres,
};

export default genresService;
