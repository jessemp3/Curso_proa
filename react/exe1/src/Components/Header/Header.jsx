import styled from "styled-components"
import NavBar from "../NavBar/NavBar"


const HeaderComponente = styled.div`
    width: 90%;
    height: 500px;
    margin: 20px auto 0 ;
    padding-bottom: 20px;
    background:url('https://images.pexels.com/photos/16241621/pexels-photo-16241621/free-photo-of-madeira-arte-vintage-retro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: end;
    justify-content:center;
`



export default function Header(){
    return(
        <HeaderComponente>
            <NavBar/>
        </HeaderComponente>
    )
}