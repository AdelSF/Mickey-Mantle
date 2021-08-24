import React, { useState } from 'react'
import styled from 'styled-components'

export default function HomeRun({data: {homerunNum, date, place, opponent, pitcher, rightOrLeftHand, position, distance, inning, menOnBase, atBats, hits, walks, runs, rbi, stolenBases, finalScore, description, Comments}}) {
    return (
        <HomeR>
            <Div>
                <H1>{homerunNum}</H1>
                <H3>{date}</H3>
                <P>{place}</P>
            </Div>
        </HomeR>
    )
}


const HomeR = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    width: 450px;
    height: 610px;
`
const Div = styled.div`
    border: 2px solid orange;
    border-radius: 10px;
    margin: 10px;
`
const H1 = styled.h1`
    display: flex;
    justify-content: center;
    color: white;
    text-shadow: 1px 1px red;
    padding: 10px 20px;
`
const H3 = styled.h3`
    color: white;
    text-shadow: 1px 1px red;
    padding: 10px 20px;
`
const P = styled.p`
    font-size: 1.1rem;
    text-align: justify;
    color: white;
    margin: 5px 15px;
    height: 100px;
    overflow: auto;
`