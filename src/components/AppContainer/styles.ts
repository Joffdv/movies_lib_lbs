import styled from 'styled-components';

export const AppContainerWrapper = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;

  @media (max-width: 1366px) {
    max-width: 1200px;
  }

  @media (max-width: 1280px) {
    max-width: 1140px;
  }

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 390px) {
    padding: 0 1.25rem;
  }
`;
