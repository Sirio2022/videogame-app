// Purpose: Model for Game.

export type Game = {
  id: string;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  platforms: string[];
  genres: string[];
  releaseDate: string;
};
