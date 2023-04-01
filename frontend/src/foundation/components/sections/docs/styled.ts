import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: .3fr 1fr 1fr .3fr;
  grid-template-rows: 0.25fr 2.4fr 0.5fr ;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "Header Header Header Header"
    "NavBar content content indexs"
    "NavBar Footer Footer Footer";
`

export const Header = styled.header`
  grid-area: Header; 
  background-color: #151515;

  & article{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }
`

export const NavBar = styled.nav`
  grid-area: NavBar; 
  background-color: red;
`


export const Indexs = styled.div`
  grid-area: indexs; 
  background-color: pink;
`

export const Content = styled.div`
  grid-area: content; 
  background-color: aqua;
`

export const Footer = styled.footer`
  grid-area: Footer; 
  background-color: #151515;

  & article{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    gap: 1.5rem;
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }
`

export const styledsFromExport = { Container, Header, NavBar, Footer, Indexs, Content  };
export default styledsFromExport;