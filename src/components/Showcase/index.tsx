import * as S from './styles';
import IMovie from '../../interfaces/IMovie';
import AppContainer from '../AppContainer';
import Card from '../Card';
import Link from 'next/link';

interface Props {
  query?: string | string[];
  pathRedirect?: string;
  sliced: boolean;
  title: string;
  movies: IMovie[];
}

const Showcase = ({ query, pathRedirect, sliced, title, movies }: Props) => {
  return (
    <S.ShowcaseContainer sliced={sliced}>
      <AppContainer>
        <>
          {movies.length === 0 && (
            <h1>{query && `Nenhum resultado encontrado para: ${query}`}</h1>
          )}
        </>
        <>
          {movies.length > 0 && (
            <>
              <h1>{title}</h1>
              <S.ShowcaseWrapper>
                {movies.map((movie) => (
                  <Card key={movie.id} movie={movie} />
                ))}
              </S.ShowcaseWrapper>

              {sliced && pathRedirect && (
                <S.ShowcaseButton>
                  <Link href={pathRedirect}>Ver mais</Link>
                </S.ShowcaseButton>
              )}
            </>
          )}
        </>
      </AppContainer>
    </S.ShowcaseContainer>
  );
};

export default Showcase;
