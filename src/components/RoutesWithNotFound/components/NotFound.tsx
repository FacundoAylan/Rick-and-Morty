export const NotFound = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-black text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-6">404</h1>
      <p className="text-xl text-gray-300 mb-4">
        Oops... Page not found
      </p>
      <p className="mt-6 text-green-400 font-mono">
        Everything is fine... or is it?
      </p>
    </section>
  )
}
