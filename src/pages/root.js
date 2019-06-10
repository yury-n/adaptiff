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
import fiberRibbons from "../_adaptationConfigs/fiber_ribbons";
import fiberRectangles from "../_adaptationConfigs/fiber_rectangles";
import gradientBubbles from "../_adaptationConfigs/gradient_bubbles";
import blobmaker from "../_adaptationConfigs/blobmaker";

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
        <MiniCard {...blobmaker} />
        <MiniCard {...linearGradient} />
        <MiniCard {...trianglify} />
        <MiniCard {...particles} />
        <MiniCard {...gradientWaves} />
        <MiniCard
          {...gradientBubbles}
          initState={{ config: {}, size: { width: 600, height: 500 } }}
        />
        <MiniCard {...strings25} />
        <MiniCard {...mesh} />
        <MiniCard {...fiberRibbons} />
        <MiniCard
          initState={{ config: {}, size: { width: 600, height: 600 } }}
          {...steppedGradient}
        />
        <MiniCard {...perfectPurple} />
        <MiniCard {...bubbles} />
        <MiniCard
          initState={{ config: {}, size: { width: 700, height: 500 } }}
          {...fiberRectangles}
        />
        <MiniCard
          initState={{ config: {}, size: { width: 500, height: 500 } }}
          {...generateArt}
        />
        <MiniCard {...wallPattern} />
        <MiniCard {...postmodern} />
      </Card.Group>
      <SubscribeBlock />
    </div>
    <Footer />
  </>
);
