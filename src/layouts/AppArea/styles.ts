import styled from 'styled-components';

export const AppAreaWrapper = styled.section`
  min-height: calc(100vh + 1rem);
  display: flex;
  flex-direction: column;
  padding-top: 7.5rem;

  @media (max-width: 1024px) {
    padding-top: 8.5rem;
  }

  main {
    flex: 1;
  }
`;
