import React, { useState } from 'react'
import styled from 'styled-components'
import videos from '../../assets/json/videos.json'
import cards from '../../assets/json/cards.json'
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
  
                {/* {VideoJson.map((video, i) => {
                    return(
                        <Video title={video.title} description={video.description} src={video.src} key={i}/>

                    )
                })} */}
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