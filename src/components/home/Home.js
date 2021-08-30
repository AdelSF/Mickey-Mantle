import React, { useState } from 'react'
import styled from 'styled-components'

export default function Home() {
    return (
        <Container>
            <Section1>
                <TopImgMicky src="assets/mickey-photos/2.png" alt="Micky Hits The Ball" />
                <InnerSection>
                    <H2>Mickey</H2>
                    <H1>Mantle</H1>
                    <TopImgBall src="assets/mickey-photos/smoking-ball.jpg" alt="The ball on top" />
                    <TheAmericanDreamImg1 src="assets/mickey-photos/header.jpeg" alt="The American Dream comes to life" /> 
                </InnerSection>
            </Section1> 
            <Section2>
                <MickyOnLeftImg src="assets/mickey-photos/Micky-1.jpg" alt="Micky Smiling" />
                <div>
                    <TheAmericanDreamImg2 src="assets/mickey-photos/header.jpeg" alt="The American Dream comes to life" /> 
                    <Article>
                        Welcome to our Official Mickey Mantle: The American Dream Comes To Life® Store. Operating since 1988, our first product was the award-winning "videography™" program, Mickey Mantle: The American Dream Comes To Life®. It's the first truly autobiographical documentary ever made. Mickey tells his own stories - from both on and off the field - in his own words, capturing his warmth, charm, humor and charisma. It became a BILLBOARD Magazine National Bestseller for two consecutive years and was broadcast nationwide on Public Television. USA Today, The New York Daily News and The Washington Post/Los Angeles Times Syndicate all called it, "The best baseball program ever made!" (In the photo Mickey and producer/director Lew Rothgeb are at Mickey Mantle's Restaurant in New York announcing the program's release on video.) Mickey said it was, "The best project I ever did!"
                    </Article>
                </div>
            </Section2>
            <BottomSectionText>THE AMERICAN DREAM COMES TO LIFE</BottomSectionText>
            <Section3>
                <div>
                    <H4>Short Biography</H4>
                    <MickeyFamilyImg src="assets/mickey-photos/mm-family.jpeg" alt="Mickey Mantle image with family" /> 
                    
                    <H3>Named after a Hall of Fame Catcher</H3> 
                        <Article2>
                            Mickey Charles Mantle was born on October 20, 1931 in Spavinaw, Oklahoma. Just a few short years later his family moved to Commerce, OK. Mickey was the oldest son of Elvin "Mutt" Mantle and Lovell Mantle. Mutt, a lead miner, was a big baseball fan and played semi-pro baseball himself. He named Mickey after his favorite player - Hall of Fame catcher Mickey Cochrane. (Mickey often joked that he was glad his father didn't know Cochrane's given name was Gordon.) Mickey had three brothers: twins Ray & Roy and Butch, and a sister, Barbara.  (In the photo on the right clockwise from upper left: Mick's twin brothers Ray & Roy, his sister Barbara, Mickey, his brother Butch, his mother Lovell, and Mickey's father Elvin "Mutt" Mantle.)
                        </Article2>
                    
                    <H3>Mickey's Father Teaches Him to Be a Great Hitter</H3> 
                        <Article2>
                            Mutt passed his love of the game on to Mickey from almost the moment he was born. As soon as Mickey was old enough to swing a bat and throw a ball, Mickey's father Mutt and grandfather Charlie pitched to him everyday after school in front of a leaning tin barn by their house at 319 S. Quincy in Commerce, OK. (This is where Mickey lived until he was 14. The home and barn are going through a complete restoration to honor Mickey and the Mantle family.) Mutt, a righty, and Charlie, a lefty, taught Mickey to switch-hit at a very early age. They alternated pitching to him so that Mickey could learn to hit from both sides of the plate. The tin barn acted as a backstop. Mickey also developed tremendous strength working at the lead mines during the summers. One job in particular, that of "screen ape," was responsible for Mickey's incredibly strong wrists, shoulders, arms and forearms. A screen ape smashed large rocks into small stones with a sledgehammer. There were two screen apes, one of whom smashed rocks until he couldn't hold the hammer any longer, and then rested while the other took his turn. The strength Mickey developed from this work and other farm chores gave him the strength to hit some of the longest home runs in the history of the game.
                        </Article2>
                    
                    <H3>Mickey's Bout with Osteomyelitis</H3> 
                        <Article2>
                            By the time he reached high school Mickey's ability was well beyond that of his contemporaries. He was a gifted athlete, playing not only baseball but also football and basketball. It was during practice for a high school football game that tragedy befell Mickey. He was accidentally kicked on the left shin, and the wound developed into the bone disease osteomyelitis. It became so serious doctors wanted to amputate Mickey's leg. Mickey's mother wouldn't hear of it, and Mutt drove Mickey 175 miles to the Crippled Children's Hospital in Oklahoma City. There Mickey was treated with a new wonder drug, receiving doses every three hours around the clock. Miraculously he responded, and Mickey's leg was saved. The drug: penicillin. Unfortunately, the injury was just the first among many that were to hinder Mickey for the rest of his life. However, this bout with osteomyelitis rendered Mickey unfit for military service for life, another issue that arose later in life.
                        </Article2>
                    
                    <H3>The Baxter Springs Whiz Kids</H3> 
                        <Article2>
                            Once he'd recovered from his injury he quickly advanced past other players his age, and at sixteen played with a local semi-pro team, the Baxter Springs Whiz Kids. Although players usually were considered for the Whiz Kids only after turning age 18, Mickey easily fit in with the older players, becoming one of the best players in the area. Word of Mickey's ability, however, hadn't spread beyond northeastern Oklahoma. That was about to change... 
                        </Article2>
                </div>
            </Section3>
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
    @media (max-width: 600px) {
        font-size: 5rem;
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
    @media (max-width: 600px) {
        font-size: 3rem;
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
    line-height: 1.4rem;
    text-align: justify;
    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
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
    @media (max-width: 600px) {
        font-size: 0.6rem;
    }
`
const Section3 = styled.section`
    color: white;
    margin: 5%;
    font-size: 1.4rem;
    text-align: justify;
    border: 2px solid white;
    padding: 10px;
    background-color: #8E8E8E;
`
const H3 = styled.h3`
    color: white;
    margin: 6% 5% 0 5%;
    text-shadow: 3px 3px 10px black;
    @media (max-width: 600px) {
        font-size: 1.2rem;
        margin: 6% 5% 2% 5%;
    }
    `
const H4 = styled.h1`
    display: flex;
    justify-content: center;
    color: orange;
    text-shadow: 3px 3px black;
    font-size: 2.5rem;
`
const MickeyFamilyImg = styled.img`
    display: block;
    margin: 0 auto;
`
const Article2 = styled.article`
    color: black;
    margin: 1% 5%;
    font-size: 1.4rem;
    text-align: justify;
    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`