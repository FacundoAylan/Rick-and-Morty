export const IsLoading = () => {
  return (
    <div className="fixed z-20 flex flex-col gap-2 items-center justify-center w-full h-full backdrop-blur-sm">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
      <p className="text-center font-new text-4xl">Loadind..</p>
    </div>
  );
}