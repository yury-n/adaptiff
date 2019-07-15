import React from "react";
import classnames from "classnames";
import { Card } from "semantic-ui-react";
import MiniCard from "../MiniCard/MiniCard";

import Header from "../Header/Header";
import Templates from "../Templates/Templates";
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
import subtleRib from "../_adaptationConfigs/subtle_rib";
import clipSpace3d from "../_adaptationConfigs/clipSpace3d";
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
  blobmaker,
  subtleRib
];
export const insertableAdaptations = [
  blobmaker,
  linearGradient,
  gradientWaves,
  subtleRib
];

// reactKawaii from "./_adaptationConfigs/react_kawaii";
// import bubbles from "../_adaptationConfigs/bubbles";
// import pulse from "../_adaptationConfigs/pulse";
// import abstractParticles from "../_adaptationConfigs/abstractParticles";
// import tunnel from "./_adaptationConfigs/tunnel";
// import waves from "./_adaptationConfigs/waves";
// import tunnel from "./_adaptationConfigs/tunnel";
// import waves from "./_adaptationConfigs/waves";

const backgrounds = [
  {
    ...gradientWaves,
    thumb: "/background_thumbs/18.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        amplituteX: 300,
        amplituteY: 30,
        crazyness: false,
        fill: false,
        lines: 100,
        palette: ["#ff0099", "#ffe000"],
        smoothness: 13,
        randomValues: []
      }
    }
  },
  {
    ...chromaticLiquids,
    thumb: "/background_thumbs/17.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: [
          "#1eaa89",
          "#60d1a3",
          "#9ef2c4",
          "#ffff76",
          "#7a84a3",
          "#7a84a3"
        ]
      }
    }
  },
  {
    ...gradientWaves,
    thumb: "/background_thumbs/16.png",
    initState: {
      size: { width: 500, height: 500 },
      config: {
        amplituteX: 60,
        amplituteY: 60,
        crazyness: true,
        fill: true,
        lines: 24,
        palette: ["#ad42a5", "#fad18f"],
        smoothness: 1,
        randomValues: [Math.random(), Math.random()]
      }
    }
  },
  {
    ...fiberRibbons,
    thumb: "/background_thumbs/15.png",
    initState: {
      size: { width: 700, height: 700 },
      config: {
        backgroundColor: "#ffffff",
        fov: 166,
        numLines: 100,
        palette: ["#9b50ed", "#69d5ff", "#ffbd6e", "#ff77bc"]
      }
    }
  },
  {
    ...clipSpace3d,
    thumb: "/background_thumbs/14.png",
    initState: {
      size: { width: 930, height: 930 },
      config: {
        bumpStrength: 88,
        objectColor: "#050504",
        objectShininess: 200,
        lightColor: "#ffffff",
        backgroundColor: "#ffd1d1",
        envPower: 2,
        envBlur: 0,
        camX: 0,
        camY: 2,
        camZ: -30,
        camZoom: 0
      }
    }
  },
  {
    ...linearGradient,
    title: "multiple objects",
    author: "multiple authors",
    thumb: "/background_thumbs/13.png",
    initState: {
      size: { width: 600, height: 500 },
      config: {
        angle: 200,
        direction: "custom_angle",
        palette: ["#c95c46", "#511414"]
      },
      insertedItems: [
        {
          id: 100,
          type: "object",
          showIframe: true,
          adaptation: gradientWaves,
          width: 571,
          height: 468,
          position: { left: 15, top: 16 },
          configValues: {
            amplituteX: 60,
            amplituteY: 60,
            fill: false,
            lines: 10,
            palette: ["#e9db6d", "#c95c46"],
            randomValues: [0.1329382981666447, 0.5229732095475299],
            smoothness: 10
          }
        }
      ]
    }
  },
  {
    ...mesh,
    thumb: "/background_thumbs/28.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        distanceBetween: 7,
        palette: ["#fff", "#000"]
      }
    }
  },
  { ...clipSpace3d, thumb: "/background_thumbs/24.png" },
  { ...blobmaker, thumb: "/background_thumbs/22.png" },
  {
    ...subtleRib,
    thumb: "/background_thumbs/23.png",
    initState: {
      config: { color: "#c1bbf2" },
      size: { width: 600, height: 500 }
    }
  },
  { ...trianglify, thumb: "/background_thumbs/29.png" },
  { ...particles, thumb: "/background_thumbs/25.png" },
  { ...gradientWaves, thumb: "/background_thumbs/27.png" },
  {
    ...gradientBubbles,
    thumb: "/background_thumbs/26.png",
    initState: { config: {}, size: { width: 600, height: 500 } }
  },
  { ...strings25 },
  { ...mesh },
  { ...fiberRibbons },
  {
    ...steppedGradient,
    initState: { config: {}, size: { width: 600, height: 600 } }
  },
  { ...perfectPurple },
  {
    ...chromaticLiquids,
    initState: { config: {}, size: { width: 1000, height: 660 } }
  },
  {
    ...fiberRectangles,
    initState: { config: {}, size: { width: 700, height: 500 } }
  },
  {
    ...generateArt,
    initState: { config: {}, size: { width: 500, height: 500 } }
  },
  { ...wallPattern },
  {
    ...gradientBubbles,
    thumb: "/background_thumbs/21.png",
    initState: {
      size: { width: 800, height: 800 },
      config: {
        palette: ["#1c004e", "#00aaff"],
        itemSize: 31,
        itemsNumInRow: 25,
        padding: 1,
        angle: 146,
        itemType: "circle",
        rounding: 20,
        randomValues: [0.34505942052567407]
      },
      insertedItems: []
    }
  },
  {
    ...particles,
    thumb: "/background_thumbs/20.png",
    initState: {
      size: { width: 600, height: 600 },
      config: {
        maxParticles: 200,
        palette: ["#f46c94", "#fedf35", "#ffffff"],
        sizeVariations: 24
      }
    }
  },
  { ...linearGradient },
  { ...postmodern }
];

export default () => (
  <>
    <Header />
    <div
      className={classnames(s["main-content-area"], "restricted-width-area")}
    >
      <div className={s["subheader"]}>templates</div>
      <Templates />
      <div className={s["subheader"]}>backgrounds</div>
      <Card.Group className="cards">
        {backgrounds.map((background, index) => (
          <MiniCard showModal={index === 0} key={index} {...background} />
        ))}
      </Card.Group>
      <SubscribeBlock />
    </div>
    <Footer />
  </>
);
