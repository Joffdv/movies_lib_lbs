import styled from 'styled-components';

export const MoviePageContainer = styled.section`
  padding: 2.5rem 0;
`;

export const MoviePageInfosWrapper = styled.div`
  display: grid;
  grid-template-columns: 47% 53%;

  @media(max-width: 992px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }

  figure {
    background: ${({ theme }) => theme.colors.secondaryColor};
    padding: 1.25rem;
    border-radius: 4px;

    @media(max-width: 992px) {
      max-width: 50%;
      margin: 0 auto;
    }

    @media(max-width: 640px) {
      max-width: 70%;
    }

    @media(max-width: 576px) {
      max-width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const MoviePageInfosDatas = styled.div`
  padding-left: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.325rem;

  @media(max-width: 1024px) {
    padding-left: 3rem;
  }

  @media(max-width: 992px) {
    padding-left: 0;
  }
`;

export const MoviePageInfosDatasTitle = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.goldenColor};
  padding-bottom: .5rem;
  gap: 1rem;

  @media(max-width: 576px) {
    padding-bottom: 1rem;
  }

  span {
    display: flex;
    gap: .5rem;
    font-size: .875rem;
    padding-top: 1.25rem;
    font-weight: 600;
    position: relative;
    top: -8px;

    svg {
      fill: ${({ theme }) => theme.colors.goldenColor};
    }
  }

  h1 {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.goldenColor};
  }
`;

export const MoviePageInfosDatasCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  a {
    border: 2px solid ${({ theme }) => theme.colors.goldenColor};
    border-radius: .875rem;
    padding: .5rem 1rem;
    font-size: .875rem;
    font-weight: 700;
    transition: .4s;

    &:hover {
      background: ${({ theme }) => theme.colors.goldenColor};
      color: ${({ theme }) => theme.colors.secondaryColor};

      @media (max-width: 1024px) {
        background: ${({ theme }) => theme.colors.secondaryColor};
        color: ${({ theme }) => theme.colors.lightColor};
      }
    }
  }
`;

export const MoviePageInfosDatasDefault = styled.div`
  display: flex;
  flex-direction: column;
  gap: .325rem;

  h2 {
    display: flex;
    gap: .5rem;
    font-size: 1.125rem;

    svg {
      fill: ${({ theme }) => theme.colors.goldenColor};
      stroke: ${({ theme }) => theme.colors.goldenColor};
    }
  }

  p {
    line-height: 1.5rem;
  }

  strong {
    color:${({ theme }) => theme.colors.goldenColor};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: .25rem;
  }
`;
