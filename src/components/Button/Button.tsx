import type { ReactNode } from "react"

interface Props {
  children: ReactNode;
  parentMethod: () => void;
  className?: string;
  image?: string;
  alt?: string;
}

export const CardButton = ({ children, parentMethod, className, image, alt }: Props) => {
  return (
    <button
      className={`
        ${className ?? ""}
        flex items-center gap-3
        px-6 py-3 
        font-mono font-bold text-green-400
        rounded-xl
        border-3 border-purple-700
        hover:scale-105 hover:rotate-1
        focus:outline-none focus:ring-4 focus:ring-purple-400 
        transition-all duration-200 ease-in-out
        relative overflow-hidden cursor-pointer
      `}
      onClick={parentMethod}
    >
      {image && (
        <img
          className="w-10 h-10 rounded-full border-2 border-purple-700 shadow-md group-hover:scale-110 transition-transform duration-200"
          src={image}
          alt={alt ?? "Card button image"}
        />
      )}
      <span className="relative z-10 text-lg tracking-wide group-hover:text-purple-900 transition-colors duration-200">
        {children}
      </span>
    </button>
  )
}
