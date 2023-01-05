import { GetStaticProps } from 'next';
import HeadPerPage from '../components/HeadPerPage';
import IMovie from '../interfaces/IMovie';
import HomePage from '../templates/HomePage';

const apiUrl = process.env.NEXT_PUBLIC_API;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiImage = process.env.NEXT_PUBLIC_IMG;

export const getStaticProps: GetStaticProps = async () => {
  const resMorePopularMovies = await fetch(
    `${apiUrl}/movie/popular?${apiKey}&page=1&language=pt-BR&include_adult=false`,
  );
  const morePopularMovies = await resMorePopularMovies.json();

  const resTopRatedMovies = await fetch(
    `${apiUrl}/movie/top_rated?${apiKey}&page=1&language=pt-BR&include_adult=false`,
  );
  const topRatedMovies = await resTopRatedMovies.json();

  const resComingSoonMovies = await fetch(
    `${apiUrl}/movie/upcoming?${apiKey}&page=2&language=pt-BR&include_adult=false`,
  );
  const comingSoonMovies = await resComingSoonMovies.json();

  return {
    props: {
      morePopularMovies: morePopularMovies.results,
      topRatedMovies: topRatedMovies.results,
      comingSoonMovies: comingSoonMovies.results,
    },
  };
};

interface Props {
  morePopularMovies: IMovie[];
  topRatedMovies: IMovie[];
  comingSoonMovies: IMovie[];
}

const Home = ({
  morePopularMovies,
  topRatedMovies,
  comingSoonMovies,
}: Props): JSX.Element => {
  const morePopularMoviesMap = morePopularMovies
    .map((movie) => {
      return {
        ...movie,
        poster: `${apiImage}${movie.poster_path}`,
      };
    })
    .slice(0, 8);

  const topRatedMoviesMap = topRatedMovies
    .map((movie) => {
      return {
        ...movie,
        poster: `${apiImage}${movie.poster_path}`,
      };
    })
    .slice(0, 8);

  const comingSoonMoviesMap = comingSoonMovies
    .map((movie) => {
      return {
        ...movie,
        poster: `${apiImage}${movie.poster_path}`,
      };
    })
    .slice(0, 8);

  return (
    <>
      <HeadPerPage title="MoviesLibLBS" />
      <HomePage
        morePopularMovies={morePopularMoviesMap}
        topRatedMovies={topRatedMoviesMap}
        comingSoonMovies={comingSoonMoviesMap}
      />
    </>
  );
};

export default Home;
