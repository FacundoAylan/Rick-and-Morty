import { useState, useEffect} from "react";
import { SelectFilter } from "../../../components/Select/SelectFilter.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store.ts";
import { filtedCharacters } from "../../../redux/action.ts";
import { genderOption, speciesOption } from "../../../constants/constats.ts";
import { filterCharacters } from "./utils/filterCharacters.ts";

export const NavBar = () => {
  const characters = useSelector((state: RootState) => state.characters.items);
  const dispatch = useDispatch<AppDispatch>();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [speciesFilter, setSpeciesFilter] = useState<string>('all');
  const [genderFilter, setGenderFilter] = useState<string>('all');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filtrer: name + especie + gender
  useEffect(() => {
    const filtered = filterCharacters({characters, searchTerm, speciesFilter, genderFilter});

    if(filtered.length > 0) {
      dispatch(filtedCharacters(filtered));
    }

  }, [searchTerm, speciesFilter, genderFilter, characters, dispatch]);

  return (
    <nav className="
      w-full flex flex-col md:flex-row items-center justify-between
      px-6 py-4 
      bg-gradient-to-r from-gray-900 via-black to-gray-800 
      border-b-4 border-purple-700
      shadow-lg
      gap-4 font-serif
    ">
      <a href="/" className="hover:scale-105 transition-transform">
        <h1 className="text-3xl font-new font-extrabold text-green-400 tracking-wide">
          Rick and Morty
        </h1>
      </a>

      <div className="flex items-center w-full max-w-md relative">
        <input
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="
            flex-1 px-4 py-2 
            rounded-2xl 
            border-2 border-purple-600 
            bg-gray-300 text-green-900 font-bold
            focus:outline-none focus:ring-2 focus:ring-purple-400
            shadow-md
            transition duration-200
          "
          aria-label="Search characters"
        />
        
      </div>

      <div className="flex gap-2">
        {/* Filter especie */}
        <SelectFilter
          title="Species"
          options={speciesOption}
          value={speciesFilter}
          onChange={(value) => setSpeciesFilter(value.toLowerCase())}
        />

        {/* Filter gender */}
        <SelectFilter
          title="Gender"
          options={genderOption}
          value={genderFilter}
          onChange={(value) => setGenderFilter(value.toLowerCase())}
        />
      </div>
    </nav>
  );
};
