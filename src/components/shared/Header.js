import React, {useState} from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useLocation } from "react-router-dom";
import logo from '../../../assets/mickey-photos/logo.jpeg'

var menuColor;
export default function Header() {
    let location = useLocation();
    const [hamContent, setHamContent] = useState('☰')

    function hamOnClick() {
        if (hamContent === '☰') {
            setHamContent('╳')
        } else {
            setHamContent('☰')
        }
    }

    menuColor = path => location.pathname === path ? 'white' : 'gray'

    return (
        <Menu>
            <Logo src={logo} alt="logo" />
            <Items displayStatus={hamContent} >
                <Item to='/' >HOME</Item>
                <Item to='/homeruns' >HOME RUNS</Item>
                <Item to='/shop' >SHOP</Item>
                <Item to='/gallery' >GALLERY</Item>
                <Item to='/aboutus' >ABOUT US</Item>
            </Items>
            <Ham onClick={hamOnClick}>{hamContent}</Ham>
        </Menu>
    )
}

const Menu = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
`

const Logo = styled.img`
    height: 55px;
    margin-right: 1rem;
    border: 1px solid orange;
    border-radius: 10px;
`

const Items = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    @media (max-width: 600px) {
        display: ${({displayStatus}) => displayStatus === '╳' ? 'flex' : 'none' };
        flex-direction: column;
        height: 40vh;
        margin-top: 10vh;
        width: unset;
    }
`

const Item = styled(Link)`
    text-decoration: none;
    color: ${({to}) => menuColor(to)};
    font-size: 1.1rem;
    font-weight: 800;
    &:hover {
        color: white;
        transition: .7s;
    }
`

const Ham = styled.span`
    color: white;
    font-size: 2rem;
    @media (min-width: 600px) {
        display: none;
    }
`