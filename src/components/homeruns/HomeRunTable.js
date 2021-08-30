import React, { useState } from 'react'
import styled from 'styled-components'
// import BaseballImg from '../../assets/design-photos/baseball-player.png'

export default function HomeRun({data: {homerunNum, date, place, opponent, pitcher, rightOrLeftHand, position, placeInBattingOrder, distance, inning, menOnBase, atBats, hits, walks, runs, rbi, stolenBases, finalScore, description, quotesAndComments}}) {
    return (
        <HomeR>
                <UpperTableSetion>
                    <P1>Home Run Number: <Span>{homerunNum}</Span></P1>
                    <P1>Date: <Span>{date}</Span></P1>
                    <P1>Place: <Span>{place}</Span></P1>
                    <P1>Opponent: <Span>{opponent}</Span></P1>
                    <P1>Pitcher: <Span>{pitcher}</Span></P1>
                    <P1>Hit R-handed or L-handed: <Span>{rightOrLeftHand}</Span></P1>
                    <P1>Place In Batting Order: <Span>{placeInBattingOrder}</Span></P1>
                    <P1>Position: <Span>{position}</Span></P1>
                    <P1>Distance: <Span>{distance}</Span></P1>
                    <P1>Inning: <Span>{inning}</Span></P1>
                    <P1>Men on Base: <Span>{menOnBase}</Span></P1>
                    <P1>At-Bats: <Span>{atBats}</Span></P1>
                    <P1>Hits: <Span>{hits}</Span></P1>
                    <P1>Walks: <Span>{walks}</Span></P1>
                    <P1>Runs: <Span>{runs}</Span></P1>
                    <P1>RBI: <Span>{rbi}</Span></P1>
                    <P1>Stolen Bases: <Span>{stolenBases}</Span></P1>
                    <P1>Final Score: <Span>{finalScore}</Span></P1>
                </UpperTableSetion>
                <div>
                    <Description><Span>Description: </Span>{description}</Description>
                    <Comments><Span>Qutes & Comments: <br></br></Span>{quotesAndComments}</Comments>
                </div>
        </HomeR>
    )
}


const HomeR = styled.div`
    background-image: url(${"../../../assets/design-photos/stadium-lowLight-min.jpg"});
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid white;
    margin: 3%;
    border-radius: 10px;
    color: white;
    padding: 30px;
    @media (max-width: 900px) {
        background-image: url(${"../../../assets/design-photos/lowLight-2-min.jpg"});
    }
`
const P1 = styled.p`
    display: inline-flex;
    font-size: 1.1rem;
    width: 350px;
    color: lightgray;
    border: 1px solid orange;
    padding: 20px;
    margin: 0;
`
const UpperTableSetion = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const Description = styled.p`
    display: block;
    padding: 10px 20px;
    font-size: 1.1rem;
    `
const Span = styled.span`
    font-weight: 800;
    font-style: italic;
    font-size: 1.2rem;
    padding-left: 10px;
    color: white;
    text-shadow: 0px 0px 15px black;
`
const Comments = styled.p`
    display: block;
    padding: 10px 20px;
    font-size: 1.2rem;
    border-top: 3px solid gray;
`