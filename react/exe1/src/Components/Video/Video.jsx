import styled from "styled-components";


const VideoContainer = styled.div`
    width: 90%;
    height: 500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #ccc;
`
 const VideoElement = styled.div`
    width: 40%;
    height: 350px;
    display: flex;
    /* background-color: blue; */


    & iframe{
      border:none;
      border-radius: 10px;
    }
 `

export default function Video(){
    return(
        <VideoContainer>
            <VideoElement>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rpG6Iz0w4Z0?list=RDLKJmFYSTHOQ" title="i was only temporary (Super Slowed)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </VideoElement>
            <VideoElement>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/d1fkfEMoEq4" title="A Horse With No Name - GTA San Andreas (𝙇𝙚𝙜𝙚𝙣𝙙𝙖𝙙𝙤)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </VideoElement>
        </VideoContainer>
    )
}