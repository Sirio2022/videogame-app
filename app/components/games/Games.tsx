'use client';

import usePagination from '@/lib/hooks/usePaginationStore';
import gameService from '@/lib/services/gameService';
import GameItem from './GameItem';
import { useEffect, useState } from 'react';
import { Game } from '@/lib/models/GameModel';

export default function Games() {
  const { page, setPage } = usePagination();

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await gameService.getGames(page);
      setGames(response || []);
    };
    fetchGames();
  }, [page]);

  const handlePrevious = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-8">
        {Array.isArray(games) &&
          games.map((game) => <GameItem key={game.id} game={game} />)}
      </div>

      <div className="join flex justify-center">
        <div>
          <button
            className="join-item btn btn-outline"
            onClick={handlePrevious}
          >
            Previous page
          </button>
        </div>
        <div>
          <button className="join-item btn btn-outline" onClick={handleNext}>
            Next page
          </button>
        </div>
      </div>
    </div>
  );
}
