import React, { useState } from 'react'
import styled from 'styled-components'

export default function Video({video: {title, description, src}}) {

    return (
            <Videos>
                <Div>
                   <H2>{title}</H2>
                   <P>{description}</P>
                   <Iframe src={src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
                </Div>
            </Videos>
    )
}

const Videos = styled.div`
    display: flex;
    justify-content: center;
    width: 430px;
    height: 430px;
    @media (max-width: 500px) {
        width: 100%;
        height: 100%;
    }
`
const Div = styled.div`
    border: 2px solid orange;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
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
const Iframe = styled.iframe`
    display: flex;
    align-items: center;
    margin: 8% auto;
`