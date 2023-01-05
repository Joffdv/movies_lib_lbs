import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';

interface Props {
  mobile: boolean;
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const navList = [
  { id: 1, title: 'Início', path: '/' },
  { id: 2, title: 'Mais populares', path: '/mais-populares' },
  { id: 3, title: 'Melhores avaliados', path: '/melhores-avaliados' },
  { id: 4, title: 'Em breve', path: '/em-breve' },
];

const HeaderNav = ({ mobile, setMobile }: Props) => {
  const { pathname } = useRouter();

  return (
    <S.HeaderNavContainer mobile={mobile}>
      <ul>
        {navList.map((nav) => (
          <li key={nav.id}>
            <Link
              onClick={() => mobile && setMobile(false)}
              className={pathname === nav.path ? 'active' : ''}
              href={nav.path}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </S.HeaderNavContainer>
  );
};

export default HeaderNav;
