import React, { useState } from 'react'
import styled from 'styled-components'
import faqs from '../../assets/json/FAQs.json'
import FAQs from './FAQs'

export default function AboutUs() {
    const [qAndA, setQAndA] = useState(3);

    function seeMoreFaqsOnClick() {
        if (qAndA + 3 < faqs.length){
            setQAndA(qAndA + 3)
        } else {
            setQAndA(qAndA + (faqs.length - qAndA))
        }
    }

    return (
        <>
            <H1>Frequently Asked Questions</H1>
            <div>
                {[...Array(qAndA).keys()].map((index) => <FAQs data={faqs[index]} key={`faqs${index}`}/> )}
            </div>
            <SeeMoreFaqsBtn onClick={seeMoreFaqsOnClick}>See More Q&A</SeeMoreFaqsBtn>

        </>
    )
}

const H1 = styled.h1`
    color: orange;
    font-size: 3rem;
    -webkit-text-stroke: 1px white;
    margin: 10% 0 3% 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const SeeMoreFaqsBtn = styled.button`
    font-size: 1.1rem;
    display: block;
    margin: 40px auto;
    height: 50px;
    width: 200px;
`