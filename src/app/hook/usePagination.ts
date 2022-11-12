import { useState } from "react";

interface Pagination {
  page: number;
  addPage: () => void;
  subPage: () => void;
}

export const usePagination = (): Pagination => {
  const [page, setPage] = useState<number>(0);

  const addPage = () => {
    if (page === 0) setPage((page) => page + 1);
  };

  const subPage = () => {
    if (page >= 1) setPage((page) => page - 1);
  };

  return {
    page,
    addPage,
    subPage,
  };
};
