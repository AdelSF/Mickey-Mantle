import React, { useState } from 'react'
import styled from 'styled-components'

export default function Home() {
    return (
        <Container>
            <Section1>
                <TopImgMicky src="../src/assets/other/Micky-3.png" alt="Micky Hits The Ball" />
                <div>
                    <H2>Mickey</H2>
                    <H1>Mantle</H1>
                    <TopImgBall src="../src/assets/other/smoking-ball.jpg" alt="The ball on top" />
                </div>
            </Section1> 
            <Section2>
                <MickyOnLeftImg src="../src/assets/other/Micky-1.jpg" alt="Micky Smiling" />
                <div>
                    <TheAmericanDreamImg src="../src/assets/other/header.jpeg" alt="The American Dream comes to life" /> 
                    <Article>
                        Welcome to our Official Mickey Mantle: The American Dream Comes To Life® Store. Operating since 1988, our first product was the award-winning "videography™" program, Mickey Mantle: The American Dream Comes To Life®. It's the first truly autobiographical documentary ever made. Mickey tells his own stories - from both on and off the field - in his own words, capturing his warmth, charm, humor and charisma. It became a BILLBOARD Magazine National Bestseller for two consecutive years and was broadcast nationwide on Public Television. USA Today, The New York Daily News and The Washington Post/Los Angeles Times Syndicate all called it, "The best baseball program ever made!" (In the photo Mickey and producer/director Lew Rothgeb are at Mickey Mantle's Restaurant in New York announcing the program's release on video.) Mickey said it was, "The best project I ever did!"
                    </Article>
                </div>
            </Section2>
            <BottomSectionText>THE AMERICAN DREAM COMES TO LIFE</BottomSectionText>
        </Container>
    )
}

const Container = styled.div`
    /* height: 300px; */
    /* width: 100%; */
`
const Section1 = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const TopImgMicky = styled.img`
    width: 100%;
    margin: 0 50px;
    @media (max-width: 600px) {
        display: none;
    }
    `
const TopImgBall = styled.img`
    display: inline;
    height: 200px;
    @media (max-width: 600px) {
        display: none;
    }
    `
const H1 = styled.h1`
    display: inline;
    font-size: 10rem;
    -webkit-text-stroke: 2px orange;
    margin: 0px 30px;
    `
const H2 = styled.h1`
    display: block;
    font-size: 7rem;
    color: white;
    margin: 80px 50px 0 0;
    `
const Section2 = styled.section`
    display: grid;
    grid-template-columns: 1fr 3fr;
    border: 2px solid orange;
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        justify-items: center;
        margin: 20px;
    }
`
const MickyOnLeftImg = styled.img`
    margin: 50px;
    display: inline;
    border: 2px solid orange;
    @media (max-width: 600px) {
        
    }
`
const TheAmericanDreamImg = styled.img`
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        margin: 0 auto;
        width: 400px;
        justify-items: center;
    }
`
const Article = styled.article`
    color: white;
    margin: 2%;
    font-size: 20px;
    @media (max-width: 600px) {
        margin: 4%;
        text-align: justify;
    }
`
const BottomSectionText = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    letter-spacing: 15px;
    color: orange;
    @media (max-width: 600px) {
        letter-spacing: 5px;
        margin: 4% 2%;
        font-size: .8rem;
        /* justify-content: center; */
    }
`