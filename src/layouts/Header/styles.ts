import styled from 'styled-components';
import { HeaderLogoContainer } from './HeaderLogo/styles';
import { HeaderNavContainer } from './HeaderNav/styles';
import { HeaderSearchContainer } from './HeaderSearch/styles';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondaryColor};
  height: 7.5rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2000;

  @media (max-width: 1024px) {
    height: 8.5rem;
  }
`;

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  ${HeaderLogoContainer} {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  ${HeaderSearchContainer} {
    grid-column: 2/3;
    grid-row: 1/3;

    @media (max-width: 1024px) {
      grid-column: 1/3;
      grid-row: 2/3;
    }
  }

  ${HeaderNavContainer} {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

export const HeaderMobileButton = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    grid-column: 2/3;
    grid-row: 1/2;
  }

  button {
    background: transparent;

    svg {
      font-size: 1.9325rem;
      fill: ${({ theme }) => theme.colors.goldenColor};

      @media (max-width: 1024px) {
        font-size: 2.25rem;
      }
    }
  }
`;
