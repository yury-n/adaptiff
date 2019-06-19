import React from "react";
import classnames from "classnames";
import Hero from "../Hero/Hero";
import { Card } from "semantic-ui-react";
import MiniCard from "../MiniCard/MiniCard";

import Header from "../Header/Header";
import Presets from "../Presets/Presets";
import Footer from "../Footer/Footer";
import SubscribeBlock from "../SubscribeBlock/SubscribeBlock";

import s from "../App.module.css";

import linearGradient from "../_adaptationConfigs/linearGradient";
import trianglify from "../_adaptationConfigs/trianglify";
import particles from "../_adaptationConfigs/particles";
import perfectPurple from "../_adaptationConfigs/perfect_purple";
import wallPattern from "../_adaptationConfigs/wallPattern";
import strings25 from "../_adaptationConfigs/strings25";
import generateArt from "../_adaptationConfigs/generateArt";
import gradientWaves from "../_adaptationConfigs/gradientWaves";
import postmodern from "../_adaptationConfigs/postmodern";
import mesh from "../_adaptationConfigs/mesh";
import steppedGradient from "../_adaptationConfigs/steppedGradient";
import fiberRibbons from "../_adaptationConfigs/fiber_ribbons";
import fiberRectangles from "../_adaptationConfigs/fiber_rectangles";
import gradientBubbles from "../_adaptationConfigs/gradient_bubbles";
import chromaticLiquids from "../_adaptationConfigs/chromatic_liquids";
import blobmaker from "../_adaptationConfigs/blobmaker";
export const allAdaptations = [
  linearGradient,
  trianglify,
  particles,
  perfectPurple,
  wallPattern,
  strings25,
  generateArt,
  gradientWaves,
  postmodern,
  mesh,
  steppedGradient,
  fiberRibbons,
  fiberRectangles,
  gradientBubbles,
  chromaticLiquids,
  blobmaker
];

// import octagonalStar from "./_adaptationConfigs/octagonal_star";
// reactKawaii from "./_adaptationConfigs/react_kawaii";
// import bubbles from "../_adaptationConfigs/bubbles";
// import pulse from "../_adaptationConfigs/pulse";
// import abstractParticles from "../_adaptationConfigs/abstractParticles";
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
      <div className={s["subheader"]}>presets from community</div>
      <Presets />
      <div className={s["subheader"]}>backgrounds</div>
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
        <MiniCard
          {...chromaticLiquids}
          initState={{ config: {}, size: { width: 1000, height: 660 } }}
        />
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
