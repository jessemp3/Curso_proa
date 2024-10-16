/* eslint-disable react/prop-types */
import styled from "styled-components";


const InstrumentosComponent = styled.div`
    background: none;
    width: 150px;
    height: 260px;
    background-image: url(${props => props.img});
    background-size: cover;

`

 const Description = styled.div`
     font-size: 1rem;
     width: 100%;
     height: 300px;
     color: red;
     display: flex;
     align-items: end;
     justify-content: center;
` 


export default function Instrumentos(props){
    return(
        <>
        <InstrumentosComponent img={props.img} >
            <Description>{props.name}<br/>{props.text}</Description>
        </InstrumentosComponent>
        </>
        
    )
}

