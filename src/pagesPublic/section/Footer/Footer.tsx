export const Footer = () => {
  return (
    <footer
      className="
        w-full
        bg-gradient-to-r from-gray-900 via-black to-gray-800 
        border-t-4 border-purple-700 
        py-2 px-4 
        shadow-inner
        flex justify-between
      "
    >
      <p className="text-green-400 font-mono font-bold tracking-wide text-lg font-new">
        Created by: <span className="text-purple-400">Facundo Aylan</span>
      </p>

      <div className="flex gap-4 text-green-400">
        <a href={"https://github.com/FacundoAylan"} target="_black">
          <span className="hover:text-purple-400 transition-colors duration-200 cursor-pointer">🔗 GitHub</span>
        </a>

        <a href={"https://next-portafolio-sigma.vercel.app/"} target="_black">
          <span className="hover:text-purple-400 transition-colors duration-200 cursor-pointer">💼 Portfolio</span>
        </a>
      </div>
    </footer>
  )
}
