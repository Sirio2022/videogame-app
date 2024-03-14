// Purpose: Model for Game.

interface Genre {
  id: number;
  name: string;
}

interface PlatformDetails {
  id: number;
  name: string;
}

interface Platform {
  platform: PlatformDetails;
}

export type Game = {
  id: string;
  slug: string;
  name: string;
  background_image: string;
  rating: number;
  platforms: Platform[];
  genres: Genre[];
  description: string;
  released: string;
};
