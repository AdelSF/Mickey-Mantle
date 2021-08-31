import React, { useState } from 'react'
import styled from 'styled-components'
const url = 'assets/cards/'

export default function Card({card: {description, yearAndNumber, title, src}}) {
    return (
        <Cards>
            <Div>
                <H1>{yearAndNumber}</H1>
                <H3>{title}</H3>
                <P>{description}</P>
                <Img src={url+src} />
            </Div>
        </Cards>
    )
}

const Cards = styled.div`
    display: flex;
    justify-content: center;
    width: 430px;
    height: 610px;
    @media (max-width: 500px) {
        width: 100%;
        height: 100%;
    }
`
const Div = styled.div`
    border: 2px solid orange;
    border-radius: 10px;
    margin: 10px;
    width: 100%;
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
const Img = styled.img`
    display: flex;
    align-items: center;
    margin: 8px auto;
    padding: 5px;
`