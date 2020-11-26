import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color:dargrey;
        }
    }
    body{
        font-family: 'Cairo', sans-serif;
        width:100%;
    }
    h2{
        font-size:2rem;
        color: #333;
    }
    h3{
        color: #333;
    }
    p{
        font-size:1.2rem;
        line-height:200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
`;

export default GlobalStyles;