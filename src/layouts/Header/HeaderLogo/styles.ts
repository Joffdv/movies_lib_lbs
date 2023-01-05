import styled from 'styled-components';

export const HeaderLogoContainer = styled.div`
  a {
    display: inline-block;;
    align-items: center;

    @media (max-width: 414px) {
      display: flex;
      gap: .5rem;
    }

    &:hover {
      svg, span {
        color: ${({ theme }) => theme.colors.goldenColorHover};
        fill: ${({ theme }) => theme.colors.goldenColorHover};
      }
    }

    svg, span {
      display: inline-block;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.goldenColor};
      fill: ${({ theme }) => theme.colors.goldenColor};
      font-weight: 700;
      transition: .4s;
    }

    svg {
      position: relative;
      top: 3px;
      margin-right: .625rem;

      @media (max-width: 414px) {
        margin: 0;
      }
    }
  }
`;
