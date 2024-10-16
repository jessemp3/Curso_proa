import styled from "styled-components";
import '../../styles/navbar.scss'


const NavBarComponent = styled.div`
    position: relative;
    width: 40%;
    height: 40px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    

    a{
        text-decoration: none;
        color: #030303;

    }
`

export default function NavBar(){
    return(
        <NavBarComponent className="Container-navBar">
            <a href="">Home</a>
            <a href="">Sobre nós</a>
            <a href="">Instrumentos</a>
            <a href="">Endereços</a>
            <a href="">Contato</a>
        </NavBarComponent>
    )
}