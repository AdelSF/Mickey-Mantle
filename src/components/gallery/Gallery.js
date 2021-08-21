import React, { useState } from 'react'
import styled from 'styled-components'
import VideoJson from '../../assets/json/videos.json'
import Video from './Video'

export default function Gallery() {

    return (
        <container>
            <Cards>
            </Cards>
            <H1>Video Section</H1>
            <Videos>
                {VideoJson.map((data, i) => {
                    return(
                        <Video title={data.title} description={data.description} src={data.src} key={i}/>
                    )
                })}
            </Videos>
        </container>
    )
}


const Cards = styled.div`
    
    `
const H1 = styled.h1`
    color: orange;
    font-size: 3rem;
    -webkit-text-stroke: 1px white;
    margin: 10% 0 3% 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const Videos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    @media (max-width: 1300px) {
        grid-template-columns: 1fr 1fr;
        justify-items: center;
    }
    @media (max-width: 850px) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`