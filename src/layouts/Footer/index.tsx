import * as S from './styles';
import AppContainer from '../../components/AppContainer';

const Footer = () => {
  return (
    <S.FooterContainer>
      <AppContainer>
        <S.FooterWrapper>
          <p>
            Esta aplicação web foi desenvolvida por{' '}
            <a
              target="_blank"
              href="https://projetoslucasbargas.vercel.app/"
              rel="noopener noreferrer"
            >
              Lucas Bargas
            </a>{' '}
            com base em um layout apresentado pelo{' '}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=XqxUHVVO7-U"
              rel="noopener noreferrer"
            >
              Matheus Battisti, do Hora de Codar
            </a>{' '}
            no youtube mas com alterações na interface e acréscimos de recursos.
          </p>

          <a
            href="https://github.com/LucasBargas/movies_lib_lbs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para visualizar o repositório no GitHub
          </a>
        </S.FooterWrapper>
      </AppContainer>
    </S.FooterContainer>
  );
};

export default Footer;
