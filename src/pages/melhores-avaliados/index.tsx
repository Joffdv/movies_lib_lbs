import IMovie from '../../interfaces/IMovie';
import { GetStaticProps } from 'next';
import Showcase from '../../components/Showcase';
import HeadPerPage from '../../components/HeadPerPage';

const apiUrl = process.env.NEXT_PUBLIC_API;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiImage = process.env.NEXT_PUBLIC_IMG;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${apiUrl}/movie/top_rated?${apiKey}&page=1&language=pt-BR&include_adult=false`,
  );
  const movies = await res.json();

  return {
    props: {
      movies: movies.results,
    },
  };
};

interface Props {
  movies: IMovie[];
}

const TopRatedMovies = ({ movies }: Props) => {
  const moviesMap = movies.map((movie) => {
    return {
      ...movie,
      poster: `${apiImage}${movie.poster_path}`,
    };
  });

  return (
    <>
      <HeadPerPage title="Melhores avaliados - MoviesLibLBS" />
      <Showcase sliced={false} title="Melhores avaliados" movies={moviesMap} />
    </>
  );
};

export default TopRatedMovies;
