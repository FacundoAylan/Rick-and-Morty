export interface EpisodeProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export interface LocationProps {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: string;
  origin: LocationProps;
  location: LocationProps;
  image: string;
  episode: string[];
  url: string;
  created: string;
}


