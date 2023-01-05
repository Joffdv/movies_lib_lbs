import Link from 'next/link';
import * as S from './styles';
import { MdMovieFilter } from 'react-icons/md';

interface Props {
  mobile: boolean;
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderLogo = ({ mobile, setMobile }: Props) => {
  return (
    <S.HeaderLogoContainer onClick={() => mobile && setMobile(false)}>
      <Link href="/">
        <i>
          <MdMovieFilter />
        </i>
        <span>MoviesLibLBS</span>
      </Link>
    </S.HeaderLogoContainer>
  );
};

export default HeaderLogo;
