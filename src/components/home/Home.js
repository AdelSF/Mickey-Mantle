import React, { useState } from 'react'
import styled from 'styled-components'

export default function Home() {
    return (
        <Container>
            <Section1>
                <TopImgMicky src="../src/assets/mickey-photos/2.png" alt="Micky Hits The Ball" />
                <InnerSection>
                    <H2>Mickey</H2>
                    <H1>Mantle</H1>
                    <TopImgBall src="../src/assets/mickey-photos/smoking-ball.jpg" alt="The ball on top" />
                    <TheAmericanDreamImg1 src="../src/assets/mickey-photos/header.jpeg" alt="The American Dream comes to life" /> 
                </InnerSection>
            </Section1> 
            <Section2>
                <MickyOnLeftImg src="../src/assets/mickey-photos/Micky-1.jpg" alt="Micky Smiling" />
                <div>
                    <TheAmericanDreamImg2 src="../src/assets/mickey-photos/header.jpeg" alt="The American Dream comes to life" /> 
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
    
`
const Section1 = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1200px) {
        display: flex;
    }
`
const InnerSection = styled.div`
    width: 100%;
`
const TopImgMicky = styled.img`
    width: 100%;
    margin: 0 50px;
    @media (max-width: 1200px) {
        display: none;
    }
    `
const TopImgBall = styled.img`
    display: flex;
    height: 180px;
    @media (max-width: 1200px) {
        height: 120px;
        margin: 0 auto;
    }
    `
const H1 = styled.h1`
    font-size: 10rem;
    -webkit-text-stroke: 2px orange;
    margin: 0px 40px;
    @media (max-width: 1200px) {
        font-size: 6.5rem;
        display: flex;
        justify-content: center;
    }
    `
const H2 = styled.h1`
    font-size: 7rem;
    color: white;
    margin: 80px 50px 0 0;
    @media (max-width: 1200px) {
        font-size: 4rem;
        margin: 0;
        display: flex;
        justify-content: center;
    }
    `
const Section2 = styled.section`
    display: grid;
    grid-template-columns: 1fr 3fr;
    border: 2px solid orange;
    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
    }
`
const TheAmericanDreamImg1 = styled.img`
    display: none;
    @media (max-width: 1200px) {
        margin: 10px auto;
        display: flex;
        width: 90%;
        border: 2px solid orange;
    }

`
const TheAmericanDreamImg2 = styled.img`
    margin: 30px auto;
    display: flex;
    @media (max-width: 1200px) {
        display: none;
    }
    `
const MickyOnLeftImg = styled.img`
    margin: 50px;
    display: inline;
    border: 2px solid orange;
    @media (max-width: 1200px) {
        align-self: center;
        width: 40%;
    }
`
const Article = styled.article`
    color: white;
    margin: 5%;
    font-size: 1.4rem;
    text-align: justify;
`
const BottomSectionText = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    letter-spacing: 15px;
    color: orange;
    @media (max-width: 1200px) {
        letter-spacing: 10px;
        margin: 4% 2%;
        font-size: 1.2rem;
    }
    @media (max-width: 800px) {
        letter-spacing: 5px;
        margin: 4% 2%;
        font-size: .8rem;
    }
`