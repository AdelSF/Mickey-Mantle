import React, { useState } from 'react'
import styled from 'styled-components'

export default function LongestHit({data: {dateAndLocation, description, imgSrc}}) {

    return (
            <Hits>
                <Div>
                    <H2>{dateAndLocation}</H2>
                    <Div1>
                        <P>{description}</P>
                        <Img src={require(`../../assets/about-us-photos/${imgSrc}`)} /> 
                    </Div1>
                </Div>
            </Hits>
    )
}

const Hits = styled.div`
    display: flex;
    width: 100%;
`
const Div = styled.div`
    border: 2px solid orange;
    border-radius: 10px;
    margin: 10px;
    width: 100%;
`
const Div1 = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        margin: 5%;
    }
`
const H2 = styled.h2`
    display: flex;
    align-items: center;
    margin: 10px auto;
    justify-content: center;
    color: white;
    text-shadow: 1px 1px red;
    padding: 10px;
`
const P = styled.p`
    font-size: 1.1rem;
    text-align: justify;
    color: white;
    margin: 2% 0;
    line-height: 1.6rem;
    padding: 0 20px;
`
const Img = styled.img`
    margin: 2%;
    width: 300px;
`