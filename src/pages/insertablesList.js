import blobmaker from "../_adaptationConfigs/blobmaker";
import linearGradient from "../_adaptationConfigs/linearGradient";
import gradientWaves from "../_adaptationConfigs/gradientWaves";
import mesh from "../_adaptationConfigs/mesh";
import trianglify from "../_adaptationConfigs/trianglify";
import { allAdaptations } from "./adaptations";
import { orderedSvgs } from "./svgsList";

const unfilledMesh = {
  ...mesh,
  thumb: "/thumbs/b30.png",
  initState: {
    config: {
      distanceBetween: 7,
      withBackground: false
    }
  }
};

export default [
  ...orderedSvgs,
  blobmaker,
  linearGradient,
  allAdaptations[10],
  gradientWaves,
  unfilledMesh,
  allAdaptations[37],
  trianglify,
  allAdaptations[45]
];
