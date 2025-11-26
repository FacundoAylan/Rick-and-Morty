
import { useFetch } from "../../hooks/useFetch";
import type { Character } from "../../models/character.model";
import { Footer, NavBar } from "../section";
import { Card } from "./components/Card";

interface APIResponse {
  results: Character[];
}

export const Dashboard = ()=>{

  const {data, loading, error} = useFetch<APIResponse>("https://rickandmortyapi.com/api/character");

  if(loading){
    <div>Cargando la pagina</div>
  }

  if(error){
    <div>No se pudo traer la información</div>
  }

  console.log(data?.results)
  return(
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <NavBar />

      <section className="flex flex-wrap gap-4 justify-center overflow-y-auto p-4">
        {data?.results?.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </section>
      
      <Footer />
    </div>
  )
}