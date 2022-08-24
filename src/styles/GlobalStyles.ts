import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


html{
   
    // padrão 16px
    @media(max-width:67.5rem){
        font-size: 93.75%; //15px
    }

    @media(max-width: 45rem){
        font-size: 87.5%; // 14px
    }
}

body{
    background: #cccccc;
    
    -webkit-font-smoothing: antialiased;
}

body,input,button, textarea{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6, strong{
    font-weight: 500 ;
}

button{
    cursor: pointer;
}

[disabled]{
    cursor: not-allowed;
    opacity: 0.7;
}
`;
