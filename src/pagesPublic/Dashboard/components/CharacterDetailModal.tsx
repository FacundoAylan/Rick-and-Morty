import { Modal } from "../../../components";
import { useFetch } from "../../../hooks/useFetch";
import type { Character } from "../../../models/character.model";

export const CharacterDetailModal = ({ id }: { id: number }) => {

  const { data, loading, error } = useFetch<Character>(`https://rickandmortyapi.com/api/character/${id}`);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error cargando personaje</div>;

  return (
    <Modal>
      <div className="flex mt-8">
        <img src={data?.image} alt={data?.name}  className="w-[25%] h-46"/>
        <section>
          <h2 className="text-center">{data?.name}</h2>
          <p>Status: {data?.status}</p>
          <p>Especie: {data?.species}</p>
          <p>Origen: {data?.origin.name}</p>
          <p>Locación: {data?.location.name}</p>
        </section>
      </div>
    </Modal>
  );
};
