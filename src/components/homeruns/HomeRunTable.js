import React, { useState } from 'react'
import styled from 'styled-components'

export default function HomeRun({data: {homerunNum, date, place, opponent, pitcher, rightOrLeftHand, position, placeInBattingOrder, distance, inning, menOnBase, atBats, hits, walks, runs, rbi, stolenBases, finalScore, description, Comments}}) {
    return (
        <HomeR>
            <Table>
                <tr>
                    <Th>Home Run Number:</Th>
                    <Th>Date:</Th>
                    <Th>Place:</Th>
                    <Th>Opponent:</Th>
                    <Th>Pitcher:</Th>
                    <Th>Hit R-handed or L-handed:</Th>
                    <Th>Place In Batting Order:</Th>
                    <Th>Position:</Th>
                    <Th>Distance:</Th>
                </tr>
                <tr>
                    <Td>{homerunNum}</Td>
                    <Td>{date}</Td>
                    <Td>{place}</Td>
                    <Td>{opponent}</Td>
                    <Td>{pitcher}</Td>
                    <Td>{rightOrLeftHand}</Td>
                    <Td>{placeInBattingOrder}</Td>
                    <Td>{position}</Td>
                    <Td>{distance}</Td>
                </tr>
                <tr>
                    <Th>Inning:</Th>
                    <Th>Men on Base:</Th>
                    <Th>At-Bats:</Th>
                    <Th>Hits:</Th>
                    <Th>Walks:</Th>
                    <Th>Runs:</Th>
                    <Th>RBI:</Th>
                    <Th>Stolen Bases:</Th>
                    <Th>Final Score:</Th>
                </tr>
                <tr>
                    <Td>{inning}</Td>
                    <Td>{menOnBase}</Td>
                    <Td>{atBats}</Td>
                    <Td>{hits}</Td>
                    <Td>{walks}</Td>
                    <Td>{runs}</Td>
                    <Td>{rbi}</Td>
                    <Td>{stolenBases}</Td>
                    <Td>{finalScore}</Td>
                </tr>
                </Table>
        </HomeR>
    )
}


const HomeR = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    padding: 30px;
`
const Table = styled.table`
    display: block;
    border: 1px solid white;
    margin: 0 auto;
    border-radius: 10px;
`
const Th = styled.th`
    border: 3px solid white;
    text-align: center;
    margin: 10px;
    padding: 10px 20px;
    `
const Td = styled.td`
    padding: 50px;
    text-align: center;
    border: 1px solid orange;
`