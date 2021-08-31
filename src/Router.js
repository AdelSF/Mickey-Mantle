import React, {useState } from "react";
import Home from "./components/home/Home"
import HomeRuns from "./components/homeruns/HomeRuns";
import Shop from "./components/shop/Shop";
import Gallery from "./components/gallery/Gallery";
import AboutUs from "./components/about-us/About-us";
import Header from "./components/shared/Header";
import { createGlobalStyle } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: black;
    font-family: 'Karla', sans-serif;
  }
`


export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/homeruns"><HomeRuns /></Route>
          <Route path="/shop"><Shop /></Route>
          <Route path="/gallery"><Gallery /></Route>
          <Route path="/aboutus"><AboutUs /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </>
  );
}