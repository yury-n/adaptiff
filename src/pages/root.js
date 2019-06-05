import React from "react";
import classnames from "classnames";
import Hero from "../Hero/Hero";
import { Card } from "semantic-ui-react";
import MiniCard from "../MiniCard/MiniCard";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SubscribeBlock from "../SubscribeBlock/SubscribeBlock";

import s from "../App.module.css";

import linearGradient from "../_adaptationConfigs/linearGradient";
// import octagonalStar from "./_adaptationConfigs/octagonal_star";
// reactKawaii from "./_adaptationConfigs/react_kawaii";
import trianglify from "../_adaptationConfigs/trianglify";
import particles from "../_adaptationConfigs/particles";
import bubbles from "../_adaptationConfigs/bubbles";
import perfectPurple from "../_adaptationConfigs/perfect_purple";
import wallPattern from "../_adaptationConfigs/wallPattern";
import strings25 from "../_adaptationConfigs/strings25";
import generateArt from "../_adaptationConfigs/generateArt";
import gradientWaves from "../_adaptationConfigs/gradientWaves";
// import pulse from "../_adaptationConfigs/pulse";
// import abstractParticles from "../_adaptationConfigs/abstractParticles";
import postmodern from "../_adaptationConfigs/postmodern";
import mesh from "../_adaptationConfigs/mesh";
import steppedGradient from "../_adaptationConfigs/steppedGradient";
import ribbons from "../_adaptationConfigs/ribbons";
import fiber_rectangles from "../_adaptationConfigs/fiber_rectangles";

// import tunnel from "./_adaptationConfigs/tunnel";
// import waves from "./_adaptationConfigs/waves";
// import tunnel from "./_adaptationConfigs/tunnel";
// import waves from "./_adaptationConfigs/waves";

export default () => (
  <>
    <Header />
    <div
      className={classnames(s["main-content-area"], "restricted-width-area")}
    >
      <Hero />
      <Card.Group className="cards">
        <MiniCard {...linearGradient} />
        <MiniCard {...trianglify} />
        <MiniCard {...particles} />
        <MiniCard {...gradientWaves} />
        <MiniCard {...wallPattern} />
        <MiniCard {...strings25} />
        <MiniCard {...mesh} />
        <MiniCard {...ribbons} />
        <MiniCard {...bubbles} />
        <MiniCard
          initState={{ config: {}, size: { width: 600, height: 600 } }}
          {...steppedGradient}
        />
        <MiniCard {...perfectPurple} />
        <MiniCard
          initState={{ config: {}, size: { width: 500, height: 500 } }}
          {...fiber_rectangles}
        />
        <MiniCard
          initState={{ config: {}, size: { width: 500, height: 500 } }}
          {...generateArt}
        />
        <MiniCard {...postmodern} />
      </Card.Group>
      <SubscribeBlock />
    </div>
    <Footer />
  </>
);
