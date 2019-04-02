// import React from "react";
import { gradientPalettes } from "../palettes";

export default {
  author: "Derek Morash",
  authorLink: "https://codepen.io/derekmorash/",
  title: "Waves",
  thumbs: ["/thumbs/waves/1.png"],
  config: [],
  palettes: gradientPalettes,
  externalScripts: [
    "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js",
    "/libs/waves.js"
  ],
  generate: ({ palette }) => {
    window.color1 = palette[0];
    return null;
  }
};
