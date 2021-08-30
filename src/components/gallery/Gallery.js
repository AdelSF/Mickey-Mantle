import React, { useState } from 'react'
import styled from 'styled-components'
import videos from '../../../assets/json/videos.json'
import cards from '../../../assets/json/cards.json'
import Video from './Video'
import Card from './Card'


export default function Gallery() {
    const [cardQty, setCardQty] = useState(6)
    const [videoQty, setVideoQty] = useState(6)

    function seeMoreCardsOnClick() {
        if (cardQty + 6 < cards.length){
            setCardQty(cardQty + 6)
        } else {
            setCardQty(cardQty + (cards.length - cardQty))
        }
    }
    function seeMoreVideosOnClick() {
        if (videoQty + 6 < videos.length){
            setVideoQty(videoQty + 6)
        } else {
            setVideoQty(videoQty + (videos.length - videoQty))
        }
    }

    return (
        <>
            <H1>Baseball Cards</H1>
            <Cards>
                {[...Array(cardQty).keys()].map((index) => <Card card={cards[index]} key={`card${index}`}/> )}
            </Cards>
            <SeeMoreCardsBtn onClick={seeMoreCardsOnClick}>See More Cards</SeeMoreCardsBtn>

            <H1>Video Section</H1>
            <Videos>
                {[...Array(videoQty).keys()].map((index) => <Video video={videos[index]} key={`video${index}`}/> )}
            </Videos>
            <SeeMoreVideosBtn onClick={seeMoreVideosOnClick}>See More Videos</SeeMoreVideosBtn>
        </>
    )
}


const H1 = styled.h1`
    color: orange;
    font-size: 3rem;
    -webkit-text-stroke: 1px white;
    margin: 10% 0 3% 0;
    display: flex;
    justify-content: center;
    @media (max-width: 500px) {
        font-size: 2rem;
    }
`
const Videos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    @media (max-width: 500px) {
        justify-content: center;
    }
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 500px) {
        width: 100%;
        justify-content: center;
    }
`

const SeeMoreCardsBtn = styled.button`
    font-size: 1.1rem;
    display: block;
    margin: 40px auto;
    height: 50px;
    width: 200px;
`
const SeeMoreVideosBtn = styled.button`
    font-size: 1.1rem;
    display: block;
    margin: 40px auto;
    height: 50px;
    width: 200px;
`