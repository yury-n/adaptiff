import linearGradient from "../../_adaptationConfigs/linearGradient";
import blobmaker from "../../_adaptationConfigs/blobmaker";
import { allAdaptations } from "../../pages/adaptations";
import { unfilledMesh } from "../../pages/insertablesList";
import trianglify from "../../_adaptationConfigs/trianglify";
import gradientWaves from "../../_adaptationConfigs/gradientWaves";

import {
  basicSvgs,
  particlesSvgs,
  paintWork,
  // paintedShapes,
  curves,
  glitchy,
  blobs,
  waves,
  blots,
  wavyRings,
  glitchyCircles,
  blurredBalls
} from "../../pages/svgsList";
import { childishDreams, abstractLines } from "../../pages/pngList";

export default [
  {
    name: "Blurred Bubbles",
    objects: blurredBalls
  },
  {
    name: "Blobs",
    objects: blobs
  },
  {
    name: "Blots",
    objects: blots
  },
  {
    name: "Wavy Rings",
    objects: wavyRings
  },
  {
    name: "Waves",
    objects: waves
  },
  {
    name: "Glitchy Circles",
    objects: glitchyCircles
  },
  {
    name: "Glitchy",
    objects: glitchy
  },
  {
    name: "Round Shapes",
    objects: curves
  },
  // {
  //   name: "Weird Painted Shapes",
  //   objects: paintedShapes
  // },
  {
    name: "Particles",
    objects: [...particlesSvgs, unfilledMesh]
  },
  {
    name: "Abstract Lines",
    objects: abstractLines
  },
  {
    name: "Paint Work",
    objects: paintWork
  },
  {
    name: "Basic",
    objects: [linearGradient, ...basicSvgs]
  },
  {
    name: "Generative",
    objects: [
      allAdaptations[10],
      gradientWaves,
      trianglify,
      allAdaptations[37],
      allAdaptations[46],
      allAdaptations[45],
      blobmaker
    ]
  },
  {
    name: "Childish Dreams",
    objects: childishDreams
  }
];
