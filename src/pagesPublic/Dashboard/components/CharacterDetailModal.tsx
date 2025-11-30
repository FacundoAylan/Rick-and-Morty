import { IsErrorPage, IsLoading, Modal } from "../../../components";
import { Carrucel } from "../../../components";
import { useFetchDetailed } from "../../../hooks/useFetchDetailed";

interface Props {
  id: number;
}

export const CharacterDetailModal = ({ id }: Props) => {

  const { character, location, episodes, loading, error } = useFetchDetailed(id);


  if (loading) return <IsLoading/>;
  if (error) return <IsErrorPage />;

  return (
    <Modal>
      <div className="flex flex-col items-center justify-center gap-6 w-full">

        <div className="flex gap-8 w-full mt-4">
          {/* Image */}
          <img
            src={character?.image}
            alt={character?.name}
            className="w-[30%] h-auto rounded-xl border-4 border-purple-600 shadow-lg 
                 hover:scale-105 transition-transform duration-300 my-2"
          />

          {/* Info character */}
          <section className="flex flex-col gap-1 text-gray-200 w-[70%]">
            <h2 className="text-3xl font-bold text-purple-400 font-new text-center">{character?.name}</h2>
            <p><span className="text-green-400 font-semibold">Status:</span> {character?.status}</p>
            <p><span className="text-green-400 font-semibold">Especie:</span> {character?.species}</p>
            <p><span className="text-green-400 font-semibold">Origen:</span> {character?.origin?.name}</p>
            <p><span className="text-green-400 font-semibold">Locación Actual:</span> {character?.location?.name}</p>

            {location && (
              <p><span className="text-green-400 font-semibold">Tipo de Locación:</span> {location.type}</p>
            )}

            <p><span className="text-green-400 font-semibold">Género:</span> {character?.gender}</p>
          </section>
        </div>
      </div>


      {/* Episodes */}
      <h3 className="text-2xl font-bold mt-2 px-4 
                 text-purple-400 border-b border-purple-600 pb-2">
        Episodes
      </h3>

      <Carrucel>
        {episodes.map(ep => (
          <div
            key={ep.id}
            className="min-w-[220px] bg-gradient-to-b from-gray-900 via-gray-800 to-black 
                   px-4 py-3 flex flex-col justify-center text-white rounded-xl shadow-lg 
                   hover:scale-105 hover:shadow-green-400/50 transition-transform duration-300"
          >
            <h4 className="font-bold text-green-400">{ep.episode}</h4>
            <p className="text-sm">{ep.name}</p>
            <p className="text-xs opacity-70 mt-1 italic">Fecha: {ep.air_date}</p>
          </div>
        ))}
      </Carrucel>
    </Modal>

  );
};
