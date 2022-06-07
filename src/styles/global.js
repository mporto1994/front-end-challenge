import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', sans-serif;
}
body {
    /* background-color: #023047; */
    height: 100vh;
    width: 100vw;
}

:root {
    --bluePurple:#3A0CA3;
    --bluePurpleLight:#3A0CA322;
    --bluePurpleDark:#3A0CA3BB;
    --purple:#7209B7;

    --blue:#4361EE;
    --grey:#969A97;
    --darkGrey:#272727;
}
`;
