import React, { useState } from 'react'
import styled from 'styled-components'
import HomeRunTable from './HomeRunTable'
import homeRunJson from '../../assets/json/homeRuns.json'

export default function HomeRuns() {

    const [searchInput, setSearchInput] = useState([]);

    function handleSearch(e) {
        let keyword = e.target.value
        setSearchInput(keyword);
        console.log(e.target.value)
    }

    const items = homeRunJson.filter((data)=> {
        if (searchInput.length === 0){
            return data
    } else if (data.homerunNum.toLowerCase().includes(searchInput.toLowerCase()) || data.place.toLowerCase().includes(searchInput.toLowerCase()) || data.date.toLowerCase().includes(searchInput.toLowerCase()) ){
        return data
    }
    }).map((data, i) => { 
        return (
                <HomeRunTable data={data} key={`data${i}`}/>
        ) 
    })
    return (
        <>
            <H1>Home Runs</H1>
            <Div>
                <H3>Search based on number of home run, date or place:</H3>
                <Input type="text" placeholder="Search Here" onChange={(e) => handleSearch(e)} /> 
            </Div>
            <div>
                {items}
            </div>
        </>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid orange;
    margin: 2%;
    border-radius: 10px;
    @media (max-width: 800px) {
        display: block;
    }
`
const H1 = styled.h1`
    color: orange;
    font-size: 3rem;
    -webkit-text-stroke: 1px white;
    margin: 10% 0 3% 0;
    display: flex;
    justify-content: center;
`
const H3 = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    color: white;
    margin: 30px;
`
const Input = styled.input`
    font-size: 1.1rem;
    width: 200px;
    height: 35px;
    border-radius: 5px;
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        margin: 20px auto;
    }
`
