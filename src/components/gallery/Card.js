import React, { useState } from 'react'
import styled from 'styled-components'

export default function Card({card: {description, yearAndNumber, title, src}}) {
    return (
        <Cards>
            <Div>
                <H1>{yearAndNumber}</H1>
                <H3>{title}</H3>
                <P>{description}</P>
                <Img src={src} />
            </Div>
        </Cards>
    )
}

const Cards = styled.div`
    display: flex;
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
const Img = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    padding: 5px;
`