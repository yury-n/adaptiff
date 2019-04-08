import React, { Component } from "react";
import classnames from "classnames";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import { Card } from "semantic-ui-react";
import MiniCard from "./MiniCard/MiniCard";

import "./global.overrides.css";
import s from "./App.module.css";

import linearGradient from "./_adaptationConfigs/linearGradient";
// import octagonalStar from "./_adaptationConfigs/octagonal_star";
// import reactKawaii from "./_adaptationConfigs/react_kawaii";
import trianglify from "./_adaptationConfigs/trianglify";
import particles from "./_adaptationConfigs/particles";
import bubbles from "./_adaptationConfigs/bubbles";
import perfectPurple from "./_adaptationConfigs/perfect_purple";
import wallPattern from "./_adaptationConfigs/wallPattern";
import strings25 from "./_adaptationConfigs/strings25";
import generateArt from "./_adaptationConfigs/generateArt";

// import tunnel from "./_adaptationConfigs/tunnel";
// import waves from "./_adaptationConfigs/waves";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div
          className={classnames(
            s["main-content-area"],
            "restricted-width-area"
          )}
        >
          <Hero />
          <Card.Group className="cards">
            <MiniCard {...linearGradient} />
            <MiniCard {...trianglify} />
            <MiniCard {...particles} />
            <MiniCard {...bubbles} />
            <MiniCard {...perfectPurple} />
            <MiniCard {...wallPattern} />
            <MiniCard {...strings25} />
            <MiniCard {...generateArt} />
          </Card.Group>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
