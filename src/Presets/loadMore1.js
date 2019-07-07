import particles from "../_adaptationConfigs/particles";
import gradientBubbles from "../_adaptationConfigs/gradient_bubbles";
import gradientWaves from "../_adaptationConfigs/gradientWaves";
import postmodern from "../_adaptationConfigs/postmodern";
import strings25 from "../_adaptationConfigs/strings25";

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
  },
  {
    ...strings25,
    thumbs: ["/preset_thumbs/15.png"],
    thumbWidth: 267,
    thumbBackgroundSize: "cover",
    initState: {
      size: { width: 742, height: 361 },
      config: {
        palette: ["#d8f1ff", "#000"],
        sizePercent: [19, 29]
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          config: {
            fontFamily: "Poppins",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            fontSize: 27,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 287, top: 120 },
          text: "create"
        },
        {
          id: 101,
          type: "text",
          config: {
            fontFamily: "Poppins",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            fontSize: 27,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 287, top: 160 },
          text: "something"
        },
        {
          id: 102,
          type: "text",
          config: {
            fontFamily: "Helvetica",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            isBold: true,
            fontSize: 43,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 287, top: 200 },
          text: "unique"
        }
      ]
    }
  },
  {
    ...gradientWaves,
    thumbs: ["/preset_thumbs/13.png"],
    thumbWidth: 267,
    thumbBackgroundSize: "cover",
    initState: {
      size: { width: 742, height: 361 },
      config: {
        palette: ["#ff9855", "#bb045d"],
        amplituteX: 60,
        amplituteY: 60,
        crazyness: true,
        lines: 1,
        smoothness: 6
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          config: {
            fontFamily: "Montserrat",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#fff",
            fontSize: 34,
            padding: 13,
            borderWidth: 0
          },
          position: { left: 156, top: 150 },
          text: "create something unique"
        }
      ]
    }
  },
  {
    ...postmodern,
    thumbs: ["/preset_thumbs/14.png"],
    thumbWidth: 267,
    thumbBackgroundSize: "cover",
    initState: {
      size: { width: 742, height: 361 },
      config: {
        palette: ["#dec7f9", "#693e97", "#2a013e"],
        count: 100,
        lineWidth: 28
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          config: {
            fontFamily: "Merriweather",
            backgroundColor: "#693e97",
            color: "#fff",
            fontSize: 28,
            isBold: true,
            padding: 15,
            borderWidth: 0
          },
          position: { left: 76, top: 191 },
          text: "créer quelque chose d'unique"
        }
      ]
    }
  }
];
