import React, { useState } from 'react'
import styled from 'styled-components'

export default function Video(props) {

    return (
        <Container>
            <Videos>
                <Div>
                   <h2>{props.title}</h2>
                   <p>{props.description}</p>
                </Div>
                   <iframe src={props.src} frameBorder="0" width="425" height="350" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Videos>
        </Container>
    )
}

const Container = styled.div`
    color: red;
`

const Videos = styled.div`
    display: flex;
    border: 2px solid white;
`
const Div = styled.div`
    display: block;
    width: 50%;
`