import styled, { css } from 'styled-components';

export const ShowcaseContainer = styled.div<{ sliced: boolean }>`
  padding: 2.5rem 0;

  ${({ sliced }) =>
    sliced &&
    css`
    padding: 0;
  `}

  h1 {
    font-size: 1.75rem;
  }
`;

export const ShowcaseWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding-top: 1.5rem;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.325rem;
  }
`;

export const ShowcaseButton = styled.div`
  text-align: center;
  padding-top: 2rem;

  a {
    background: ${({ theme }) => theme.colors.goldenColor};
    color: ${({ theme }) => theme.colors.primaryColor};
    padding: .75rem;
    margin: 0 auto;
    max-width: 180px;
    border-radius: 3px;
    font-weight: 700;
    transition: .4s;
    border: 2px solid transparent;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryColor};
      border-color: ${({ theme }) => theme.colors.goldenColor};
      color: ${({ theme }) => theme.colors.lightColor};

      @media (max-width: 1024px) {
        background: ${({ theme }) => theme.colors.goldenColor};
        border-color: transparent;
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
  }
`;
