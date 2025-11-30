import { useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export const Carrucel = ({ children }: Props) => {

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-2 relative">
      <button
        onClick={() => scrollCarousel(-250)}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60 z-10"
      >
        ◀
      </button>

      {/* container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll gap-4 px-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300"
      >
        {children}
      </div>

      <button
        onClick={() => scrollCarousel(250)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60 z-10"
      >
        ▶
      </button>
    </div>
  )
}