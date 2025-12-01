import type { Character } from "../../../../models/character.model";

interface Props {
  characters: Character[];
  searchTerm: string;
  speciesFilter: string;
  genderFilter: string;
}

export const filterCharacters = ({
  characters,
  searchTerm,
  speciesFilter,
  genderFilter,
}: Props) => {
  return characters.filter((character) => {
    const matchesName = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecies =
      speciesFilter === "all" || character.species.toLowerCase() === speciesFilter.toLowerCase();
    const matchesGender =
      genderFilter === "all" || character.gender.toLowerCase() === genderFilter.toLowerCase();

    return matchesName && matchesSpecies && matchesGender;
  });
};
