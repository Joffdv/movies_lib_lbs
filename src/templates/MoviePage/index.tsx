import * as S from './styles';
import AppContainer from '../../components/AppContainer';
import Image from 'next/image';
import { BsStarFill, BsFileEarmarkText, BsGraphUp } from 'react-icons/bs';
import { WiTime3 } from 'react-icons/wi';
import { IoWalletOutline } from 'react-icons/io5';
import Link from 'next/link';
import ISingleMovie from '../../interfaces/ISingleMovie';

interface Props {
  movie: ISingleMovie;
}

const MoviePage = ({ movie }: Props) => {
  const handleConvertPrice = (value: number) => {
    const currencyBR = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return currencyBR.format(value);
  };

  return (
    <S.MoviePageContainer>
      <AppContainer>
        <S.MoviePageInfosWrapper>
          <figure>
            <Image
              width={500}
              height={750}
              src={movie.poster}
              alt={movie.title}
              priority
            />
          </figure>
          <S.MoviePageInfosDatas>
            <S.MoviePageInfosDatasTitle>
              {!!movie.vote_average && (
                <span>
                  <i>
                    <BsStarFill />
                  </i>
                  {Number(movie.vote_average).toFixed(1)}
                </span>
              )}
              <h1>{movie.title}</h1>
            </S.MoviePageInfosDatasTitle>

            <S.MoviePageInfosDatasDefault>
              <span>
                <strong>Título original:</strong> {movie.original_title}
              </span>
            </S.MoviePageInfosDatasDefault>

            <S.MoviePageInfosDatasCategories>
              {movie.genres.map((genre) => (
                <Link href={`/filme/${movie.id}`} key={genre.id}>
                  {genre.name}
                </Link>
              ))}
            </S.MoviePageInfosDatasCategories>

            {!!movie.overview && (
              <S.MoviePageInfosDatasDefault>
                <h2>
                  <i>
                    <BsFileEarmarkText />
                  </i>
                  Sinopse:
                </h2>

                <p>{movie.tagline}</p>
                <p>{movie.overview}</p>
              </S.MoviePageInfosDatasDefault>
            )}

            {!!movie.runtime && (
              <S.MoviePageInfosDatasDefault>
                <h2>
                  <i>
                    <WiTime3 />
                  </i>
                  Duração:
                </h2>

                <p>{movie.runtime} minutos</p>
              </S.MoviePageInfosDatasDefault>
            )}

            {!!movie.budget && (
              <S.MoviePageInfosDatasDefault>
                <h2>
                  <i>
                    <IoWalletOutline />
                  </i>
                  Orçamento:
                </h2>

                <p>{handleConvertPrice(movie.budget)}</p>
              </S.MoviePageInfosDatasDefault>
            )}

            {!!movie.revenue && (
              <S.MoviePageInfosDatasDefault>
                <h2>
                  <i>
                    <BsGraphUp />
                  </i>
                  Receita:
                </h2>

                <p>{handleConvertPrice(movie.revenue)}</p>
              </S.MoviePageInfosDatasDefault>
            )}
          </S.MoviePageInfosDatas>
        </S.MoviePageInfosWrapper>
      </AppContainer>
    </S.MoviePageContainer>
  );
};

export default MoviePage;
