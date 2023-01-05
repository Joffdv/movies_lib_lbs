import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica';
    color: ${({ theme }) => theme.colors.lightColor};
  }

  html {
    font-size: 16px;

    @media (max-width: 360px) {
      font-size: 14px;
    }

    @media (max-width: 320px) {
      font-size: 13px;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.primaryColor};

    ul, li {
      list-style: none;
    }

    input, textarea, button {
      outline: none;
      border: none;
      color: ${({ theme }) => theme.colors.primaryColor};
    }

    button {
      display: block;
      cursor: pointer;
    }

    p {
      line-height: 1.425rem;
    }

    a {
      display: block;
      text-decoration: none;
    }

    input, label, img, svg, span, button {
      display: block;
    }

    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export default Globals;
