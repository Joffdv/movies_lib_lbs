import styled from 'styled-components';

export const NotFoundPageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  height: calc(100vh - 6.75rem);
  width: 100%;

  @media (max-width: 1024px) {
    height: calc(100vh - 7.75rem);
  }
`;

export const NotFoundPageWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.goldenColor};
    margin-bottom: 1.25rem;
  }

  img {
    width: 160px;
    height: auto;
  }
`;
