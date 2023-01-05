import styled, { keyframes } from 'styled-components';

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.section<{ modal: boolean }>`
  display: ${({ modal }) => (modal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20000;

  a {
    display: inline-block;
  }
`;

export const ModalWrapper = styled.div`
  width: 590px;
  height: auto;
  border: 1px solid rgba(240,246,252,0.1);
  background: ${({ theme }) => theme.colors.lightColor};
  box-shadow: 0 .5rem 1.5rem #010409;
  border-radius: 10px;
  animation: ${modalAnimation} .6s forwards;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const ButtonClose = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    height: 46px;
    width: 46px;
    background: transparent;

    svg {
      font-size: 2rem;
      fill: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1.25rem 40px 1.25rem;

  h2 {
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 1.25rem;
  }

  p {
    color: ${({ theme }) => theme.colors.primaryColor};
    line-height: 1.5;
    word-spacing: 1px;

    a {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`;

export const LinkToGithub = styled.a`
  display: inline-block;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryColor};
  margin: 10px 0 30px 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const ViewButton = styled.button`
  background: ${({ theme }) => theme.colors.primaryColor};
  padding: .75rem 1rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lightColor};
  transition: .4s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryColor};
  }
`;
