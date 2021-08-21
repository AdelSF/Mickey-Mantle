import React, { useState } from 'react'
import styled from 'styled-components'

export default function Video(props) {

    return (
        <container>
            <Videos>
                <Div>
                   <H2>{props.title}</H2>
                   <P>{props.description}</P>
                   <Iframe src={props.src} frameBorder="0" width="425" height="350" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
                </Div>
            </Videos>
        </container>
    )
}

const Videos = styled.div`
    display: flex;
    width: 450px;
    height: 610px;
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
const Iframe = styled.iframe`
    padding: 5px;
`