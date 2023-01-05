import React from 'react';
import * as S from './styles';
import AppContainer from '../../components/AppContainer';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';
import { BsList } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [mobile, setMobile] = React.useState(false);

  return (
    <S.HeaderContainer>
      <AppContainer>
        <S.HeaderWrapper>
          <HeaderLogo mobile={mobile} setMobile={setMobile} />
          <HeaderSearch mobile={mobile} setMobile={setMobile} />
          <HeaderNav mobile={mobile} setMobile={setMobile} />
          <S.HeaderMobileButton>
            <button onClick={() => setMobile(!mobile)}>
              <i>{mobile ? <IoClose /> : <BsList />}</i>
            </button>
          </S.HeaderMobileButton>
        </S.HeaderWrapper>
      </AppContainer>
    </S.HeaderContainer>
  );
};

export default Header;
