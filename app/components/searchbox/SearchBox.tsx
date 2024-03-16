'use client';

import useGames from '@/lib/hooks/useGamesStore';
import { useEffect, useState } from 'react';

export default function SearchBox() {
  const { games, setFilteredGames } = useGames();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredGames(games);
      return;
    }

    const filtered = games.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [games, searchTerm, setFilteredGames]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchTerm === '') {
      setFilteredGames(games);
      return;
    }

    setFilteredGames([]);
    setSearchTerm('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for games"
          className="border-2 border-gray-300 p-2 rounded-lg w-96 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary ml-2 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        >
          Clear
        </button>
      </form>
    </div>
  );
}
