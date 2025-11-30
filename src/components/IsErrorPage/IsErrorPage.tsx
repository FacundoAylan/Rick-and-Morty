export const IsErrorPage = () => {
  return (
    <div className="fixed z-10 flex flex-col items-center justify-center w-full h-full text-center p-4 font-new backdrop-blur-sm">
      <h1 className="text-6xl font-bold text-red-600 mb-4">¡Ups! somenthing went wrong.</h1>
      <p className="text-4xl text-purple-800">
        We couldn't load the information you were looking for. Place try again later.
      </p>
    </div>
  );
};