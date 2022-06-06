import styled from "styled-components"

export const NavStyle = styled.nav`
    height:60px;
    background-color: var(--bluePurple);
    display:flex;
    flex-direction:horizontal;
    justify-content:space-between;
    align-items:center;
    padding:0 15px;

    img{
        height:40px;
    }

`

export const DivTitleStyle = styled.header`
    height:190px;
    background-color: var(--bluePurpleLight);
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:0 15px;
    color:black;
`