'use client';

import usePagination from '@/lib/hooks/usePaginationStore';
import gameService from '@/lib/services/gameService';

export default function Pagination() {
  const { page, setPage } = usePagination();

  gameService.getGames(page);

  const handlePrevious = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <div className="join grid grid-cols-2">
        <button className="join-item btn btn-outline" onClick={handlePrevious}>
          Previous page
        </button>
        <button className="join-item btn btn-outline" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
