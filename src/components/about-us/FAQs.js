import React, { useState } from 'react'
import styled from 'styled-components'

export default function FAQs({data: {question, answer, imgSrc}}) {

    return (
            <FreAskedQ>
                <Div>
                   <H2>{question}</H2>
                   <P>{answer}</P>
                   <Img src={imgSrc} />
                </Div>
            </FreAskedQ>
    )
}

const FreAskedQ = styled.div`
    display: flex;
    width: 100%;
    `
const Div = styled.div`
    border: 2px solid orange;
    border-radius: 10px;
    margin: 10px;
`
const H2 = styled.h2`
    color: white;
    text-shadow: 1px 1px red;
    padding: 10px 20px;
`
const P = styled.p`
    font-size: 1.1rem;
    text-align: justify;
    color: white;
    padding: 0 20px;
`
const Img = styled.img`
    padding: 5px;
`