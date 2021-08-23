import React, { useState } from 'react'
import styled from 'styled-components'
import faqs from '../../assets/json/FAQs.json'
import longestHits from '../../assets/json/longest-hit.json'
import LongestHit from './LongestHit'
import FAQs from './FAQs'

export default function AboutUs() {
    const [qAndA, setQAndA] = useState(3);
    const [longHits, setLongHits] = useState(3);

    function seeMoreFaqsOnClick() {
        if (qAndA + 3 < faqs.length){
            setQAndA(qAndA + 3)
        } else {
            setQAndA(qAndA + (faqs.length - qAndA))
        }
    }
    function seeMoreLongHitsOnClick() {
        if (longHits + 3 < longestHits.length){
            setLongHits(longHits + 3)
        } else {
            setLongHits(longHits + (longestHits.length - longHits))
        }
    }

    return (
        <>
            <H1>Frequently Asked Questions</H1>
            <div>
                {[...Array(qAndA).keys()].map((index) => <FAQs data={faqs[index]} key={`faqs${index}`}/> )}
            </div>
            <SeeMoreFaqsBtn onClick={seeMoreFaqsOnClick}>See More Q&A</SeeMoreFaqsBtn>
                <H1>Longest Hits</H1>
            <Div1>
                <H2> First Longest Hit</H2>
                <P>Mickey's longest measured home run (measured when he hit it) was hit on April 17, 1953 at Griffith Stadium in Washington, DC. It is his best-known homer and the home run that coined the term "tape measure home run." The pitcher was Chuck Stobbs. It traveled 565 feet and was measured by Yankees' PR Director Red Patterson, who used a measuring tape to determine the exact distance. This 565-foot home run was the only ball ever hit that cleared the left-field bleachers at Griffith Stadium in a regular season game in its 32 year history. However, several other Mickey homers probably went farther. Here are some other notable Mickey Mantle home runs:</P>
            </Div1>
            <div>
                {[...Array(longHits).keys()].map((index) => <LongestHit data={longestHits[index]} key={`longHits${index}`}/> )}
            </div>
            <SeeMoreLongHitsBtn onClick={seeMoreLongHitsOnClick}>See More Hits</SeeMoreLongHitsBtn>

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
const H2 = styled.h2`
    color: orange;
    font-size: 3rem;
    -webkit-text-stroke: 1px white;
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
const SeeMoreLongHitsBtn = styled.button`
    font-size: 1.1rem;
    display: block;
    margin: 40px auto;
    height: 50px;
    width: 200px;
`
const Div1 = styled.div`
    border: 2px solid red;
    border-radius: 10px;
    margin: 10px;
`

const P = styled.p`
    font-size: 1.2rem;
    text-align: justify;
    color: white;
    margin: 2%;
    line-height: 1.6rem;
    padding: 0 20px;
`