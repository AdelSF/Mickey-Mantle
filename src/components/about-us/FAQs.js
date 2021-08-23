import React, { useState } from 'react'
import styled from 'styled-components'

export default function FAQs({data: {question, answer, imgSrc}}) {

    return (
            <FreAskedQ>
                <Div>
                    <Div1>
                        <H2>{question}</H2>
                        <Img src={imgSrc} />
                    </Div1>
                   <P>{answer}</P>
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
    width: 100%;
`
const Div1 = styled.div`
    display: flex;
    justify-content: space-between;
`
const H2 = styled.h2`
    display: flex;
    align-items: center;
    color: white;
    text-shadow: 1px 1px red;
    padding: 10px;
`
const P = styled.p`
    font-size: 1.1rem;
    text-align: justify;
    color: white;
    padding: 0 20px;
`
const Img = styled.img`
    margin: 2%;
`