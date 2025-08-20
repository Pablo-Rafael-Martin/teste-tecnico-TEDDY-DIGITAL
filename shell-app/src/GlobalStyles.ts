import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Remove o estilo de autocomplete em navegadores WebKit (Chrome, Safari) */
  input:-webkit-autofill,
    textarea:-webkit-autofill {
        box-shadow: 0 0 0px 1000px white inset !important;
        -webkit-box-shadow: 0 0 0px 1000px white inset !important;
        -webkit-text-fill-color: #000 !important;
        transition: background-color 5000s ease-in-out 0s;
    }

    /* Firefox e outros navegadores modernos */
    input:-moz-autofill,
    textarea:-moz-autofill {
        box-shadow: 0 0 0px 1000px white inset !important;
        -moz-box-shadow: 0 0 0px 1000px white inset !important;
        color: #000 !important;
    }


  body {
    --primary-color: #003570;
    --header-height: 12.8rem;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // Adicionar fontes como feito abaixo
    /* font-family: var(--font-work-sans), sans-serif; */
  }

  html {
    font-size: 10px;
  }

  img {
    object-position: center;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: inherit;
  }

  section {
    position: relative;
  }

    ul {
        width: 100%;
    }
`;

export default GlobalStyles;
