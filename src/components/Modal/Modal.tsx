import { useEffect, useRef, type ReactNode } from "react"
import { createPortal } from "react-dom";
import { useModalContext } from "./context";

interface Prop {
  children: ReactNode;
}

export const Modal = ({ children }: Prop) => {

  const modalRef = useRef<HTMLDivElement>(null);

  const { state, setState } = useModalContext();

  const closeModal = () => { setState(false) }

  const modalRoot = document.getElementById("modal");

  const handleContectClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    }

    if (state) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    }
  }, [state, setState])

  if (!state || !modalRoot) return null;

  return createPortal(
    <div
      onClick={closeModal}
      className="absolute z-10 left-0 top-0 w-full h-screen flex justify-center items-center p-4 backdrop-blur-xs"
    >
      <div
        onClick={handleContectClick}
        ref={modalRef}
        className="relative w-1/2 min-h-1/2 max-h-screen rounded-4xl border-4 border-purple-700 
    bg-gradient-to-b from-gray-900 via-black to-gray-800 
    shadow-lg p-6"
      >
        {/* Botón estilo Rick & Morty */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-2xl font-bold 
      text-green-400 hover:text-pink-400 
      transition-transform duration-300 
      hover:rotate-180 hover:scale-125
      drop-shadow-[0_0_10px_rgba(0,255,150,0.8)]
      animate-pulse cursor-pointer"
        >
          ✖
        </button>

        {children}
      </div>
    </div>

    , modalRoot)
}