import { CardButton } from "../../../components"
import type { Character } from "../../../models/character.model";

interface Props {
  character: Character;
  onViewMore: ()=>void;
}

export const CharacterCard = ({ character, onViewMore }: Props) => {

  return (
    <div className="
      w-64 h-[420px]
      flex flex-col 
      justify-between 
      items-center
      rounded-2xl 
      border-4 border-purple-700 
      bg-gradient-to-b from-gray-900 via-black to-gray-800 
      shadow-sm p-4 
      text-center  font-serif
    ">
      <h1 className="
        text-3xl font-extrabold text-green-600 mb-2 tracking-wide 
        break-words line-clamp-1 font-new
      ">
        {character.name}
      </h1>

    <div className="w-80 h-40 relative flex items-center justify-center hover:scale-110 transition-transform duration-300">
      {/* Portal */}
      <img
        src="/image/portal.webp"
        alt="Portal gif"
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Character */}
      <img
        src={character.image}
        alt={character.name}
        className="w-[35%] h-[70%] object-cover rounded-full shadow-md z-10"
      />
    </div>



      <div className="text-sm text-gray-200 space-y-1 mb-4 flex-grow mt-4">
        <p><span className="text-green-400 font-semibold">Species:</span> {character.species}</p>
        <p><span className="text-green-400 font-semibold">Gender:</span> {character.gender}</p>
      </div>

      <CardButton 
        parentMethod={onViewMore} 
        image={character.image} className="mx-auto"
      >
        View more
      </CardButton>

    </div>
  )
}
