import particles from "../_adaptationConfigs/particles";
import gradientBubbles from "../_adaptationConfigs/gradient_bubbles";
import gradientWaves from "../_adaptationConfigs/gradientWaves";

export default [
  {
    ...gradientWaves,
    thumbs: ["/preset_thumbs/6.png"],
    thumbWidth: 225,
    initState: {
      size: { width: 1040, height: 600 },
      config: {
        amplituteX: 300,
        amplituteY: 30,
        crazyness: false,
        fill: false,
        lines: 100,
        palette: ["#ff0099", "#ffe000"],
        smoothness: 17
      }
    }
  },
  {
    ...particles,
    thumbs: ["/preset_thumbs/3.png"],
    thumbWidth: 65,
    initState: {
      size: { width: 300, height: 600 },
      config: {
        maxParticles: 79,
        palette: ["#f46c94", "#fedf35", "#ffffff"],
        sizeVariations: 24
      }
    }
  },
  {
    ...gradientBubbles,
    thumbs: ["/preset_thumbs/5.png"],
    thumbWidth: 130,
    initState: {
      size: { width: 800, height: 800 },
      config: {
        angle: 146,
        itemSize: 32,
        itemsNumInRow: 25,
        padding: 1,
        palette: ["#6f1fff", "#ffffff"],
        randomValues: []
      }
    }
  }
];
