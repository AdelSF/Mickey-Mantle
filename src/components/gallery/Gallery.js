import React, { useState } from 'react'
import styled from 'styled-components'

export default function Gallery() {
    return (
        <Container>
            <TopImgMicky src="../src/assets/cards/1952.gif" alt="Micky Hits The Ball" />

            Gallery component
        </Container>
    )
}

const Container = styled.div`
    color: red;
`
const TopImgMicky = styled.img`
    width: 20%;
    margin: 0 50px;
    /* @media (max-width: 1200px) {
    } */
    `