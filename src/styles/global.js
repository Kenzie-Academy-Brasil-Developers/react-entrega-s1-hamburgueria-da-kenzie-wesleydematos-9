import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    :root{
        --color-primary: #27AE60;
        --color-primary-ligth: #93D7AF;
        --color-secondary: #EB5757;
        --gray-100: #333333;
        --gray-50: #828282;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;
        --negative: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB;
        --white: #FFFFFF;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    ul, ol, li{
        list-style: none;
    }

    @media (min-width: 1600px) {
        body{
            overflow: hidden;
        }
    }
`;
