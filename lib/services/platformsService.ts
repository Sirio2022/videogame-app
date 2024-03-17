import { Platforms } from '../models/PlatformsModel';

interface PlatformsResponse {
  results: Platforms[];
}

const getPlatforms = async () => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/platforms?key=${process.env.RAWG_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const platforms = data.results;

    return platforms;
  } catch (error) {
    console.log('Error fetching platforms', error);
    return []; // Return an empty array in case of error
  }
};

const platformsService = {
  getPlatforms,
};

export default platformsService;
