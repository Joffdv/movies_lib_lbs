import React from 'react';
import * as S from './styles';
import { IoCloseSharp } from 'react-icons/io5';

const Modal = () => {
  const [modal, setModal] = React.useState<boolean>(true);

  const handleOutsideClick = ({
    target,
    currentTarget,
  }: React.MouseEvent<HTMLElement>) => {
    if (target === currentTarget) setModal(false);
  };

  React.useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : 'auto';
  }, [modal]);

  return (
    <S.ModalContainer modal={modal} onClick={handleOutsideClick}>
      <S.ModalWrapper>
        <S.ButtonClose>
          <button onClick={() => setModal(false)}>
            <IoCloseSharp />
          </button>
        </S.ButtonClose>

        <S.ModalContent>
          <h2>MoviesLibLBS</h2>
          <p>
            <strong>Nota:</strong> Esta aplicação web foi desenvolvida, para
            estudo, por{' '}
            <a
              href="https://projetoslucasbargas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lucas Bargas
            </a>{' '}
            com base em um layout disponibilizado pelo{' '}
            <a
              href="https://www.youtube.com/watch?v=XqxUHVVO7-U"
              target="_blank"
              rel="noopener noreferrer"
            >
              Matheus Battisti, do hora de codar
            </a>
            , no youtube. Porém, toda a codificação é própria.
          </p>

          <S.LinkToGithub
            href="https://github.com/LucasBargas/movies_lib_lbs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para visualizar o Repositório no GitHub
          </S.LinkToGithub>

          <div>
            <S.ViewButton onClick={() => setModal(false)}>
              Visualizar projeto
            </S.ViewButton>
          </div>
        </S.ModalContent>
      </S.ModalWrapper>
    </S.ModalContainer>
  );
};

export default Modal;
