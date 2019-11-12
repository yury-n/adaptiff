import gradientWaves from "../_adaptationConfigs/gradientWaves";
import mesh from "../_adaptationConfigs/mesh";
import trianglify from "../_adaptationConfigs/trianglify";
import { allAdaptations } from "./adaptations";
import { orderedSvgs } from "./svgsList";

export const unfilledMesh = {
  ...mesh,
  thumb: "/thumbs/b30.png",
  initState: {
    configValues: {
      distanceBetween: 7,
      withBackground: false
    }
  }
};

export default [
  ...orderedSvgs,
  allAdaptations[10],
  gradientWaves,
  unfilledMesh,
  trianglify
];
