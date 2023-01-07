import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import HeadPerPage from '../../components/HeadPerPage';
import Showcase from '../../components/Showcase';
import IMovie from '../../interfaces/IMovie';

const apiSearch = process.env.NEXT_PUBLIC_SEARCH;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiImage = process.env.NEXT_PUBLIC_IMG;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const q = context.query.q;
  const res = await fetch(
    `${apiSearch}?${apiKey}&language=pt-BR&query=${q}&include_adult=false`,
  );
  const movies = await res.json();

  return {
    props: { movies: movies.results },
  };
};

interface Props {
  movies: IMovie[];
}

const Search = ({ movies }: Props) => {
  const { query } = useRouter();

  const moviesMap = movies.map((movie) => {
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
