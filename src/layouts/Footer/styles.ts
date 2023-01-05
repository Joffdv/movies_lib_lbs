import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 2.5rem 0;
  margin-top: 1rem;
  background: ${({ theme }) => theme.colors.secondaryColor};
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: .875rem;
  text-align: center;
  gap: .5rem;

  a {
    display: inline-block;
    color: ${({ theme }) => theme.colors.lightColor};

    &:last-of-type {
      font-weight: 700;
    }

    &:last-of-type:hover {
      text-decoration: underline;
    }
  }

  p {
    a {
      color: ${({ theme }) => theme.colors.lightColor};
      font-weight: bold;
    }
  }
`;
