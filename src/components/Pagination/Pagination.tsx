import { useState, useEffect } from "react";

interface PaginationProps<T> {
  items: T[];                          
  itemsPerPage?: number;               
  onPageChange?: (currentItems: T[]) => void;
}

export const Pagination = <T,>({
  items,
  itemsPerPage = 4,
  onPageChange,
}: PaginationProps<T>) => {
  
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const createPageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const changePage = (page: number) => {
    setCurrentPage(page);

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const slicedItems = items.slice(start, end);

    onPageChange?.(slicedItems);
  };

  const nextPage = () => {
    if (currentPage < totalPages) changePage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) changePage(currentPage - 1);
  };

  useEffect(() => {
    changePage(1);
  }, [items]);

  return (
    <div className="absolute flex justify-center items-center gap-2 w-full bottom-1">

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

      {/* Page buttons */}
      {createPageNumbers.map((page) => (
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
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md font-bold transition 
          ${currentPage === totalPages 
            ? "bg-gray-400 text-gray-700 cursor-not-allowed" 
            : "bg-purple-700 text-green-300 hover:bg-purple-900 hover:text-green-400 border-2 border-green-400 shadow-md"}
        `}
      >
        Next 🚀
      </button>

    </div>
  );
};
