import { useEffect, useState } from "react";
import type { Character, EpisodeProps, LocationProps } from "../models/character.model";

export const useFetchDetailed = (id: number) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [location, setLocation] = useState<LocationProps | null>(null);
  const [episodes, setEpisodes] = useState<EpisodeProps[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // 1. Character
        const charRes = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const charData = await charRes.json();
        setCharacter(charData);

        // 2. Location
        if (charData.location.url) {
          const locRes = await fetch(charData.location.url);
          setLocation(await locRes.json());
        }

        // 3. Episodes
        const episodesData = await Promise.all(
          charData.episode.map((url: string) =>
            fetch(url).then(res => res.json())
          )
        );
        setEpisodes(episodesData);

      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { character, location, episodes, loading, error };
};
