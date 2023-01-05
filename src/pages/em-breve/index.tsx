import IMovie from '../../interfaces/IMovie';
import { GetStaticProps } from 'next';
import Showcase from '../../components/Showcase';
import HeadPerPage from '../../components/HeadPerPage';

const apiUrl = process.env.NEXT_PUBLIC_API;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiImage = process.env.NEXT_PUBLIC_IMG;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${apiUrl}/movie/upcoming?${apiKey}&page=2&language=pt-BR&include_adult=false`,
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

const ComingSoon = ({ movies }: Props) => {
  const moviesMap = movies.map((movie) => {
    return {
      ...movie,
      poster: `${apiImage}${movie.poster_path}`,
    };
  });

  return (
    <>
      <HeadPerPage title="Em breve - MoviesLibLBS" />
      <Showcase sliced={false} title="Em breve" movies={moviesMap} />
    </>
  );
};

export default ComingSoon;
