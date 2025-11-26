import { useState } from "react"
import { SelectFilter } from "../../../components/Select/SelectFilter.tsx"

export const NavBar = () => {

  const [selectFilter, setSelectFilter ] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Searching:", e.target.value)
  }

  const handleFilterChange = (value: string) => {
    setSelectFilter(value)
  }

  return (
    <nav className="
      w-full flex items-center justify-between 
      px-6 py-4 
      bg-gradient-to-r from-gray-900 via-black to-gray-800 
      border-b-4 border-purple-700
      shadow-lg
    ">
      <h1 className="text-3xl font-new font-extrabold text-green-400 tracking-wide">
        Rick and Morty
      </h1>

      <input
        type="text"
        placeholder="Search characters..."
        onChange={handleSearch}
        className="
          px-4 py-2 
          rounded-lg 
          border-2 border-green-400 
          bg-gray-100 text-black 
          focus:outline-none focus:ring-2 focus:ring-purple-400
          shadow-md
        "
      />

      <SelectFilter
        options={[
          { value: "all", label: "All" },
          { value: "human", label: "Human" },
          { value: "alien", label: "Alien" },
          { value: "robot", label: "Robot" },
        ]}
        value={selectFilter}
        onChange={handleFilterChange}
      />

    </nav>
  )
}
