import React from 'react';
import { useRouter } from 'next/router';
import HeadPerPage from '../../components/HeadPerPage';
import MoviePage from '../../templates/MoviePage';
import ISingleMovie from '../../interfaces/ISingleMovie';

const apiUrl = process.env.NEXT_PUBLIC_API;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiImage = process.env.NEXT_PUBLIC_IMG;

const Movie = () => {
  const [movie, setMovie] = React.useState<ISingleMovie | null>(null);
  const { query } = useRouter();

  React.useEffect(() => {
    const reqDatas = async () => {
      let res;
      let json;

      if (!query?.id) return;

      try {
        res = await fetch(
          `${apiUrl}/movie/${query.id}?${apiKey}&language=pt-BR`,
        );
        json = await res.json();
      } catch (error) {
        json = null;
        return error;
      } finally {
        setMovie(json);
        return json;
      }
    };

    reqDatas();
  }, [query.id]);

  const movieChanged = movie && {
    ...movie,
    poster: `${apiImage}${movie.poster_path}`,
  };

  if (!movieChanged) return;

  // console.log(movieChanged);

  return (
    <>
      <HeadPerPage title={`${movieChanged.title} - MoviesLibLBS`} />
      <MoviePage movie={movieChanged} />
    </>
  );
};

export default Movie;
