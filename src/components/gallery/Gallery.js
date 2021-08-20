import React, { useState } from 'react'
import styled from 'styled-components'
import VideoJson from '../../assets/json/videos.json'
import Video from './Video'

export default function Gallery() {

    return (
        <Container>
            <Cards>
                {/* <TopImgMicky src="../src/assets/cards/1952.gif" alt="Micky Hits The Ball" /> */}
            </Cards>
            <Videos>
                {VideoJson.map((data, i) => {
                    return(
                        <Video title={data.title} description={data.description} src={data.src} key={i}/>
                    )
                })}
            </Videos>
           

        </Container>
    )
}

const Container = styled.div`
    color: red;
`
const Cards = styled.div`
    color: red;
`
const Videos = styled.div`
    color: red;
`
const Div1 = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    border: 1px solid white;
`
const VideoTitle = styled.h2`
    color: red;
    width: 200px;
    /* display: block; */
`
const VideoDescription = styled.h2`
    color: red;
    width: 400px;
    /* display: inline; */
`
const TopImgMicky = styled.img`
    width: 20%;
    margin: 0 50px;
    /* @media (max-width: 1200px) {
    } */
    `