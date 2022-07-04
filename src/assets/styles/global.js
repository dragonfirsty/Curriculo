import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
}
:root {
    --background: #1B181F;
    --textcolor: #fff;
}
body{
    color: var(--textcolor);
    background-color:	var(--background);
    background-image: url("https://st2.depositphotos.com/1008191/5284/i/600/depositphotos_52847477-stock-photo-abstract-blue-background-vignette-black.jpg");
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    
}
img{
    max-width: 100vw;
    max-height: 100vh;
}
h1,h2,h3,h4{

    font-family: sans-serif;
}
h2{
    font-size:16px;
}
h3{
    font-size:14px;
    font-weight: normal;
}
a,a:hover,a:focus,a:active {

text-decoration:none;
color: inherit;

}
a:hover{
    text-decoration:underline;
    color:black;
}
ul{
    list-style: none;
}
button{
    cursor:pointer;
}
`;

export default GlobalStyle;
