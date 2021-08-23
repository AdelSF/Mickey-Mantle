import React, { useState } from 'react'
import styled from 'styled-components'
import faqs from '../../assets/json/FAQs.json'
import FAQs from './FAQs'

export default function AboutUs() {
    const [qAndA, setQAndA] = useState(3);

    function seeMoreFaqsOnClick() {
        if (qAndA + 6 < faqs.length){
            setQAndA(qAndA + 6)
        } else {
            setQAndA(qAndA + (faqs.length - qAndA))
        }
    }

    return (
        <>
            <H1>Baseball Cards</H1>
            <QandA>
                {[...Array(qAndA).keys()].map((index) => <FAQs data={faqs[index]} key={`faqs${index}`}/> )}
            </QandA>
            <SeeMoreFaqsBtn onClick={seeMoreFaqsOnClick}>See More Q&A</SeeMoreFaqsBtn>

        </>
    )
}

const H1 = styled.h1`

`

const QandA = styled.div`
    color: red;
`
const SeeMoreFaqsBtn = styled.div`
    font-size: 1.1rem;
    display: block;
    margin: 40px auto;
    height: 50px;
    width: 200px;
    background-color: orange;
    color: white;
`