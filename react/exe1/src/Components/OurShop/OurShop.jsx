import styled from "styled-components";
import Cards from "../Cards/Card";
import  '../../app.css'


const OurShopComponent = styled.div`
    position: relative;
    width: 90%;
    height: 450px;
    margin: 0 auto;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: space-around;
`


export default function OurShop(){

    return(
        <OurShopComponent>
            <Cards title='Nossa loja - Intrumentos Musicais' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'/>
        </OurShopComponent>
    )
}


