import HeadPerPage from '../../components/HeadPerPage';
import MoviePage from '../../templates/MoviePage';
import ISingleMovie from '../../interfaces/ISingleMovie';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

const apiUrl = process.env.NEXT_PUBLIC_API;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiImage = process.env.NEXT_PUBLIC_IMG;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = (context.params as ParsedUrlQuery).id;
  const res = await fetch(`${apiUrl}/movie/${id}?${apiKey}&language=pt-BR`);
  const movie = await res.json();

  return {
    props: { movie },
  };
};

interface Props {
  movie: ISingleMovie;
}

const Movie = ({ movie }: Props) => {
  const movieChanged = {
    ...movie,
    poster: `${apiImage}${movie.poster_path}`,
  };

  return (
    <>
      <HeadPerPage title={`${movieChanged.title} - MoviesLibLBS`} />
      <MoviePage movie={movieChanged} />
    </>
  );
};

export default Movie;
