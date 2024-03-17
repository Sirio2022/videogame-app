'use client';

import useGames from '@/lib/hooks/useGamesStore';
import usePagination from '@/lib/hooks/usePaginationStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchBox() {
  const router = useRouter();
  const { games, setFilteredGames } = useGames();
  const { setPage } = usePagination();
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
    router.push('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}  className='flex flex-col md:flex-row md:items-center '>
        <input
          type="text"
          placeholder="Search for games"
          className="border-2 border-gray-300 p-2 rounded-lg w-96 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
        />
        <button
          type="submit"
          className="btn btn-primary ml-2 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent my-4 w-14"
        >
          Clear
        </button>
      </form>
    </div>
  );
}
