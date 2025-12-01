import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import type { Character} from "../../models/character.model";
import { Footer, NavBar } from "../section";
import { CharacterCard, CharacterDetailModal } from "./components";
import { useModalContext } from "../../components/Modal/context";
import { IsErrorPage, IsLoading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter} from "../../redux/action";
import type { AppDispatch, RootState } from "../../redux/store";
import { Pagination } from "../../components/Pagination/Pagination";

interface APIResponse {
  results: Character[];
}

const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const Dashboard = ()=>{
  
  const characters = useSelector((state:RootState) => state.characters.filteredItems);
  const dispatch = useDispatch<AppDispatch>();

  const {data, loading, error} = useFetch<APIResponse>(apiUrl);

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { setState } = useModalContext();

  const [currentPageItems, setCurrentPageItems] = useState<Character[]>([]);
  const itemsPerPage = 8;

  const handleOpenModal = (id: number) => {
    setSelectedId(id);
    setState(true);
  };

  useEffect(() => {
    if(data?.results){
      dispatch(addCharacter(data.results));
    }
  }, [data]);

  if(loading) return <IsLoading/>;

  if(error) return <IsErrorPage/>;


  return(
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <NavBar />

      <section className="min-h-[78%] flex flex-wrap gap-4 justify-center overflow-y-auto p-4">
        {currentPageItems.map((character) => (
          <CharacterCard 
            key={character.id} 
            character={character} 
            onViewMore={() => handleOpenModal(character.id)}  
          />
        ))}
      </section>
      
      {selectedId && <CharacterDetailModal id={selectedId} />}
      
      <div>
        <Pagination 
          items={characters} 
          itemsPerPage={itemsPerPage} 
          onPageChange={setCurrentPageItems}
        />
        <Footer />
      </div>
    </div>
  )
}
