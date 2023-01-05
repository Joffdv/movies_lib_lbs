import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';
import IMovie from '../../interfaces/IMovie';
import { BsStarFill } from 'react-icons/bs';

interface Props {
  movie: IMovie;
}

const Card = ({ movie }: Props) => {
  return (
    <S.CardContainer>
      <S.CardWrapper>
        <figure>
          <Link href={`/filme/${movie.id}`}>
            <Image
              width={500}
              height={750}
              src={movie.poster}
              alt={movie.title}
              priority
            />
          </Link>
        </figure>

        <S.CardInfoMovie>
          <Link href={`/filme/${movie.id}`}>{movie.title}</Link>
          <span>
            <i>
              <BsStarFill />
            </i>
            {Number(movie.vote_average).toFixed(1)}
          </span>
        </S.CardInfoMovie>
      </S.CardWrapper>

      <S.CardDetailsButton>
        <Link href={`/filme/${movie.id}`}>Detalhes</Link>
      </S.CardDetailsButton>
    </S.CardContainer>
  );
};

export default Card;
