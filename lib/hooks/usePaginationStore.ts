import { create } from 'zustand';

type Pagination = {
  page: number;
  setPage: (page: number) => void;
};

const initialState: Pagination = {
  page: 1,
  setPage: () => {},
};

export const usePaginationStore = create<Pagination>((set) => ({
  ...initialState,
  setPage: (page: number) => set({ page }),
}));

export default function usePagination() {
  const { page, setPage } = usePaginationStore();

  return { page, setPage };
}
