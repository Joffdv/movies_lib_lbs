import styled from 'styled-components';

export const HeaderSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const HeaderSearchWrapper = styled.form`
  width: 100%;
  display: flex;
  height: 2.25rem;
  max-width: 400px;
  gap: .75rem;

  &:hover {
    input {

    }
  }

  @media (max-width: 1024px) {
    max-width: 100% !important;
  }

  input {
    width: 100%;
    border-radius: 3px;
    padding: 0px 2.325rem 0px 0.875rem;
    border: 2px solid transparent;

    &:focus, &:hover {
      border-color: ${({ theme }) => theme.colors.goldenColor};
      background: ${({ theme }) => theme.colors.secondaryColor};
      color: ${({ theme }) => theme.colors.lightColor};

      &::placeholder {
        color: ${({ theme }) => theme.colors.lightColor};
      }
    }
  }

  button {
    height: 2.25rem;
    background: ${({ theme }) => theme.colors.goldenColor};
    padding: 0 .75rem;
    border-radius: 3px;
    transition: .4s;
    border: 2px solid transparent;

    svg {
      fill: ${({ theme }) => theme.colors.primaryColor};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.secondaryColor};
      border-color: ${({ theme }) => theme.colors.goldenColor};

      @media (max-width: 1024px) {
        background: ${({ theme }) => theme.colors.goldenColor};
        border-color: transparent;
      }

      svg {
        fill: ${({ theme }) => theme.colors.goldenColor};

        @media (max-width: 1024px) {
          fill: ${({ theme }) => theme.colors.primaryColor};
        }
      }
    }
  }
`;

export const ClearInputButton = styled.button`
  position: absolute;
  right: 3.75rem;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  background: transparent;
  padding: .25rem .325rem;

  svg {
    fill: ${({ theme }) => theme.colors.goldenColor};
    font-size: 1.25rem;
  }
`;
