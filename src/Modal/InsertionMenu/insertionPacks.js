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
  // childishDreamsSvgs,
  paintedShapes,
  curves,
  glitchy,
  blobs,
  waves,
  blots,
  wavyRings
} from "../../pages/svgsList";

export default [
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
    name: "Glitchy",
    objects: glitchy
  },
  {
    name: "Round Shapes",
    objects: curves
  },
  {
    name: "Weird Painted Shapes",
    objects: paintedShapes
  },
  {
    name: "Particles",
    objects: [...particlesSvgs, unfilledMesh]
  },
  {
    name: "Paint Work",
    objects: paintWork
  },
  {
    name: "Basic",
    objects: [linearGradient, ...basicSvgs]
  },
  // {
  //   name: "Childish Dreams",
  //   objects: childishDreamsSvgs
  // },
  {
    name: "Generative",
    objects: [
      allAdaptations[10],
      gradientWaves,
      trianglify,
      allAdaptations[37],
      allAdaptations[45],
      allAdaptations[46],
      blobmaker
    ]
  }
];