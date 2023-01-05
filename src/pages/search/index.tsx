import { useRouter } from 'next/router';
import HeadPerPage from '../../components/HeadPerPage';
import Showcase from '../../components/Showcase';
import useReqApi from '../../hooks/useReqApi';
const apiSearch = process.env.NEXT_PUBLIC_SEARCH;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiImage = process.env.NEXT_PUBLIC_IMG;

const Search = () => {
  const { query } = useRouter();
  const { datas: movies } = useReqApi(
    'q' in query &&
      `${apiSearch}?${apiKey}&language=pt-BR&query=${query.q}&include_adult=false`,
  );

  const moviesMap =
    movies &&
    movies.results.map((movie) => {
      return {
        ...movie,
        poster: `${apiImage}${movie.poster_path}`,
      };
    });

  return (
    moviesMap && (
      <>
        <HeadPerPage title="Buscar - MoviesLibLBS" />
        <Showcase
          sliced={false}
          title={`Resultados para: ${query.q}`}
          movies={moviesMap}
          query={query.q}
        />
      </>
    )
  );
};

export default Search;
