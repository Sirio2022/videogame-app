'use client';

import usePagination from '@/lib/hooks/usePaginationStore';
import useGames from '@/lib/hooks/useGamesStore';
import gameService from '@/lib/services/gameService';
import GameItem from './GameItem';
import { useEffect } from 'react';
import NotFound from '../messagebox/NotFound';

export default function Games() {
  const { page, setPage } = usePagination();

  const { games, setGames, filteredGames } = useGames();

  useEffect(() => {
    const fetchGames = async () => {
      const response = await gameService.getGames(page);
      setGames(response);
    };
    fetchGames();
  }, [page, setGames]);

  const handlePrevious = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return filteredGames.length === 0 ? (
    <NotFound />
  ) : filteredGames.length > 0 ? (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-8">
        {Array.isArray(filteredGames) &&
          filteredGames.map((game) => <GameItem key={game.id} game={game} />)}
      </div>

      <div className="join flex justify-center gap-5">
        <div>
          <button
            className="join-item btn btn-neutral"
            onClick={handlePrevious}
          >
            Previous page
          </button>
        </div>
        <div>
          <button className="join-item btn btn-neutral" onClick={handleNext}>
            Next page
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-8">
        {Array.isArray(games) &&
          games.map((game) => <GameItem key={game.id} game={game} />)}
      </div>

      <div className="join flex justify-center gap-5">
        <div>
          <button
            className="join-item btn btn-neutral"
            onClick={handlePrevious}
          >
            Previous page
          </button>
        </div>
        <div>
          <button className="join-item btn btn-neutral" onClick={handleNext}>
            Next page
          </button>
        </div>
      </div>
    </div>
  );
}
