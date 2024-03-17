'use client';

import usePagination from '@/lib/hooks/usePaginationStore';
import useGames from '@/lib/hooks/useGamesStore';
import gameService from '@/lib/services/gameService';
import GameItem from './GameItem';
import { useEffect } from 'react';
import NotFound from '../messagebox/NotFound';
import ReactPaginate from 'react-paginate';

export default function Games() {
  const { page, setPage } = usePagination();

  const { games, setGames, filteredGames } = useGames();

  const pageCount = 300;

  useEffect(() => {
    const fetchGames = async () => {
      const response = await gameService.getGames(page);
      setGames(response);
    };
    fetchGames();
  }, [page, setGames]);

  return filteredGames.length === 0 ? (
    <NotFound />
  ) : filteredGames.length > 0 ? (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-8">
        {Array.isArray(filteredGames) &&
          filteredGames.map((game) => <GameItem key={game.id} game={game} />)}
      </div>

      <ReactPaginate
        forcePage={page === 1 ? 0 : page - 1}
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(data) => setPage(data.selected + 1)}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'page-item'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        breakClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakLinkClassName={'page-link'}
        activeLinkClassName={'active'}
      />
    </div>
  ) : (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-8">
        {Array.isArray(games) &&
          games.map((game) => <GameItem key={game.id} game={game} />)}
      </div>

      <ReactPaginate
        forcePage={page === 1 ? 0 : page - 1}
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(data) => setPage(data.selected + 1)}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'page-item'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        breakClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakLinkClassName={'page-link'}
        activeLinkClassName={'active'}
      />
    </div>
  );
}
