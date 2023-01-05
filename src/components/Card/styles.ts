import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: ${({ theme }) => theme.colors.secondaryColor};
  padding: .875rem;
  border-radius: 4px;
`;

export const CardWrapper = styled.div`
  flex: 1;

  figure {
    width: 100%;
    overflow: hidden;

    &:hover {
      img {
        transform: scale(1.1);
        transition: .4s;

        @media (max-width: 1024px) {
          transform: scale(1);
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      transition: .4s;
    }
  }

  a {
    font-weight: 700;
  }
`;

export const CardInfoMovie = styled.div`
  padding-top: 1rem;

  a {
    transition: .4s;
    text-align: center;
    line-height: 1.325rem;

    &:hover {
      color: ${({ theme }) => theme.colors.goldenColor};

      @media (max-width: 1024px) {
        color: ${({ theme }) => theme.colors.lightColor};
      }
    }
  }

  span {
    display: flex;
    gap: .5rem;
    font-size: .875rem;
    padding-top: 1.25rem;

    svg {
      fill: ${({ theme }) => theme.colors.goldenColor};
    }
  }
`;

export const CardDetailsButton = styled.div`
  padding-top: 1rem;

  a {
    background: ${({ theme }) => theme.colors.goldenColor};
    color: ${({ theme }) => theme.colors.secondaryColor};
    border: 2px solid transparent;
    font-weight: 700;
    padding: .75rem;
    text-align: center;
    border-radius: 4px;
    transition: .4s;

    &:hover {
      background: ${({ theme }) => theme.colors.secondaryColor};
      border-color: ${({ theme }) => theme.colors.goldenColor};
      color: ${({ theme }) => theme.colors.goldenColor};

      @media (max-width: 1024px) {
        background: ${({ theme }) => theme.colors.goldenColor};
        color: ${({ theme }) => theme.colors.secondaryColor};
        border: 2px solid transparent;
      }
    }
  }
`;
