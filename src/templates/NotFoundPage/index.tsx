import * as S from './styles';
import AppContainer from '../../components/AppContainer';
import Image from 'next/image';
import notFoundImage from '../../../public/404.png';

const NotFoundPage = () => {
  return (
    <S.NotFoundPageContainer>
      <AppContainer>
        <S.NotFoundPageWrapper>
          <h1>Sentimos muito, página não encontrada!</h1>
          <Image
            alt="Página não encontrada"
            src={notFoundImage}
            width={465}
            height={516}
          />
        </S.NotFoundPageWrapper>
      </AppContainer>
    </S.NotFoundPageContainer>
  );
};

export default NotFoundPage;
