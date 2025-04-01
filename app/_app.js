import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Mitr:wght@200;300;400;500;600;700&family=Noto+Sans+Thai:wght@100..900&display=swap');
    body{
        padding: 0;
        margin: 0;
        font-familt: 'Mitr', sans-serif;
    }
`;

export default function App({Component, pageProp}){
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProp}/>
        </>
    )
}