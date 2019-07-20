import blobmaker from "../_adaptationConfigs/blobmaker";
import linearGradient from "../_adaptationConfigs/linearGradient";
import gradientWaves from "../_adaptationConfigs/gradientWaves";
import mesh from "../_adaptationConfigs/mesh";
import subtleRib from "../_adaptationConfigs/subtle_rib";
import trianglify from "../_adaptationConfigs/trianglify";
import { allAdaptations } from "./adaptations";

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
  blobmaker,
  linearGradient,
  allAdaptations[10],
  gradientWaves,
  unfilledMesh,
  subtleRib,
  allAdaptations[37],
  trianglify,
  allAdaptations[45]
];
