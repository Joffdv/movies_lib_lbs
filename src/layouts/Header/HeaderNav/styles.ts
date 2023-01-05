import styled, { css } from 'styled-components';

export const HeaderNavContainer = styled.nav<{ mobile: boolean }>`
  @media (max-width: 1024px) {
    position: absolute;
    top: 8.5rem;
    left: 0;
    z-index: 2001;
    background: ${({ theme }) => theme.colors.secondaryColor};
    width: 100%;
    height: 0;
    overflow-y: hidden;
    visibility: hidden;
    transition: .4s;

    ${({ mobile }) =>
      mobile &&
      css`
        height: calc(100vh - 8.5rem);
        visibility: visible;
        overflow-y: auto;
        transition: .4s;
    `}
  }

  ul {
    display: flex;
    gap: 1.25rem;

    @media (max-width: 1024px) {
      flex-direction: column;
      padding: 0 1.5rem;
      gap: 0;
    }

    @media (max-width: 390px) {
      padding: 0 1.25rem;
    }

    li {
      a {
        padding: .625rem 0;
        transition: .4s;

        &:hover {
          color: ${({ theme }) => theme.colors.goldenColor};

          @media (max-width: 1024px) {
            color: ${({ theme }) => theme.colors.lightColor};
          }
        }

        @media (max-width: 1024px) {
          padding: 1rem 0px;
        }

        &.active {
          color: ${({ theme }) => theme.colors.goldenColor};
          position: relative;

          &::after {
            content: '';
            bottom: 4px;
            left: 0;
            position: absolute;
            height: 2px;
            width: 100%;
            background: ${({ theme }) => theme.colors.goldenColor};
          }
        }
      }
    }
  }
`;
