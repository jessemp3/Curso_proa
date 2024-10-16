/* eslint-disable react/prop-types */
import styled from "styled-components";

const CardsComponents = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    margin: 20px;
    background-color: #ffffff9e;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    padding: 10px; 
`


export default function Cards(props){

    const style = {
        background: 'url("https://images.pexels.com/photos/12832427/pexels-photo-12832427.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }


    return(
        <>
        <CardsComponents>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
         </CardsComponents>  

        <CardsComponents style={style}/>
        </>

    )
}