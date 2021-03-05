import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
        width: 100hw;
        background: #eaebef;
        color: #7a7a7a;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
    
    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;