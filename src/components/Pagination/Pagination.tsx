import { useEffect } from "react";

interface PaginationProps<T> {
  items: T[];
  itemsPerPage?: number;
  onPageChange?: (currentItems: T[]) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = <T,>({
  items,
  itemsPerPage = 4,
  onPageChange,
  setPage,
  currentPage,
  setCurrentPage,
}: PaginationProps<T>) => {
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const visiblePages = 4;

  const changePage = (page: number) => {
    setCurrentPage(page);

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const slicedItems = items.slice(start, end);
    onPageChange?.(slicedItems);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) changePage(currentPage - 1);
  };

  useEffect(() => {
    changePage(currentPage);
  }, [items]);

  const startPage = Math.floor((currentPage - 1) / visiblePages) * visiblePages + 1;
  const endPage = Math.min(startPage + visiblePages - 1, totalPages);

  const visiblePageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="absolute flex justify-center items-center gap-2 w-full bottom-1 flex-wrap font-serif">

      {/* Previous */}
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md font-bold transition 
          ${currentPage === 1
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-purple-700 text-green-300 hover:bg-purple-900 hover:text-green-400 border-2 border-green-400 shadow-md"}
        `}
      >
        🛸 Prev
      </button>

      {/* Page buttons (solo 4 visibles) */}
      {visiblePageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => changePage(page)}
          className={`px-3 py-1 rounded-md transition font-extrabold 
            ${currentPage === page
              ? "bg-green-400 text-purple-900 border-2 border-purple-700 scale-110"
              : "bg-purple-700 text-green-300 hover:bg-purple-900 hover:text-green-400 border-2 border-green-400"}
          `}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={nextPage}
        className="px-3 py-1 rounded-md font-bold transition 
         bg-purple-700 text-green-300 hover:bg-purple-900 hover:text-green-400 border-2 border-green-400 shadow-md"
      >
        {currentPage === totalPages ? "new Character" : "Next 🚀"}
      </button>
    </div>
  );
};
