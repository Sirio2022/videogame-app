'use client';

import fetchGenres from '@/lib/services/genresService';
import { Genres } from '@/lib/models/GenresModel';
import { useEffect, useState } from 'react';
import useGames from '@/lib/hooks/useGamesStore';

export default function GenresMenu() {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  const { setFilteredGames, games } = useGames();

  useEffect(() => {
    const fetchGenresData = async () => {
      const response = fetchGenres.getGenres();
      const data = await response;
      setGenres(data);
    };

    fetchGenresData();
  }, []);

  const genderHandler = (genre: Genres) => {
    setSelectedGenre(genre);
    if (genre) {
      const filtered = games.filter((game) =>
        game.genres.map((g) => g.name).includes(genre.name)
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames(games);
    }
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Genres
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {genres?.map((genre: Genres) => (
          <li key={genre.id}>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => genderHandler(genre)}
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
