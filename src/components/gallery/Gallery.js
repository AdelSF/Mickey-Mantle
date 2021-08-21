import React, { useState } from 'react'
import styled from 'styled-components'
import VideoJson from '../../assets/json/videos.json'
import CardsJson from '../../assets/json/cards.json'
import Video from './Video'
import Card from './Card'

export default function Gallery() {

    return (
        <>
            <H1>Baseball Cards</H1>
            <Cards>
                {CardsJson.map((card, i) => {
                    return(
                        <Card yearAndNumber={card.yearAndNumber} title={card.title} description={card.description} src={card.src} key={i}/>
                    )
                })}
            </Cards>
            <H1>Video Section</H1>
            <Videos>
                {VideoJson.map((video, i) => {
                    return(
                        <Video title={video.title} description={video.description} src={video.src} key={i}/>
                    )
                })}
            </Videos>
        </>
    )
}


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
const Cards = styled.div`
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