
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import type { Character } from "../../models/character.model";
import { Footer, NavBar } from "../section";
import { CharacterCard, CharacterDetailModal } from "./components";
import { useModalContext } from "../../components/Modal/context";

interface APIResponse {
  results: Character[];
}

export const Dashboard = ()=>{

  const {data, loading, error} = useFetch<APIResponse>("https://rickandmortyapi.com/api/character");

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { setState } = useModalContext();

  const handleOpenModal = (id: number) => {
    setSelectedId(id);
    setState(true);
  };


  if(loading){
    <div>Cargando la pagina</div>
  }

  if(error){
    <div>No se pudo traer la información</div>
  }

  return(
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <NavBar />

      <section className="flex flex-wrap gap-4 justify-center overflow-y-auto p-4">
        {data?.results?.map((character) => (
          <CharacterCard 
            key={character.id} 
            character={character} 
            onViewMore={() => handleOpenModal(character.id)}  
          />
        ))}
      </section>
      
      {selectedId && <CharacterDetailModal id={selectedId} />}
      
      <Footer />
    </div>
  )
}