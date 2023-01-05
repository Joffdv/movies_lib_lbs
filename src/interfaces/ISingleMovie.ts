interface ISingleMovie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  vote_average: string;
  poster_path: string;
  genres: { id: number; name: string }[];
  poster: string;
  tagline: string;
  runtime: number;
  budget: number;
  revenue: number;
}

export default ISingleMovie;
