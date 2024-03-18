'use client';

import usePagination from '@/lib/hooks/usePaginationStore';
import useGames from '@/lib/hooks/useGamesStore';
import gameService from '@/lib/services/gameService';
import GameItem from './GameItem';
import { useEffect, useState } from 'react';
import NotFound from '../messagebox/NotFound';
import ReactPaginate from 'react-paginate';

export default function Games() {
  const { page, setPage } = usePagination();
  const [loading, setLoading] = useState(false);

  const { games, setGames, filteredGames } = useGames();

  const pageCount = 300;

  useEffect(() => {
    setLoading(true);
    const fetchGames = async () => {
      const response = await gameService.getGames(page);
      setGames(response);
      setLoading(false);
    };
    fetchGames();
  }, [page, setGames]);

  if (loading) return <span className="loading loading-ring loading-lg"></span>;

  return filteredGames.length === 0 ? (
    <NotFound />
  ) : filteredGames.length > 0 ? (
    <div className='m-4'>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-5">
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
        containerClassName={
          'pagination w-full flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2'
        }
        activeClassName={'active'}
        pageClassName={'page-item m-0 p-0'}
        previousClassName={'page-item m-0 p-0'}
        nextClassName={'page-item m-0 p-0'}
        breakClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakLinkClassName={'page-link'}
        activeLinkClassName={'active'}
      />
    </div>
  ) : (
    <div className='m-4'>
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
        containerClassName={
          'pagination w-full flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2'
        }
        activeClassName={'active'}
        pageClassName={'page-item m-0 p-0'}
        previousClassName={'page-item m-0 p-0'}
        nextClassName={'page-item m-0 p-0'}
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
