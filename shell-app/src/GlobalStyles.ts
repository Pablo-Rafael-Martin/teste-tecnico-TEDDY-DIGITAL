import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
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

    #root {
        width: 100%;
        height: auto;
        min-height: 100%;
    }

    main {
        /* max-width: 100vw; */
        width: 100%;
        padding: 2rem;
    }


  body {
    --grey-1: #AAAAAA;
    --grey-2: #D9D9D9;
    --grey-3: #F5F5F5;
    --orange-1: #EC6724;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Inter', sans-serif;
  }

  html {
    font-size: 14px;
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
