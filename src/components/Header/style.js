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
    justify-content:space-around;
    align-items:flex-start;
    padding:5px 15px;
    color:black;
    h2{
        font-size:27px;
        /* color:var(--grey); */
        /* font-weight:400; */
    }
    span{
        font-size:12px;
        color:var(--grey)
    }
    h3{
        font-size:14px;
        color:var(--grey);
        font-weight:400;
    }
`