import linearGradient from "../_adaptationConfigs/linearGradient";
import radialGradient from "../_adaptationConfigs/radialGradient";
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
import voronoi from "../_adaptationConfigs/voronoi";
import carpet from "../_adaptationConfigs/carpet";
import blank from "../_adaptationConfigs/blank";
import simpleRipple from "../_adaptationConfigs/simple_ripple";
import hedgehog from "../_adaptationConfigs/hedgehog";
import tatters from "../_adaptationConfigs/tatters";
// import cells from "../_adaptationConfigs/cells";
// import fog from "../_adaptationConfigs/fog";
import svgs from "./svgsList";
import waterpipe from "../_adaptationConfigs/waterpipe";

export const allAdaptationTypes = [
  linearGradient,
  radialGradient,
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
  subtleRib,
  clipSpace3d,
  voronoi,
  carpet,
  blank,
  hedgehog,
  waterpipe
  // cells,
  // fog
];

const unfilledGradientWaves = {
  ...gradientWaves,
  thumb: "/thumbs/b18.png",
  initState: {
    size: { width: 1000, height: 1000 },
    configValues: {
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
};

export const allAdaptations = [
  // 0
  {
    ...linearGradient,
    thumb: "/thumbs/18.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        angle: 200,
        direction: "top",
        palette: ["#081027", "#0d1f52"]
      },
      insertedItems: [
        {
          id: 100,
          type: "object",
          showIframe: true,
          adaptation: gradientWaves,
          width: 1018.9873417721519,
          height: 373.4177215189874,
          position: { left: -4.219409282700422, top: -29.535864978902953 },
          configValues: {
            amplituteX: 200,
            amplituteY: 16,
            fill: false,
            lines: 10,
            palette: ["#402eff", "#5c4dfb"],
            randomValues: [],
            smoothness: 22
          }
        },
        {
          id: 101,
          type: "text",
          configValues: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#ffffff",
            fontFamily: "Prata",
            fontSize: 96,
            isBold: false,
            letterSpacing: 0,
            padding: 10
          },
          text: "Catch the next wave",
          position: { left: 25.31645569620253, top: 388.18565400843886 }
        },
        {
          id: 102,
          type: "object",
          showIframe: true,
          adaptation: gradientWaves,
          width: 1002.1097046413503,
          height: 341.7721518987342,
          position: { left: 3.3783783783783785, top: 652.0270270270271 },
          configValues: {
            amplituteX: 200,
            amplituteY: 16,
            fill: false,
            lines: 10,
            palette: ["#4937ff", "#e4eef0"],
            randomValues: [],
            smoothness: 22
          }
        },
        {
          id: 103,
          type: "text",
          configValues: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#ffffff",
            fontFamily: "Roboto",
            fontSize: 35,
            letterSpacing: 0,
            padding: 10
          },
          text: "learn how to catch an unbroken wave",
          position: { left: 196.20253164556962, top: 529.535864978903 }
        }
      ]
    }
  },
  // 1
  {
    ...linearGradient,
    thumb: "/thumbs/16.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#0b0a21", "#1e1b57"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          id: 100,
          type: "object",
          showIframe: true,
          adaptation: linearGradient,
          width: 943.5483870967741,
          height: 943.5483870967741,
          position: { left: 23.647513440860216, top: 26.965725806451612 },
          configValues: {
            angle: 31,
            direction: "custom_angle",
            palette: ["#a52bf8", "#02d0ea"]
          }
        },
        {
          id: 101,
          type: "object",
          showIframe: true,
          adaptation: gradientWaves,
          width: 885.752688172043,
          height: 888.4408602150538,
          position: { left: 50.676243279569896, top: 57.522681451612904 },
          configValues: {
            amplituteX: 88,
            amplituteY: 10,
            fill: false,
            lines: 67,
            palette: ["#cf91f9", "#02d0ea"],
            randomValues: [0.044420196340127394, 0.22911748347161964],
            smoothness: 12
          }
        },
        {
          id: 103,
          type: "text",
          position: { left: 235.55107526881721, top: 263.3778561827957 },
          configValues: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#ffffff",
            fontFamily: "Monoton",
            fontSize: 150,
            letterSpacing: 0,
            padding: 10
          },
          text: "what\nso\nnot",
          width: 527.1337365591398,
          height: 511.9287634408602
        }
      ]
    }
  },
  // 2
  {
    ...gradientBubbles,
    thumb: "/thumbs/11.png",
    initState: {
      size: { width: 600, height: 600 },
      configValues: {
        angle: 360,
        itemSize: 10,
        itemType: "circle",
        itemsNumInRow: 16,
        padding: 50,
        palette: ["#dba430", "#921000"],
        randomValues: [],
        rounding: 20
      },
      insertedItems: [
        {
          id: 101,
          width: 650,
          height: 468,
          showIframe: true,
          type: "object",
          position: { left: -97, top: 55 },
          adaptation: blobmaker,
          configValues: {
            angle: 86,
            complexity: 11,
            contrast: 4,
            palette: ["#921000", "#dba430"],
            randomValues: [
              0.3519936882860435,
              0.5840141658750502,
              0.08831844898281593,
              0.9505707548326048,
              0.3508100193181387,
              0.4602954235225203,
              0.9476222836166059,
              0.45153414683098303,
              0.7071476224937401,
              0.2609440704641621
            ]
          }
        },
        {
          configValues: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#d7ff00",
            fontFamily: "Rubik Mono One",
            fontSize: 43,
            letterSpacing: 0,
            padding: 10
          },
          id: 102,
          type: "text",
          position: { left: 68.75, top: 184.375 },
          text: `+
  add
  blobs
  anywhere`
        }
      ]
    }
  },
  // 3
  {
    ...gradientWaves,
    thumb: "/thumbs/9.png",
    id: 3,
    initState: {
      size: { width: 700, height: 700 },
      configValues: {
        amplituteX: 150,
        amplituteY: 30,
        crazyness: false,
        fill: true,
        lines: 70,
        palette: ["#00fb94", "#006b65"],
        smoothness: 98,
        randomValues: []
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          configValues: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 1,
            color: "#ffffff",
            fontFamily: "El Messiri",
            fontSize: 87,
            letterSpacing: 0,
            padding: 50
          },
          position: { left: 122, top: 120 },
          text: `We
  should
  all be
  designers`
        }
      ]
    }
  },
  // 4
  {
    ...fiberRibbons,
    thumb: "/thumbs/7.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        backgroundColor: "#324444",
        palette: ["#A2CCB6", "#FCEEB5", "#fff", "#EE786E"],
        numLines: 94,
        fov: 75
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          configValues: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#ffffff",
            fontFamily: "Playfair Display",
            fontSize: 220,
            letterSpacing: 0,
            padding: 10,
            borderWidth: 0
          },
          position: { left: 166.125, top: 132.65625 },
          text: "React\nThree\nFiber",
          width: 600.8125,
          height: 746
        }
      ]
    }
  },
  // 5
  {
    ...linearGradient,
    thumb: "/thumbs/19.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#f9f9f9", "#ffffff"],
        direction: "left",
        angle: 200
      },
      insertedItems: [
        {
          id: 102,
          type: "object",
          width: 653,
          height: 711,
          showIframe: true,
          adaptation: subtleRib,
          configValues: { color: "#fcd633", mode: "vertical", intensity: 20 },
          position: { left: 345, top: 0 }
        },
        {
          id: 103,
          type: "text",
          configValues: {
            fontFamily: "Lato",
            fontSize: 34,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0.5 },
            borderWidth: 1,
            isBold: true
          },
          width: 161.875,
          height: 96,
          position: { left: 120, top: 60 },
          text: "Design\nSystems"
        },
        {
          id: 104,
          type: "text",
          configValues: {
            fontFamily: "Lato",
            fontSize: 72,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isBold: true
          },
          width: 620.234375,
          height: 257,
          position: { left: 121, top: 455 },
          text: "A comprehensive\nguide to\niconography"
        },
        {
          id: 5,
          type: "text",
          configValues: {
            fontFamily: "Lato",
            fontSize: 28,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isBold: false
          },
          width: 205.21875,
          height: 50,
          position: { left: 123, top: 716 },
          text: "featured article"
        },
        {
          id: 6,
          type: "text",
          configValues: {
            fontFamily: "Lato",
            fontSize: 20,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isBold: false
          },
          width: 170.078125,
          height: 42,
          position: { left: 441, top: 922 },
          text: "by Steve Robsky"
        }
      ]
    }
  },
  // 6
  {
    ...linearGradient,
    thumb: "/thumbs/19.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#f9f9f9", "#ffffff"],
        direction: "left",
        angle: 200
      },
      insertedItems: [
        {
          id: 102,
          type: "object",
          width: 653,
          height: 711,
          showIframe: true,
          adaptation: subtleRib,
          configValues: { color: "#fcd633", mode: "vertical", intensity: 20 },
          position: { left: 345, top: 0 }
        },
        {
          id: 103,
          type: "text",
          configValues: {
            fontFamily: "Lato",
            fontSize: 34,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0.5 },
            borderWidth: 1,
            isBold: true
          },
          width: 161.875,
          height: 96,
          position: { left: 120, top: 60 },
          text: "Design\nSystems"
        },
        {
          id: 104,
          type: "text",
          configValues: {
            fontFamily: "Lato",
            fontSize: 72,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isBold: true
          },
          width: 620.234375,
          height: 257,
          position: { left: 121, top: 455 },
          text: "A comprehensive\nguide to\niconography"
        },
        {
          id: 5,
          type: "text",
          configValues: {
            fontFamily: "Lato",
            fontSize: 28,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isBold: false
          },
          width: 205.21875,
          height: 50,
          position: { left: 123, top: 716 },
          text: "featured article"
        },
        {
          id: 6,
          type: "text",
          configValues: {
            fontFamily: "Lato",
            fontSize: 20,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isBold: false
          },
          width: 170.078125,
          height: 42,
          position: { left: 441, top: 922 },
          text: "by Steve Robsky"
        }
      ]
    }
  },
  // 7
  {
    ...strings25,
    thumb: "/thumbs/15.png",
    thumbBackgroundSize: "cover",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#d8f1ff", "#000"],
        sizePercent: [25, 39],
        randomValues: [0.39245358845393374]
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          configValues: {
            fontFamily: "Poppins",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            fontSize: 50,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 347.4672379032258, top: 386.1097110215054 },
          text: "create",
          width: 170.9719422043011,
          height: 59.72782258064516
        },
        {
          id: 101,
          type: "text",
          configValues: {
            fontFamily: "Poppins",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            fontSize: 64,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 344.77906586021504, top: 455.68716397849465 },
          text: "something",
          width: 350.44942876344084,
          height: 75.85685483870968
        },
        {
          id: 102,
          type: "text",
          configValues: {
            fontFamily: "Roboto",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            isBold: true,
            fontSize: 69,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 346.12315188172045, top: 544.0818212365591 },
          text: "unique",
          width: 232.08585349462365,
          height: 81.23319892473118
        }
      ]
    }
  },
  // 8
  {
    ...gradientWaves,
    thumb: "/thumbs/n13.png",
    thumbBackgroundSize: "cover",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#ff9855", "#bb045d"],
        lines: 13,
        amplituteX: 148,
        amplituteY: 200,
        smoothness: 6,
        fill: true,
        randomValues: [0.5269907429385214, 0.44993152499044275]
      },
      insertedItems: []
    }
  },
  // 9
  {
    ...postmodern,
    thumb: "/thumbs/14.png",
    thumbBackgroundSize: "cover",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#dec7f9", "#693e97", "#2a013e"],
        count: 100,
        lineWidth: 74,
        randomValues: [0.9799188025715417]
      },
      insertedItems: []
    }
  },
  // 10
  unfilledGradientWaves,
  // 11
  {
    ...chromaticLiquids,
    thumb: "/thumbs/b17.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
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
  // 12
  {
    ...gradientWaves,
    thumb: "/thumbs/b16.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
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
  // 13
  {
    ...fiberRibbons,
    thumb: "/thumbs/b15.png",
    initState: {
      size: { width: 700, height: 700 },
      configValues: {
        backgroundColor: "#ffffff",
        fov: 166,
        numLines: 100,
        palette: ["#9b50ed", "#69d5ff", "#ffbd6e", "#ff77bc"]
      }
    }
  },
  // 14
  {
    ...clipSpace3d,
    thumb: "/thumbs/b14.png",
    initState: {
      size: { width: 930, height: 930 },
      configValues: {
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
  // 15
  {
    ...linearGradient,
    title: "multiple elements",
    author: "multiple authors",
    thumb: "/thumbs/b13.png",
    initState: {
      size: { width: 600, height: 500 },
      configValues: {
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
  // 16
  {
    ...mesh,
    thumb: "/thumbs/b28.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        distanceBetween: 7,
        palette: ["#fff", "#000"]
      }
    }
  },
  // 17
  { ...clipSpace3d, thumb: "/thumbs/b24.png" },
  // 18
  { ...blobmaker, thumb: "/thumbs/b22.png" },
  // 19
  {
    ...subtleRib,
    thumb: "/thumbs/b23.png",
    initState: {
      configValues: { color: "#c1bbf2" },
      size: { width: 600, height: 500 }
    }
  },
  // 20
  { ...trianglify, thumb: "/thumbs/b29.png" },
  // 21
  { ...particles, thumb: "/thumbs/b25.png" },
  // 22
  { ...gradientWaves, thumb: "/thumbs/b27.png" },
  // 23
  {
    ...gradientBubbles,
    thumb: "/thumbs/b26.png",
    initState: { configValues: {}, size: { width: 600, height: 500 } }
  },
  // 24
  { ...strings25 },
  // 25
  { ...mesh },
  // 26
  { ...fiberRibbons },
  // 27
  {
    ...steppedGradient,
    initState: { configValues: {}, size: { width: 600, height: 600 } }
  },
  // 28
  { ...perfectPurple },
  // 29
  {
    ...chromaticLiquids,
    initState: { configValues: {}, size: { width: 1000, height: 660 } }
  },
  // 30
  {
    ...fiberRectangles,
    initState: { configValues: {}, size: { width: 700, height: 500 } }
  },
  // 31
  {
    ...generateArt,
    initState: { configValues: {}, size: { width: 500, height: 500 } }
  },
  // 32
  { ...wallPattern },
  // 33
  {
    ...gradientBubbles,
    thumb: "/thumbs/b21.png",
    initState: {
      size: { width: 800, height: 800 },
      configValues: {
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
  // 34
  {
    ...particles,
    thumb: "/thumbs/b20.png",
    initState: {
      size: { width: 600, height: 600 },
      configValues: {
        maxParticles: 200,
        palette: ["#f46c94", "#fedf35", "#ffffff"],
        sizeVariations: 24
      }
    }
  },
  // 35
  { ...linearGradient },
  // 36
  { ...postmodern },
  // 37
  {
    ...voronoi,
    initState: { configValues: {}, size: { width: 1000, height: 1000 } }
  },
  // 38
  {
    ...linearGradient,
    thumb: "/thumbs/38.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#00040e", "#470090"],
        direction: "top",
        angle: 200
      },
      insertedItems: [
        {
          id: 302,
          type: "object",
          showIframe: true,
          adaptation: gradientWaves,
          width: 1002.1029609690444,
          height: 341.7521870794078,
          position: { left: -0.9463324360699865, top: 318.703734858681 },
          configValues: {
            amplituteX: 200,
            amplituteY: 16,
            fill: false,
            lines: 10,
            palette: ["#4937ff", "#4937ff"],
            randomValues: [],
            smoothness: 22
          }
        },
        {
          id: 202,
          type: "object",
          width: 875.9883916554509,
          height: 303.98300807537015,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#20ff06", "#f9f9f9"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [2, 6]
          },
          position: { left: 61.67984522207268, top: 335.67462987886944 }
        },
        {
          id: 203,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Righteous",
            fontSize: 100,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0
          },
          width: 587.7145020188425,
          height: 128.9956258411844,
          position: { left: 201.14821668909826, top: 212.90376850605654 },
          text: "I don't know"
        },
        {
          id: 204,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Righteous",
            fontSize: 100,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0
          },
          width: 643.3378196500673,
          height: 128.9956258411844,
          position: { left: 181.33832436069986, top: 634.3581763122477 },
          text: "what this is..."
        }
      ]
    }
  },
  // 39
  {
    ...carpet,
    initState: { configValues: {}, size: { width: 1000, height: 1000 } }
  },
  // 40
  {
    ...gradientWaves,
    thumb: "/thumbs/40.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#18faff", "#7b2dd6"],
        lines: 13,
        amplituteX: 58,
        amplituteY: 30,
        smoothness: 100,
        fill: true,
        randomValues: []
      },
      insertedItems: [
        {
          id: 302,
          type: "object",
          width: 994.5652173913043,
          height: 990.9420289855071,
          showIframe: true,
          adaptation: gradientWaves,
          configValues: {
            palette: ["#18faff", "#ffffff"],
            lines: 13,
            amplituteX: 10,
            amplituteY: 10,
            smoothness: 100,
            fill: false,
            randomValues: []
          },
          position: { left: 2.915534420289855, top: 3.87794384057971 }
        }
      ]
    }
  },
  // 41
  {
    ...linearGradient,
    thumb: "/thumbs/41.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#ef76a7", "#d01200"],
        lines: 13,
        amplituteX: 58,
        amplituteY: 30,
        smoothness: 100,
        fill: true,
        randomValues: []
      },
      insertedItems: [
        {
          id: 302,
          type: "object",
          width: 994.5625,
          height: 994.5625,
          showIframe: true,
          adaptation: gradientWaves,
          configValues: {
            palette: ["#ffffff", "#d01200"],
            lines: 13,
            amplituteX: 36,
            amplituteY: 20,
            smoothness: 100,
            fill: false,
            randomValues: []
          },
          position: { left: 1.28125, top: 2.25 }
        },
        {
          id: 202,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Oswald",
            fontSize: 81,
            padding: 10,
            letterSpacing: 0,
            color: "#fefefe",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true
          },
          width: 709.640625,
          height: 376,
          position: { left: 40.03125, top: 587.140625 },
          text:
            "я запускаю\nв проволочный космос\nсвой медный грош, \nувенчанный гербом\n"
        },
        {
          id: 304,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Barriecito",
            fontSize: 100,
            padding: 10,
            letterSpacing: 0,
            color: "#fefefe",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true
          },
          width: 220,
          height: 130,
          position: { left: 716.640625, top: 28.21875 },
          text: "1987"
        },
        {
          id: 102,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto Condensed",
            fontSize: 49,
            padding: 10,
            letterSpacing: 0,
            color: "#fefefe",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true
          },
          width: 309.921875,
          height: 73,
          position: { left: 29, top: 32 },
          text: "Постскриптум"
        },
        {
          id: 103,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto Condensed",
            fontSize: 35,
            padding: 10,
            letterSpacing: 0,
            color: "#fefefe",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true
          },
          width: 236.515625,
          height: 58,
          position: { left: 32, top: 92 },
          text: "И. А. Бродский"
        }
      ]
    }
  },
  // 42
  {
    ...blank,
    thumb: "/thumbs/42.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: { transparent: false, color: "#ffffff" },
      insertedItems: [
        {
          id: 303,
          type: "object",
          width: 1052.528578528827,
          height: 1220.9865805168986,
          showIframe: true,
          adaptation: mesh,
          configValues: {
            withBackground: false,
            palette: ["#593c2e", "#ffcf2c"],
            color: "#000",
            distanceBetween: 17,
            randomValues: [0.9723743823562034]
          },
          position: { left: 87.66153081510934, top: -118.84940357852882 }
        },
        {
          id: 302,
          type: "object",
          width: 508.94632206759445,
          height: 1009.9403578528827,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#fbcd33", "#bb384e"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: -1.8327534791252484, top: -3.789761431411531 }
        },
        {
          id: 202,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Seymour One",
            fontSize: 100,
            padding: 10,
            letterSpacing: 0,
            color: "#6b4a7a",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: true
          },
          width: 687.0961729622267,
          height: 129.28677932405566,
          position: { left: 122.26640159045725, top: 386.67992047713716 },
          text: "Хаос лиц"
        },
        {
          id: 102,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Seymour One",
            fontSize: 57,
            padding: 10,
            letterSpacing: 0,
            color: "#fbcd33",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: true
          },
          width: 739.5004970178926,
          height: 81.57306163021869,
          position: { left: 58.64811133200795, top: 492.04771371769385 },
          text: "и не видно тропы"
        },
        {
          id: 102,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Montserrat",
            fontSize: 33,
            padding: 10,
            letterSpacing: 0,
            color: "#fefefe",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: true
          },
          width: 266.49420529801324,
          height: 55.753311258278146,
          position: { left: 133.11258278145695, top: 915.8940397350993 },
          text: "И.А. Бродский"
        }
      ]
    }
  },
  // 43
  {
    ...linearGradient,
    thumb: "/thumbs/n43.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#fbcac4", "#45618a"],
        direction: "top",
        angle: 200
      },
      insertedItems: [
        {
          id: 302,
          type: "object",
          width: 994.984375,
          height: 994.984375,
          showIframe: true,
          adaptation: mesh,
          configValues: {
            withBackground: false,
            palette: ["#593c2e", "#ffcf2c"],
            color: "#ffffff",
            distanceBetween: 7,
            randomValues: [0.5307371650983657]
          },
          position: { left: 5.640625, top: 6.625 }
        }
      ]
    }
  },
  // 44
  {
    ...blank,
    thumb: "/thumbs/44.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: { transparent: false, color: "#ffffff" },
      insertedItems: [
        {
          id: 202,
          type: "object",
          width: 1011,
          height: 1025,
          showIframe: true,
          adaptation: trianglify,
          configValues: {
            palette: ["#ffffff", "#ffffff", "#ffffff", "#00ffc5"],
            cell_size: 72,
            variance: 100
          },
          position: { left: 44, top: 33 }
        },
        {
          id: 203,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Old Standard TT",
            fontSize: 67,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: true
          },
          width: 824.28125,
          height: 312,
          position: { left: 129, top: 377 },
          text:
            "Улиц недвижность идолья,\nкамни, выдолбы…\nЕсли бы их не видел я —\nчто я видел бы?"
        },
        {
          id: 102,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Vollkorn",
            fontSize: 37,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: true
          },
          width: 293.25,
          height: 60,
          position: { left: 133, top: 92 },
          text: "Дмитрий Быков"
        }
      ]
    }
  },
  // 45
  {
    ...simpleRipple,
    thumb: "/thumbs/45.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {}
    }
  },
  // 46
  {
    ...hedgehog,
    thumb: "/thumbs/46.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {}
    }
  },
  // 47
  {
    ...carpet,
    thumb: "/thumbs/47.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#fff", "#256eb0", "#eca5b3"],
        rotate: 113,
        cellCount: 5,
        innerRectSide: 984
      },
      insertedItems: []
    }
  },
  // 48
  {
    ...blank,
    thumb: "/thumbs/48.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: { transparent: false, color: "#ffffff" },
      insertedItems: [
        {
          id: 302,
          type: "object",
          width: 1084,
          height: 562,
          showIframe: true,
          adaptation: trianglify,
          configValues: {
            palette: ["#fe0057", "#82003b", "#270b1d"],
            cell_size: 70,
            variance: 100
          },
          position: { left: 2, top: 2 }
        },
        {
          id: 303,
          type: "object",
          width: 1086,
          height: 522,
          showIframe: true,
          adaptation: trianglify,
          configValues: {
            palette: ["#000e1e", "#0316b0", "#001bff"],
            cell_size: 50,
            variance: 100
          },
          position: { left: 1, top: 570 }
        },
        {
          id: 304,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Oranienbaum",
            fontSize: 120,
            padding: 10,
            letterSpacing: 0,
            color: "#fefefe",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true,
            isBold: false
          },
          width: 455,
          height: 164,
          position: { left: 323, top: 156 },
          text: "Alter Ego"
        },
        {
          id: 305,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Oranienbaum",
            fontSize: 51,
            padding: 10,
            letterSpacing: 0,
            color: "#f9b7cd",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true,
            isBold: false
          },
          width: 449.171875,
          height: 81,
          position: { left: 324, top: 319 },
          text: "Men's clothing brand"
        },
        {
          id: 202,
          type: "object",
          width: 1082,
          height: 518,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#3449f7", "#000849"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [2, 4]
          },
          position: { left: 2, top: 573 }
        },
        {
          id: 203,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Lora",
            fontSize: 120,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12
          },
          width: 305.609375,
          height: 164,
          position: { left: 388, top: 654 },
          text: "-70%"
        },
        {
          id: 204,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Oranienbaum",
            fontSize: 76,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          width: 398.109375,
          height: 111,
          position: { left: 353, top: 817 },
          text: "Ликвидация"
        },
        {
          id: 205,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Oranienbaum",
            fontSize: 52,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          width: 554.5625,
          height: 82,
          position: { left: 278, top: 924 },
          text: "Всей мужской коллекции"
        }
      ]
    }
  },
  // 49
  {
    ...hedgehog,
    thumb: "/thumbs/49.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        withBackground: true,
        backgroundColor: "#105956",
        strokeColor: { r: "66", g: "205", b: "166", a: "0.62" },
        randomValues: [0.3390192027783483]
      },
      insertedItems: [
        {
          id: 202,
          type: "object",
          width: 540,
          height: 540,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#105956", "#105956"],
            itemsNum: 62,
            strokeWidth: 3,
            radius: 100,
            fullyFitInside: true
          },
          position: { left: 92.85726127320955, top: 38.85278514588859 }
        },
        {
          id: 203,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Oswald",
            fontSize: 73,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 249, g: 249, b: 249, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          width: 649.6875,
          height: 107.33753315649867,
          position: { left: 190.86206896551724, top: 243.85941644562334 },
          text: "Меньше — это больше"
        },
        {
          id: 204,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Oswald",
            fontSize: 40,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 249, g: 249, b: 249, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          width: 271.1190318302387,
          height: 114.49933687002653,
          position: { left: 199.8590848806366, top: 353.86024535809014 },
          text: "чистота формы\nв виде принципа"
        },
        {
          id: 205,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto Condensed",
            fontSize: 27,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 249, g: 249, b: 249, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          width: 674.6195291777188,
          height: 51.47546419098143,
          position: { left: 211.09416445623341, top: 976.1762267904509 },
          text: "современные технологии способны загромоздить дизайн"
        }
      ]
    }
  },
  // 50
  {
    ...carpet,
    thumb: "thumbs/50.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#fff", "#6f86d6", "#48c6ef"],
        rotate: 113,
        cellCount: 5,
        innerRectSide: 1352,
        randomValues: [0.47419615552278005]
      },
      insertedItems: [
        {
          id: 302,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Pacifico",
            fontSize: 51,
            padding: 33,
            letterSpacing: 2,
            color: "#3e3c3c",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: false
          },
          width: 249.54409814323608,
          height: 121.684350132626,
          position: { left: 768.215351458886, top: 883.9522546419098 },
          text: "И.А.Б."
        },
        {
          id: 102,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Rubik",
            fontSize: 60,
            padding: 33,
            letterSpacing: 2,
            color: "#3e3c3c",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0.64 },
            borderWidth: 0,
            hasCyrillic: true,
            isBold: false,
            textAlign: "center"
          },
          width: 841.4704907161804,
          height: 260.9416445623342,
          position: { left: 88.85941644562334, top: 354.1114058355438 },
          text:
            "Остановись мгновение!\nТы не столь прекрасно,\nсколько ты неповторимо."
        }
      ]
    }
  },
  // 51
  {
    ...trianglify,
    thumb: "thumbs/n51.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#ffee00", "#0085c7", "#150f49", "#070d40"],
        cell_size: 80,
        variance: 100
      },
      insertedItems: [
        {
          id: 203,
          type: "object",
          width: 1074,
          height: 1076,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#ffee00", "#0085c7", "#9cbaed"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [2, 3]
          },
          position: { left: 4, top: 0 }
        }
      ]
    }
  },
  // 52
  {
    ...linearGradient,
    thumb: "thumbs/52.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#6d107e", "#f03358"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          id: 301,
          type: "object",
          width: 1000,
          height: 1000,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#ffee00", "#f03358", "#cee1ff"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [9, 25]
          },
          position: { left: 3.3222591362126246, top: 3.3222591362126246 }
        },
        {
          id: 102,
          type: "object",
          width: 885.3820598006645,
          height: 784.0531561461794,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#ffffff", "#ffffff"],
            itemsNum: 32,
            strokeWidth: 3,
            radius: 100,
            fullyFitInside: true
          },
          position: { left: 61.461794019933556, top: 144.51827242524917 }
        },
        {
          id: 302,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Yanone Kaffeesatz",
            fontSize: 67,
            padding: 130,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: "#ffffff",
            borderWidth: 0,
            borderRadius: 300,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true,
            textAlign: "center"
          },
          width: 599.9792358803987,
          height: 578.9036544850499,
          position: { left: 207.38164451827242, top: 243.64098837209303 },
          text: "Обе стороны \nмоей натуры \nобладали \nобщей памятью"
        }
      ]
    }
  },
  // 53
  {
    ...tatters,
    thumb: "thumbs/53.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {}
    }
  },
  // 54
  {
    ...linearGradient,
    thumb: "thumbs/54.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#ff9a8b", "#6148aa"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          id: 502,
          type: "object",
          width: 994.5494186046512,
          height: 994.5494186046512,
          showIframe: true,
          adaptation: gradientWaves,
          configValues: {
            palette: ["#f6d365", "#fda085"],
            lines: 38,
            amplituteX: 36,
            amplituteY: 20,
            smoothness: 100,
            fill: false,
            randomValues: []
          },
          position: { left: 6.592607973421927, top: 7.552948504983389 }
        },
        {
          id: 102,
          type: "object",
          width: 1898.671096345515,
          height: 378.7375415282392,
          showIframe: true,
          adaptation: svgs[3],
          configValues: { palette: ["#F1EAB9", "#FF8C8C"] },
          position: { left: -611.295681063123, top: 823.9202657807309 }
        },
        {
          id: 103,
          type: "object",
          width: 1724.2524916943523,
          height: 343.8538205980067,
          showIframe: true,
          adaptation: svgs[3],
          configValues: { palette: ["#F1EAB9", "#FF8C8C"] },
          position: { left: -511.6279069767442, top: -124.58471760797343 }
        }
      ]
    }
  },
  // 55
  {
    ...trianglify,
    thumb: "thumbs/55.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#453ff4", "#49b8e9", "#ffffff", "#fe96fc"],
        cell_size: 80,
        variance: 0
      },
      insertedItems: []
    }
  },
  // 56
  {
    ...clipSpace3d,
    thumb: "thumbs/56.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        bumpStrength: 200,
        objectColor: "#3b2001",
        objectShininess: 29,
        lightColor: "#ff0000",
        backgroundColor: "#b7b7b7",
        envPower: 7,
        envBlur: 0,
        camX: 10,
        camY: 39,
        camZ: -15,
        camZoom: 7
      },
      insertedItems: []
    }
  },
  // 57
  {
    ...particles,
    thumb: "/thumbs/57.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        maxParticles: 163,
        palette: ["#572949", "#fbda2b", "#ff8804"],
        sizeVariations: 18
      }
    }
  },
  // 58
  {
    ...linearGradient,
    thumb: "/thumbs/58.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#7be4da", "#cefbee"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          id: 204,
          type: "object",
          width: 995.9877938517178,
          height: 991.9755877034357,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#7be4da", "#015079"],
            itemsNum: 47,
            strokeWidth: 1,
            radius: 100,
            fullyFitInside: true
          },
          position: { left: 4.605560578661844, top: 5.594484629294755 }
        },
        {
          id: 202,
          type: "object",
          width: 981.9168173598553,
          height: 987.3417721518987,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#7be4da", "#fbfdff"],
            itemsNum: 2,
            strokeWidth: 21,
            radius: 100,
            fullyFitInside: true
          },
          position: { left: 11.415009041591318, top: 7.826627486437612 }
        }
      ]
    }
  },
  // 59
  {
    ...clipSpace3d,
    thumb: "/thumbs/59.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        bumpStrength: 200,
        objectColor: "#ebc4c4",
        objectShininess: 12,
        lightColor: "#ee754e",
        backgroundColor: "#ffcece",
        envPower: 2,
        envBlur: 0,
        camX: -15,
        camY: 0,
        camZ: -50,
        camZoom: 3
      },
      insertedItems: []
    }
  },
  // 60
  {
    ...chromaticLiquids,
    thumb: "/thumbs/60.png",
    initState: {
      size: { width: 1080, height: 607 },
      configValues: {
        palette: [
          "#e87a7a",
          "#8c4f7f",
          "#8c75a5",
          "#babfd6",
          "#8c75a5",
          "#babfd6"
        ]
      },
      insertedItems: [
        {
          id: 102,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto Condensed",
            fontSize: 72,
            padding: 10,
            letterSpacing: 0,
            color: "#591f4d",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 10,
            hasCyrillic: true,
            textAlign: "right",
            isBold: true,
            isItalic: true
          },
          width: 390.875,
          height: 164,
          position: { left: 584, top: 263.5 },
          text: "конструктор\nдизайна"
        },
        {
          id: 104,
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto Condensed",
            fontSize: 64,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 10,
            hasCyrillic: true,
            textAlign: "left",
            isBold: true,
            isItalic: true
          },
          width: 477.78125,
          height: 148,
          position: { left: 94, top: 139.5 },
          text: "легкий\nв использовании"
        }
      ]
    }
  },
  // 61
  {
    ...linearGradient,
    title: "multiple elements",
    author: "multiple authors",
    thumb: "/thumbs/61.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#7be4da", "#094a6f"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          id: 104,
          type: "object",
          width: 996,
          height: 992,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#7be4da", "#094a6f"],
            itemsNum: 47,
            strokeWidth: 1,
            radius: 100,
            fullyFitInside: true
          },
          position: { left: 6.089743589743589, top: 7.091346153846153 }
        },
        {
          id: 202,
          type: "object",
          width: 548.9983974358975,
          height: 562.9807692307692,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#1bfbe8", "#005482"],
            itemsNum: 8,
            strokeWidth: 4,
            radius: 100,
            fullyFitInside: true
          },
          position: { left: 228.125, top: 219.1105769230769 }
        },
        {
          id: 103,
          type: "object",
          width: 725.6410256410256,
          height: 725.6410256410256,
          showIframe: true,
          adaptation: svgs[1],
          configValues: {
            palette: [{ r: 255, g: 150, b: 101, a: 0 }, "#f90005"]
          },
          position: { left: 135.89743589743588, top: 158.97435897435898 }
        },
        {
          id: 102,
          type: "object",
          width: 500,
          height: 500,
          showIframe: true,
          adaptation: svgs[0],
          configValues: {
            palette: [{ r: 255, g: 150, b: 101, a: 0 }, "#ff0003"]
          },
          position: { left: 35.8974358974359, top: 264.1025641025641 }
        }
      ]
    }
  },
  // 62
  {
    ...gradientWaves,
    thumb: "/thumbs/62.png",
    initState: {
      size: { width: 700, height: 700 },
      configValues: {
        amplituteX: 150,
        amplituteY: 30,
        crazyness: false,
        fill: true,
        lines: 70,
        palette: ["#fde8c8", "#ff7f92"],
        smoothness: 98,
        randomValues: []
      },
      insertedItems: []
    }
  },
  // 63
  {
    ...fiberRibbons,
    thumb: "/thumbs/7.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        backgroundColor: "#324444",
        palette: ["#A2CCB6", "#FCEEB5", "#fff", "#EE786E"],
        numLines: 94,
        fov: 75
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          configValues: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#ffffff",
            fontFamily: "Playfair Display",
            fontSize: 220,
            letterSpacing: 0,
            padding: 10,
            borderWidth: 0
          },
          position: { left: 166.125, top: 132.65625 },
          text: "React\nThree\nFiber",
          width: 600.8125,
          height: 746
        }
      ]
    }
  },
  // 64
  {
    ...strings25,
    thumb: "/thumbs/15.png",
    thumbBackgroundSize: "cover",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#d8f1ff", "#000"],
        sizePercent: [25, 39],
        randomValues: [0.39245358845393374]
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          configValues: {
            fontFamily: "Poppins",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            fontSize: 50,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 347.4672379032258, top: 386.1097110215054 },
          text: "create",
          width: 170.9719422043011,
          height: 59.72782258064516
        },
        {
          id: 101,
          type: "text",
          configValues: {
            fontFamily: "Poppins",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            fontSize: 64,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 344.77906586021504, top: 455.68716397849465 },
          text: "something",
          width: 350.44942876344084,
          height: 75.85685483870968
        },
        {
          id: 102,
          type: "text",
          configValues: {
            fontFamily: "Roboto",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#000",
            isBold: true,
            fontSize: 69,
            padding: 3,
            borderWidth: 0
          },
          position: { left: 346.12315188172045, top: 544.0818212365591 },
          text: "unique",
          width: 232.08585349462365,
          height: 81.23319892473118
        }
      ]
    }
  },
  // 65
  {
    ...linearGradient,
    thumb: "/thumbs/65.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#ffffff", "#fdf9ce"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          id: 200,
          type: "object",
          showIframe: true,
          adaptation: linearGradient,
          width: 943.9421338155514,
          height: 943.9421338155514,
          position: { left: 27.2377938517179, top: 30.571880650994572 },
          configValues: {
            angle: 31,
            direction: "custom_angle",
            palette: ["#ffd2be", "#fdf9ce"]
          }
        },
        {
          id: 201,
          type: "object",
          showIframe: true,
          adaptation: gradientWaves,
          width: 885.7368896925858,
          height: 888.4211121157323,
          position: { left: 54.277802893309214, top: 61.11550632911392 },
          configValues: {
            amplituteX: 150,
            amplituteY: 111,
            fill: false,
            lines: 21,
            palette: ["#cf91f9", "#fb8ea8"],
            randomValues: [0.3417302595458822, 0.08588410509903688],
            smoothness: 67
          }
        },
        {
          type: "object",
          width: 238.69801084990956,
          height: 254.97287522603978,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#fb8ea8", "#fdf9ce"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [1, 114]
          },
          id: 102,
          position: { left: 31.645569620253163, top: 288.4267631103074 }
        },
        {
          type: "object",
          width: 356.2386980108499,
          height: 365.2802893309222,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#fb8ea8", "#fdf9ce"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [1, 114]
          },
          id: 103,
          position: { left: 348.1012658227848, top: 348.1012658227848 }
        },
        {
          type: "object",
          width: 254.97287522603978,
          height: 247.7396021699819,
          showIframe: true,
          adaptation: voronoi,
          configValues: {
            palette: ["#fb8ea8", "#fdf9ce"],
            filled: true,
            lineWidth: 5,
            minMaxRadius: [1, 114]
          },
          id: 104,
          position: { left: 707.9566003616636, top: 715.1898734177215 }
        }
      ]
    }
  },
  // 66
  {
    ...mesh,
    thumb: "/thumbs/66.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        withBackground: true,
        palette: ["#496519", "#ffcf2c"],
        color: "#ffffff",
        distanceBetween: 10,
        randomValues: [0.6312924668231186]
      },
      insertedItems: [
        {
          id: 503,
          type: "object",
          width: 1052.49773960217,
          height: 1220.9821428571427,
          showIframe: true,
          adaptation: mesh,
          configValues: {
            withBackground: false,
            palette: ["#593c2e", "#ffcf2c"],
            color: "#ffffff",
            distanceBetween: 17,
            randomValues: [0.9723743823562034]
          },
          position: { left: 93.26966546112115, top: -113.21767631103073 }
        },
        {
          id: 502,
          type: "object",
          width: 508.9285714285714,
          height: 1009.9174954792043,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#fbcd33", "#fe002c"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: -3.4753616636528024, top: -1.8083182640144664 }
        },
        {
          type: "object",
          width: 408.9907323688969,
          height: 408.9907323688969,
          showIframe: true,
          adaptation: svgs[2],
          configValues: { palette: ["#ffffff", "#fbcd33"] },
          id: 202,
          position: { left: 309.67450271247736, top: 288.79407775768533 }
        },
        {
          type: "object",
          width: 262.997287522604,
          height: 262.997287522604,
          showIframe: true,
          adaptation: svgs[2],
          configValues: {
            palette: ["#ffffff", { r: 251, g: 205, b: 51, a: 0 }]
          },
          id: 203,
          position: { left: 588.2120253164557, top: 183.5160488245931 }
        },
        {
          type: "object",
          width: 234.99660940325495,
          height: 234.99660940325495,
          showIframe: true,
          adaptation: svgs[2],
          configValues: { palette: ["#ffffff", "#fbcd33"] },
          id: 204,
          position: { left: 211.5167269439421, top: 578.0402350813742 }
        }
      ]
    }
  },
  // 67
  {
    ...linearGradient,
    thumb: "/thumbs/67.png",
    title: "multiple elements",
    author: "multiple authors",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#ffffff", "#e0e0e0"],
        direction: "custom_angle",
        angle: 163
      },
      insertedItems: [
        {
          type: "object",
          width: 1074.2451154529308,
          height: 796.0923623445826,
          showIframe: true,
          adaptation: svgs[8],
          configValues: { color: "#000" },
          id: 102,
          position: { left: 0.9591474245115453, top: 144.83126110124334 }
        }
      ]
    }
  },
  // 68
  {
    ...gradientBubbles,
    thumb: "/thumbs/68.png",
    initState: {
      size: { width: 600, height: 600 },
      configValues: {
        palette: ["#eeb1a9", "#feedcf"],
        itemSize: 10,
        itemsNumInRow: 16,
        padding: 50,
        angle: 360,
        itemType: "circle",
        rounding: 20,
        randomValues: []
      },
      insertedItems: [
        {
          type: "object",
          width: 511.54529307282417,
          height: 495.5595026642984,
          showIframe: true,
          adaptation: simpleRipple,
          configValues: {
            palette: ["#eeb1a9", "#eeb1a9"],
            itemsNum: 10,
            strokeWidth: 3,
            radius: 100
          },
          id: 202,
          position: { left: 47.42451154529307, top: 204.08525754884548 }
        },
        {
          id: 301,
          width: 650.088809946714,
          height: 467.8507992895204,
          showIframe: true,
          type: "object",
          position: { left: -71.43650088809946, top: 192.46225577264653 },
          adaptation: blobmaker,
          configValues: {
            angle: 86,
            complexity: 11,
            contrast: 4,
            palette: ["#feedcf", "#eeb1a9"],
            randomValues: [
              0.687925776574627,
              0.5375583491513425,
              0.5988404307482571,
              0.704912023920562,
              0.7946503042888042,
              0.3338446814701215,
              0.4742463712765448,
              0.7740826505264262,
              0.8045870599949538,
              0.21409252151702107
            ]
          }
        },
        {
          configValues: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#dbff18",
            fontFamily: "Rubik Mono One",
            fontSize: 34,
            letterSpacing: 0,
            padding: 10,
            hasCyrillic: true,
            lineHeight: 15
          },
          id: 302,
          type: "text",
          position: { left: 81.52753108348135, top: 360.2131438721137 },
          text: "когда \nвыдуманный \nмир богаче\n",
          width: 337.8496891651865,
          height: 170.24866785079928
        },
        {
          type: "object",
          width: 300,
          height: 407.98734458259327,
          showIframe: true,
          adaptation: svgs[6],
          configValues: { palette: ["#feedcf", "#eeb1a9"] },
          id: 203,
          position: { left: 3.730017761989343, top: -225.39964476021314 }
        },
        {
          type: "object",
          width: 300,
          height: 407.98734458259327,
          showIframe: true,
          adaptation: svgs[6],
          configValues: { palette: ["#feedcf", "#eeb1a9"] },
          id: 204,
          position: { left: 302.13143872113676, top: -227.5310834813499 }
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Faster One",
            fontSize: 39,
            padding: 10,
            letterSpacing: 0,
            color: "#feedcf",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            isBold: false
          },
          id: 205,
          width: 327.4589253996447,
          height: 65.80817051509769,
          position: { left: 141.20781527531082, top: -23.97868561278863 },
          text: "adaptiff.com"
        },
        {
          configValues: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#dbff18",
            fontFamily: "Rubik Mono One",
            fontSize: 34,
            letterSpacing: 4,
            padding: 10,
            hasCyrillic: false,
            lineHeight: 13
          },
          id: 102,
          type: "text",
          position: { left: 78.3303730017762, top: 515.8081705150977 },
          text: "реального",
          width: 316.0690497335701,
          height: 63.676731793960926
        }
      ]
    }
  },
  // 69
  {
    ...linearGradient,
    thumb: "/thumbs/69.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#fddabe", "#fda6f0"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 636.8738898756661,
          height: 713.6056838365897,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#ffffff", "#d7e4fb"],
            direction: "custom_angle",
            angle: 191
          },
          id: 102,
          position: { left: 185.11545293072825, top: 169.76909413854352 }
        },
        {
          type: "object",
          width: 113.17939609236235,
          height: 224.44049733570162,
          showIframe: true,
          adaptation: svgs[9],
          configValues: { palette: ["#ffbef4", "#ffbef4"] },
          id: 103,
          position: { left: 269.52042628774427, top: 68.09946714031972 }
        },
        {
          type: "object",
          width: 63.30373001776199,
          height: 176.48312611012435,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#fedbbd", "#fedbbd"],
            direction: "custom_angle",
            angle: 200
          },
          id: 104,
          position: { left: 267.60213143872113, top: 795.133214920071 }
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Open Sans",
            fontSize: 40,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            isUnderlined: true
          },
          id: 105,
          width: 319.27619893428067,
          height: 67.9196269982238,
          position: { left: 378.8632326820604, top: 915.9857904085259 },
          text: "Neō Wax Bloom"
        },
        {
          type: "object",
          width: 46.03907637655418,
          height: 281.98934280639435,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#ffb9c9", "#ffb9c9"],
            direction: "custom_angle",
            angle: 200
          },
          id: 106,
          position: { left: 866.1101243339255, top: -39.32504440497336 }
        }
      ]
    }
  },
  // 70
  {
    ...linearGradient,
    title: "painted shapes",
    thumb: "/thumbs/70.png",
    objectPack: "Weird Painted Shapes",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#ffffff", "#eee9d6"],
        direction: "custom_angle",
        angle: 201
      },
      insertedItems: [
        {
          type: "object",
          width: 621.1764705882354,
          height: 407.64705882352945,
          showIframe: true,
          adaptation: svgs[41],
          configValues: { color: "#f8c6c5" },
          position: { left: 709.4117647058823, top: 88.23529411764706 },
          id: 302,
          rotation: -368
        },
        {
          type: "object",
          width: 875.2941176470589,
          height: 490.5882352941177,
          showIframe: true,
          adaptation: svgs[46],
          configValues: { color: "#c5dda9" },
          position: { left: 289.4117647058824, top: -217.05882352941177 },
          id: 303,
          rotation: 179
        },
        {
          type: "object",
          width: 291.1764705882353,
          height: 171.1764705882353,
          showIframe: true,
          adaptation: svgs[45],
          configValues: { color: "#ffffff" },
          position: { left: 571.7647058823529, top: -104.11764705882354 },
          id: 304,
          rotation: 26
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Oswald",
            fontSize: 60,
            padding: 34,
            letterSpacing: 0,
            color: "#000000",
            backgroundColor: { r: 238, g: 233, b: 214, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          id: 202,
          width: 928.1801470588235,
          height: 138.58455882352942,
          position: { left: 88.86948529411765, top: 841.40625 },
          text: "Design your every day with art you love."
        },
        {
          type: "object",
          width: 483.5294117647059,
          height: 317.6470588235294,
          showIframe: true,
          adaptation: svgs[46],
          configValues: { color: "#ffffff" },
          position: { left: -158.8235294117647, top: 305.29411764705884 },
          id: 305,
          rotation: -323
        },
        {
          type: "object",
          width: 578.8235294117648,
          height: 660,
          showIframe: true,
          adaptation: svgs[42],
          configValues: { color: "#fccf3d" },
          position: { left: -236.47058823529412, top: -208.23529411764707 },
          id: 402,
          rotation: 0
        },
        {
          type: "object",
          width: 245.29411764705884,
          height: 540,
          showIframe: true,
          adaptation: svgs[48],
          configValues: { color: "#127e56" },
          position: { left: -151.76470588235296, top: -100.58823529411765 },
          id: 306,
          rotation: 0
        },
        {
          type: "object",
          width: 35.294117647058826,
          height: 30,
          showIframe: true,
          adaptation: svgs[50],
          configValues: { color: "#127e56" },
          position: { left: 215.29411764705884, top: 552.3529411764706 },
          id: 307,
          rotation: 0
        },
        {
          type: "object",
          width: 14.117647058823529,
          height: 14.117647058823529,
          showIframe: true,
          adaptation: svgs[51],
          configValues: { color: "#127e56" },
          position: { left: 199.41176470588235, top: 592.9411764705883 },
          id: 308,
          rotation: 0
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Oswald",
            fontSize: 39,
            padding: 20,
            letterSpacing: 0,
            color: "#000000",
            backgroundColor: { r: 238, g: 233, b: 214, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true
          },
          id: 204,
          width: 195.52389705882354,
          height: 85.86397058823529,
          position: { left: 466.81985294117646, top: 345.88235294117646 },
          text: "Inspired by"
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Fira Sans Extra Condensed",
            fontSize: 100,
            padding: 20,
            letterSpacing: 0,
            color: "#127e56",
            backgroundColor: { r: 238, g: 233, b: 214, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true,
            isItalic: true,
            isBold: true
          },
          id: 102,
          width: 354.1544117647059,
          height: 158.21691176470588,
          position: { left: 381.1764705882353, top: 492.3529411764706 },
          text: "society6"
        },
        {
          type: "object",
          width: 245.29411764705884,
          height: 540,
          showIframe: true,
          adaptation: svgs[48],
          configValues: { color: "#ffffff" },
          position: { left: 933.5294117647059, top: 155.29411764705884 },
          id: 103,
          rotation: 0
        },
        {
          type: "object",
          width: 564.7058823529412,
          height: 3.5294117647058822,
          showIframe: true,
          adaptation: svgs[53],
          configValues: {
            palette: [
              { r: 6, g: 6, b: 6, a: 0 },
              { r: 64, g: 64, b: 64, a: 0.64 }
            ],
            angle: 0
          },
          position: { left: 277.05882352941177, top: 776.4705882352941 },
          id: 104,
          rotation: 0
        }
      ]
    }
  },
  // 71
  {
    ...linearGradient,
    thumb: "/thumbs/71.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#6148aa", "#ff9a8b"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 1088.8235294117646,
          height: 1083.5294117647059,
          showIframe: true,
          adaptation: "gradient_waves",
          configValues: {
            palette: ["#ff0099", "#ffe000"],
            lines: 11,
            amplituteX: 46,
            amplituteY: 60,
            smoothness: 4,
            fill: false,
            randomValues: []
          },
          position: { left: -5.294117647058823, top: -1.7647058823529411 },
          id: 102,
          rotation: 0
        },
        {
          type: "object",
          width: 1849.4117647058824,
          height: 587.6470588235294,
          showIframe: true,
          adaptation: svgs[3],
          configValues: { palette: ["#6148aa", "#e7a044"], angle: 0 },
          position: { left: -635.2941176470588, top: -206.47058823529412 },
          id: 103,
          rotation: 0
        },
        {
          type: "object",
          width: 540,
          height: 540,
          showIframe: true,
          adaptation: svgs[1],
          configValues: {
            palette: [{ r: "187", g: "239", b: "209", a: "0.16" }, "#e7a044"],
            angle: 0
          },
          position: { left: -266.47058823529414, top: 321.1764705882353 },
          id: 107,
          rotation: 0
        },
        {
          type: "object",
          width: 254.11764705882354,
          height: 254.11764705882354,
          showIframe: true,
          adaptation: svgs[1],
          configValues: {
            palette: [{ r: "187", g: "239", b: "209", a: "0.16" }, "#e7a044"],
            angle: 0
          },
          position: { left: 977.6470588235294, top: 188.82352941176472 },
          id: 108,
          rotation: 0
        },
        {
          type: "object",
          width: 243.52941176470588,
          height: 236.47058823529412,
          showIframe: true,
          adaptation: svgs[1],
          configValues: {
            palette: [{ r: "187", g: "239", b: "209", a: "0.16" }, "#e7a044"],
            angle: 0
          },
          position: { left: 324.70588235294116, top: 670.5882352941177 },
          id: 109,
          rotation: 0
        },
        {
          type: "object",
          width: 1849.4117647058824,
          height: 587.6470588235294,
          showIframe: true,
          adaptation: svgs[3],
          configValues: { palette: ["#6148aa", "#e7a044"], angle: 0 },
          position: { left: -12.352941176470589, top: 566.4705882352941 },
          id: 104,
          rotation: 0
        },
        {
          type: "object",
          width: 305.29411764705884,
          height: 305.29411764705884,
          showIframe: true,
          adaptation: svgs[1],
          configValues: {
            palette: [{ r: 187, g: 239, b: 209, a: 0 }, "#e7a044"],
            angle: 0
          },
          position: { left: 760.5882352941177, top: 335.29411764705884 },
          id: 110,
          rotation: -157
        }
      ]
    }
  },
  // 72
  radialGradient,
  // 73
  {},
  // 74
  {
    ...linearGradient,
    id: 74,
    title: "Round shapes",
    author: "Abstract Geometry",
    thumb: "/thumbs/74.png?1",
    objectPack: "Round Shapes",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#3d0081", "#3d0081"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 431.61634103019543,
          height: 431.61634103019543,
          showIframe: true,
          adaptation: svgs[55],
          configValues: { palette: ["#E5CB23", "#3d0081"], angle: 0 },
          position: { left: 298.2948490230906, top: -42.202486678507995 },
          id: 402,
          rotation: 0
        },
        {
          type: "object",
          width: 174.56483126110126,
          height: 224.44049733570162,
          showIframe: true,
          adaptation: svgs[56],
          configValues: { palette: ["#FF0097", "#3d0081"], angle: 0 },
          position: { left: 426.8206039076377, top: -3.8365896980461813 },
          id: 404,
          rotation: 0
        },
        {
          type: "object",
          width: 531.3676731793961,
          height: 521.7761989342807,
          showIframe: true,
          adaptation: svgs[61],
          configValues: { palette: ["#3AD5FA", "#3F5CAB"], angle: 0 },
          position: { left: 628.2415630550622, top: 343.3747779751332 },
          id: 403,
          rotation: 0
        },
        {
          type: "object",
          width: 326.1101243339254,
          height: 180.31971580817054,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#E5CB23", "#3d0081"], angle: 0 },
          position: { left: 718.4014209591475, top: 604.2628774422736 },
          id: 405,
          rotation: 0
        },
        {
          type: "object",
          width: 406.6785079928952,
          height: 383.65896980461815,
          showIframe: true,
          adaptation: svgs[59],
          configValues: { palette: ["#3AD5FA", "#3F5CAB"], angle: 0 },
          position: { left: 304.0497335701599, top: 847.8863232682061 },
          id: 407,
          rotation: 0
        },
        {
          type: "object",
          width: 182.23801065719363,
          height: 86.32326820603909,
          showIframe: true,
          adaptation: svgs[60],
          configValues: { palette: ["#FF0097", "#3d0081"], angle: 0 },
          position: { left: 407.6376554174068, top: 962.9840142095916 },
          id: 408,
          rotation: 0
        },
        {
          type: "object",
          width: 93.99644760213144,
          height: 174.56483126110126,
          showIframe: true,
          adaptation: svgs[58],
          configValues: {
            palette: ["#3AD5FA", "#3F5CAB", "#3d0081"],
            angle: 0
          },
          position: { left: 104.54706927175845, top: 151.54529307282417 },
          id: 411,
          rotation: 0
        },
        {
          type: "object",
          width: 218.68561278863234,
          height: 42.202486678507995,
          showIframe: true,
          adaptation: svgs[53],
          configValues: { palette: ["#3d0081", "#FF0097"], angle: 0 },
          position: { left: -18.22380106571936, top: 452.7175843694494 },
          id: 302,
          rotation: 0
        },
        {
          type: "object",
          width: 174.56483126110126,
          height: 42.202486678507995,
          showIframe: true,
          adaptation: svgs[53],
          configValues: { palette: ["#3d0081", "#FF0097"], angle: 0 },
          position: { left: 808.5612788632327, top: 516.0213143872114 },
          id: 303,
          rotation: -180
        },
        {
          type: "object",
          width: 172.64653641207818,
          height: 36.44760213143872,
          showIframe: true,
          adaptation: svgs[53],
          configValues: { palette: ["#3d0081", "#E5CB23"], angle: 0 },
          position: { left: 825.8259325044405, top: 195.66607460035524 },
          id: 304,
          rotation: -90
        },
        {
          type: "object",
          width: 329.9467140319716,
          height: 264.72468916518653,
          showIframe: true,
          adaptation: svgs[57],
          configValues: { palette: ["#E5CB23", "#3d0081"], angle: 0 },
          position: { left: -29.733570159857905, top: 577.4067495559503 },
          id: 406,
          rotation: 0
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto",
            fontSize: 68,
            padding: 100,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 1,
            isInline: false,
            lineHeight: 16
          },
          id: 102,
          width: 589.9955595026644,
          height: 524.2340142095915,
          position: { left: 236.9094138543517, top: 311.72291296625224 },
          text: "NICE WAY\nTO SAY\nSOMETHING"
        }
      ]
    }
  },
  // 75
  {
    ...linearGradient,
    thumb: "/thumbs/75.png",
    title: "Round shapes",
    author: "Abstract Geometry",
    objectPack: "Round Shapes",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#d7b0c3", "#7221b5"],
        direction: "custom_angle",
        angle: 166
      },
      insertedItems: [
        {
          type: "object",
          width: 431.61634103019543,
          height: 431.61634103019543,
          showIframe: true,
          adaptation: svgs[55],
          configValues: { palette: ["#73d1f9", "#3331e9"], angle: 0 },
          position: { left: 290.62166962699825, top: 1.9182948490230907 },
          id: 502,
          rotation: 0
        },
        {
          type: "object",
          width: 544.7957371225577,
          height: 521.7761989342807,
          showIframe: true,
          adaptation: svgs[61],
          configValues: { palette: ["#3722e7", "#a97fcb"], angle: 0 },
          position: { left: 593.7122557726466, top: 395.1687388987567 },
          id: 503,
          rotation: 0
        },
        {
          type: "object",
          width: 174.56483126110126,
          height: 224.44049733570162,
          showIframe: true,
          adaptation: svgs[56],
          configValues: { palette: ["#a97fcb", "#3722e7"], angle: 0 },
          position: { left: 839.2539964476022, top: 55.630550621669634 },
          id: 504,
          rotation: 90
        },
        {
          type: "object",
          width: 326.1101243339254,
          height: 174.56483126110126,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#b185ca", "#73d1f9"], angle: 0 },
          position: { left: 697.3001776198935, top: 650.3019538188278 },
          id: 505,
          rotation: 0
        },
        {
          type: "object",
          width: 329.9467140319716,
          height: 264.72468916518653,
          showIframe: true,
          adaptation: svgs[57],
          configValues: { palette: ["#b185ca", "#3331e9"], angle: 0 },
          position: { left: -2.877442273534636, top: 579.3250444049734 },
          id: 506,
          rotation: 0
        },
        {
          type: "object",
          width: 420.10657193605687,
          height: 383.65896980461815,
          showIframe: true,
          adaptation: svgs[59],
          configValues: { palette: ["#3722e7", "#a97fcb"], angle: 0 },
          position: { left: 277.1936056838366, top: 817.1936056838366 },
          id: 507,
          rotation: 0
        },
        {
          type: "object",
          width: 182.23801065719363,
          height: 86.32326820603909,
          showIframe: true,
          adaptation: svgs[60],
          configValues: { palette: ["#b185ca", "#73d1f9"], angle: 0 },
          position: { left: 407.6376554174068, top: 949.5559502664299 },
          id: 508,
          rotation: 0
        },
        {
          type: "object",
          width: 93.99644760213144,
          height: 174.56483126110126,
          showIframe: true,
          adaptation: svgs[58],
          configValues: { palette: ["#b185ca", "#3331e9"], angle: 0 },
          position: { left: 104.54706927175845, top: 151.54529307282417 },
          id: 511,
          rotation: 0
        },
        {
          type: "object",
          width: 218.68561278863234,
          height: 42.202486678507995,
          showIframe: true,
          adaptation: svgs[53],
          configValues: {
            palette: ["#73d1f9", { r: 51, g: 49, b: 233, a: 0 }],
            angle: 0
          },
          position: { left: 23.978685612788635, top: 452.7175843694494 },
          id: 402,
          rotation: 180
        },
        {
          type: "object",
          width: 174.56483126110126,
          height: 42.202486678507995,
          showIframe: true,
          adaptation: svgs[53],
          configValues: {
            palette: ["#73d1f9", { r: 114, g: 33, b: 181, a: 0 }],
            angle: 0
          },
          position: { left: 781.7051509769095, top: 554.3872113676732 },
          id: 403,
          rotation: -180
        },
        {
          type: "object",
          width: 172.64653641207818,
          height: 36.44760213143872,
          showIframe: true,
          adaptation: svgs[53],
          configValues: { palette: ["#b185ca", "#73d1f9"], angle: 0 },
          position: { left: 430.65719360568386, top: 201.42095914742453 },
          id: 404,
          rotation: -90
        }
      ]
    }
  },
  // 76
  {
    ...linearGradient,
    thumb: "/thumbs/76.png",
    title: "Round shapes",
    author: "Abstract Geometry",
    objectPack: "Round Shapes",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#10fdd4", "#0077d0"],
        direction: "custom_angle",
        angle: 94
      },
      insertedItems: [
        {
          type: "object",
          width: 366.39431616341034,
          height: 539.0408525754885,
          showIframe: true,
          adaptation: svgs[63],
          configValues: { palette: ["#540CC2", "#07f3fe"], angle: 0 },
          position: { left: 353.92539964476026, top: -239.78685612788635 },
          id: 102,
          rotation: 0
        },
        {
          type: "object",
          width: 366.39431616341034,
          height: 539.0408525754885,
          showIframe: true,
          adaptation: svgs[63],
          configValues: { palette: ["#07f3fe", "#540CC2"], angle: 0 },
          position: { left: -96.87388987566608, top: 184.1563055062167 },
          id: 103,
          rotation: -90
        },
        {
          type: "object",
          width: 475.7371225577265,
          height: 508.348134991119,
          showIframe: true,
          adaptation: svgs[64],
          configValues: { palette: ["#540CC2", "#07f3fe"], angle: 0 },
          position: { left: 557.2646536412078, top: 565.8969804618117 },
          id: 104,
          rotation: -89
        },
        {
          type: "object",
          width: 539.0408525754885,
          height: 268.5612788632327,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#07f3fe", "#540CC2"], angle: 0 },
          position: { left: 775.9502664298402, top: 157.30017761989345 },
          id: 105,
          rotation: 180
        },
        {
          type: "object",
          width: 368.3126110124334,
          height: 418.1882770870338,
          showIframe: true,
          adaptation: svgs[55],
          configValues: { palette: ["#07f3fe", "#540CC2"], angle: 0 },
          position: { left: 66.18117229129663, top: 734.7069271758437 },
          id: 106,
          rotation: 180
        }
      ]
    }
  },
  // 77
  {
    ...linearGradient,
    thumb: "/thumbs/77.png",
    title: "Round shapes",
    author: "Abstract Geometry",
    objectPack: "Round Shapes",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#10fdd4", "#0077d0"],
        direction: "custom_angle",
        angle: 94
      },
      insertedItems: [
        {
          type: "object",
          width: 713.6056838365897,
          height: 709.7690941385436,
          showIframe: true,
          adaptation: svgs[0],
          configValues: { palette: ["#ffffff", "#4facfe"], angle: 0 },
          position: { left: 177.4422735346359, top: 157.30017761989345 },
          id: 102,
          rotation: 0
        },
        {
          type: "object",
          width: 366.39431616341034,
          height: 539.0408525754885,
          showIframe: true,
          adaptation: svgs[63],
          configValues: { palette: ["#540CC2", "#07f3fe"], angle: 0 },
          position: { left: 338.57904085257553, top: -209.0941385435169 },
          id: 202,
          rotation: 0
        },
        {
          type: "object",
          width: 366.39431616341034,
          height: 539.0408525754885,
          showIframe: true,
          adaptation: svgs[63],
          configValues: { palette: ["#07f3fe", "#540CC2"], angle: 0 },
          position: { left: -96.87388987566608, top: 184.1563055062167 },
          id: 203,
          rotation: -90
        },
        {
          type: "object",
          width: 475.7371225577265,
          height: 508.348134991119,
          showIframe: true,
          adaptation: svgs[64],
          configValues: { palette: ["#540CC2", "#07f3fe"], angle: 0 },
          position: { left: 553.4280639431616, top: 477.65541740674956 },
          id: 204,
          rotation: -89
        },
        {
          type: "object",
          width: 539.0408525754885,
          height: 268.5612788632327,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#07f3fe", "#540CC2"], angle: 0 },
          position: { left: 714.5648312611013, top: 166.8916518650089 },
          id: 205,
          rotation: 180
        },
        {
          type: "object",
          width: 333.7833037300178,
          height: 414.3516873889876,
          showIframe: true,
          adaptation: svgs[55],
          configValues: { palette: ["#07f3fe", "#540CC2"], angle: 0 },
          position: { left: 148.66785079928954, top: 667.5666074600356 },
          id: 206,
          rotation: 180
        }
      ]
    }
  },
  // 78
  {
    ...linearGradient,
    thumb: "/thumbs/78.png",
    title: "Round shapes",
    author: "Abstract Geometry",
    objectPack: "Round Shapes",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#16143c", "#16143c"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 312.3529411764706,
          height: 165.88235294117646,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#8262ab", "#ae88bb"], angle: 0 },
          position: { left: 519.7058823529412, top: -2.6470588235294117 },
          id: 202,
          rotation: -38
        },
        {
          type: "object",
          width: 287.6470588235294,
          height: 158.8235294117647,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#8262ab", "#ae88bb"], angle: 0 },
          position: { left: 752.6470588235294, top: 892.0588235294118 },
          id: 203,
          rotation: 43
        },
        {
          type: "object",
          width: 310.5882352941177,
          height: 141.1764705882353,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#8262ab", "#ae88bb"], angle: 0 },
          position: { left: 39.705882352941174, top: 826.7647058823529 },
          id: 204,
          rotation: 226
        },
        {
          type: "object",
          width: 227.64705882352942,
          height: 123.52941176470588,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#8262ab", "#ae88bb"], angle: 0 },
          position: { left: 293.8235294117647, top: 772.0588235294118 },
          id: 205,
          rotation: 410
        },
        {
          type: "object",
          width: 462.3529411764706,
          height: 240,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#8262ab", "#ae88bb"], angle: 0 },
          position: { left: -2.6470588235294117, top: 82.05882352941177 },
          id: 206,
          rotation: 406
        },
        {
          type: "object",
          width: 199.41176470588235,
          height: 95.29411764705883,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#8262ab", "#ae88bb"], angle: 0 },
          position: { left: 535.5882352941177, top: 270.88235294117646 },
          id: 207,
          rotation: 137
        },
        {
          type: "object",
          width: 462.3529411764706,
          height: 222.35294117647058,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#8262ab", "#ae88bb"], angle: 0 },
          position: { left: 849.7058823529412, top: 426.1764705882353 },
          id: 208,
          rotation: 495
        },
        {
          type: "object",
          width: 352.94117647058823,
          height: 155.29411764705884,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#8262ab", "#ae88bb"], angle: 0 },
          position: { left: -136.76470588235296, top: 480.88235294117646 },
          id: 209,
          rotation: 134
        },
        {
          type: "object",
          width: 199.41176470588235,
          height: 105.88235294117648,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#8262ab", "#ae88bb"], angle: 0 },
          position: { left: 397.94117647058823, top: 996.1764705882354 },
          id: 210,
          rotation: 134
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Poppins",
            fontSize: 89,
            padding: 10,
            letterSpacing: 0,
            color: "#fdfdfd",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            isBold: true
          },
          id: 211,
          width: 542.7297794117648,
          height: 125.84558823529412,
          position: { left: 271.0477941176471, top: 509.09007352941177 },
          text: "Banner text"
        },
        {
          type: "object",
          width: 199.41176470588235,
          height: 95.29411764705883,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#8262ab", "#ae88bb"], angle: 0 },
          position: { left: 793.2352941176471, top: 221.47058823529412 },
          id: 102,
          rotation: 403
        },
        {
          type: "object",
          width: 130.58823529411765,
          height: 63.529411764705884,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#8262ab", "#ae88bb"], angle: 0 },
          position: { left: 615, top: 731.4705882352941 },
          id: 103,
          rotation: 232
        }
      ]
    }
  },
  // 79
  {
    ...linearGradient,
    thumb: "/thumbs/79.png",
    title: "Round shapes",
    author: "Abstract Geometry",
    objectPack: "Round Shapes",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#efd7e7", "#efd7e7"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 524.1176470588235,
          height: 540,
          showIframe: true,
          adaptation: svgs[61],
          configValues: {
            palette: ["#edbdd7", "#f590bb", "#f7c1bf", "#c8ddd2"],
            angle: 0
          },
          position: { left: 489.7058823529412, top: 347.64705882352945 },
          id: 402,
          rotation: 0
        },
        {
          type: "object",
          width: 252.3529411764706,
          height: 247.05882352941177,
          showIframe: true,
          adaptation: svgs[59],
          configValues: { palette: ["#89b4eb", "#edbdd7"], angle: 0 },
          position: { left: 108.52941176470588, top: 435.88235294117646 },
          id: 302,
          rotation: 180
        },
        {
          type: "object",
          width: 270,
          height: 268.2352941176471,
          showIframe: true,
          adaptation: svgs[59],
          configValues: { palette: ["#f7c1bf", "#edbdd7"], angle: 0 },
          position: { left: 622.0588235294118, top: 494.11764705882354 },
          id: 105,
          rotation: 0
        },
        {
          type: "object",
          width: 252.3529411764706,
          height: 247.05882352941177,
          showIframe: true,
          adaptation: svgs[59],
          configValues: { palette: ["#c8ddd2", "#f7c1bf"], angle: 0 },
          position: { left: 300.88235294117646, top: 785.2941176470589 },
          id: 106,
          rotation: 0
        },
        {
          type: "object",
          width: 270,
          height: 540,
          showIframe: true,
          adaptation: svgs[58],
          configValues: {
            palette: ["#89b4eb", "#edbdd7", "#edbdd7"],
            angle: 0
          },
          position: { left: -90.88235294117648, top: 690 },
          id: 107,
          rotation: 0
        },
        {
          type: "object",
          width: 540,
          height: 540,
          showIframe: true,
          adaptation: svgs[0],
          configValues: { palette: ["#f7c1bf", "#edbdd7"], angle: 0 },
          position: { left: 106.76470588235294, top: -220.58823529411765 },
          id: 108,
          rotation: 0
        },
        {
          type: "object",
          width: 540,
          height: 268.2352941176471,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#89b4eb", "#edbdd7"], angle: 0 },
          position: { left: 685.5882352941177, top: -63.529411764705884 },
          id: 109,
          rotation: 64
        }
      ]
    }
  },
  // 80
  {
    ...linearGradient,
    thumb: "/thumbs/80.png",
    title: "Round shapes",
    author: "Abstract Geometry",
    objectPack: "Round Shapes",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["black", "black"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 245.29411764705884,
          height: 345.88235294117646,
          showIframe: true,
          adaptation: svgs[63],
          configValues: { palette: ["#ff1c1c", "#1633cc"], angle: 0 },
          position: { left: -55.588235294117645, top: 252.3529411764706 },
          id: 202,
          rotation: -90
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Montserrat",
            fontSize: 66,
            padding: 100,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
            borderWidth: 1,
            isInline: false,
            lineHeight: 15,
            hasCyrillic: true
          },
          id: 102,
          width: 577.3621323529412,
          height: 597.2426470588235,
          position: { left: 266.47058823529414, top: 238.23529411764707 },
          text: "лик \nлуны \nбыл скрыт \nтенью"
        },
        {
          type: "object",
          width: 319.4117647058824,
          height: 330,
          showIframe: true,
          adaptation: svgs[61],
          configValues: { palette: ["#ff1c1c", "#1633cc"], angle: 0 },
          position: { left: 53.82352941176471, top: 665.2941176470589 },
          id: 203,
          rotation: 0
        },
        {
          type: "object",
          width: 245.29411764705884,
          height: 345.88235294117646,
          showIframe: true,
          adaptation: svgs[63],
          configValues: { palette: ["#1633cc", "#ff1c1c"], angle: 0 },
          position: { left: 424.4117647058824, top: -52.94117647058824 },
          id: 204,
          rotation: 0
        },
        {
          type: "object",
          width: 315.88235294117646,
          height: 317.6470588235294,
          showIframe: true,
          adaptation: svgs[64],
          configValues: { palette: ["#ff1c1c", "#1633cc"], angle: 0 },
          position: { left: 685.5882352941177, top: 679.4117647058823 },
          id: 205,
          rotation: -90
        },
        {
          type: "object",
          width: 128.8235294117647,
          height: 31.764705882352942,
          showIframe: true,
          adaptation: svgs[53],
          configValues: { palette: ["#1633cc", "#ff1c1c"], angle: 0 },
          position: { left: 470.29411764705884, top: 1032.3529411764707 },
          id: 208,
          rotation: -90
        },
        {
          type: "object",
          width: 125.29411764705883,
          height: 28.235294117647058,
          showIframe: true,
          adaptation: svgs[53],
          configValues: { palette: ["#1633cc", "#ff1c1c"], angle: 0 },
          position: { left: 62.64705882352941, top: 970.5882352941177 },
          id: 209,
          rotation: 180
        },
        {
          type: "object",
          width: 250.58823529411765,
          height: 31.764705882352942,
          showIframe: true,
          adaptation: svgs[53],
          configValues: { palette: ["#1633cc", "#ff1c1c"], angle: 0 },
          position: { left: 992.6470588235294, top: 554.1176470588235 },
          id: 210,
          rotation: 0
        },
        {
          type: "object",
          width: 128.8235294117647,
          height: 31.764705882352942,
          showIframe: true,
          adaptation: svgs[53],
          configValues: { palette: ["#1633cc", "#ff1c1c"], angle: 0 },
          position: { left: 105, top: 1.7647058823529411 },
          id: 211,
          rotation: -91
        },
        {
          type: "object",
          width: 300,
          height: 142.94117647058823,
          showIframe: true,
          adaptation: svgs[62],
          configValues: { palette: ["#ff1c1c", "#1633cc"], angle: 0 },
          position: { left: 802.0588235294118, top: 176.47058823529412 },
          id: 206,
          rotation: 180
        },
        {
          type: "object",
          width: 128.8235294117647,
          height: 31.764705882352942,
          showIframe: true,
          adaptation: svgs[53],
          configValues: { palette: ["#1633cc", "#ff1c1c"], angle: 0 },
          position: { left: 802.0588235294118, top: 416.47058823529414 },
          id: 207,
          rotation: 0
        }
      ]
    }
  },
  // 81
  {
    ...linearGradient,
    thumb: "/thumbs/81.png",
    title: "Round shapes",
    author: "Abstract Geometry",
    objectPack: "Round Shapes",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#081f3c", "#527794"],
        direction: "custom_angle",
        angle: 90
      },
      insertedItems: [
        {
          type: "object",
          width: 287.6470588235294,
          height: 296.47058823529414,
          showIframe: true,
          adaptation: svgs[61],
          configValues: { palette: ["#527794", "#081f3c"], angle: 0 },
          position: { left: 99.70588235294117, top: 81.17647058823529 },
          id: 202,
          rotation: 90
        },
        {
          type: "object",
          width: 259.4117647058824,
          height: 328.2352941176471,
          showIframe: true,
          adaptation: svgs[63],
          configValues: { palette: ["#081f3c", "#527794"], angle: 0 },
          position: { left: 473.8235294117647, top: -37.05882352941177 },
          id: 203,
          rotation: 0
        },
        {
          type: "object",
          width: 264.70588235294116,
          height: 375.88235294117646,
          showIframe: true,
          adaptation: svgs[63],
          configValues: { palette: ["#081f3c", "#527794"], angle: 0 },
          position: { left: 295.5882352941177, top: 760.5882352941177 },
          id: 204,
          rotation: 180
        },
        {
          type: "object",
          width: 287.6470588235294,
          height: 296.47058823529414,
          showIframe: true,
          adaptation: svgs[61],
          configValues: { palette: ["#527794", "#081f3c"], angle: 0 },
          position: { left: 759.7058823529412, top: 600 },
          id: 205,
          rotation: 360
        },
        {
          type: "object",
          width: 277.05882352941177,
          height: 391.7647058823529,
          showIframe: true,
          adaptation: svgs[63],
          configValues: { palette: ["#527794", "#527794"], angle: 0 },
          position: { left: -131.47058823529412, top: 566.4705882352941 },
          id: 209,
          rotation: 269
        },
        {
          type: "object",
          width: 210,
          height: 26.47058823529412,
          showIframe: true,
          adaptation: svgs[53],
          configValues: { palette: ["#081f3c", "#527794"], angle: 0 },
          position: { left: 669.7058823529412, top: 870 },
          id: 210,
          rotation: 0
        },
        {
          type: "object",
          width: 210,
          height: 26.47058823529412,
          showIframe: true,
          adaptation: svgs[53],
          configValues: { palette: ["#081f3c", "#527794"], angle: 0 },
          position: { left: 0.8823529411764706, top: 86.47058823529412 },
          id: 211,
          rotation: 90
        },
        {
          type: "object",
          width: 210,
          height: 26.47058823529412,
          showIframe: true,
          adaptation: svgs[53],
          configValues: { palette: ["#081f3c", "#527794"], angle: 0 },
          position: { left: 810.8823529411765, top: 275.29411764705884 },
          id: 212,
          rotation: 0
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto",
            fontSize: 57,
            padding: 44,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 1,
            isInline: false,
            lineHeight: 17,
            hasCyrillic: true
          },
          id: 102,
          width: 612.7941176470588,
          height: 375.8272058823529,
          position: { left: 252.3529411764706, top: 375.88235294117646 },
          text: "Серебряный туман \nзатопил палубу \nкорабля"
        }
      ]
    }
  },
  // 82
  {
    ...linearGradient,
    thumb: "/thumbs/82.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#ffffff", "#ecfffe"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 1032.0426287744228,
          height: 491.0834813499112,
          showIframe: true,
          adaptation: svgs[52],
          configValues: {
            palette: ["#9cfff1", { r: 255, g: 255, b: 255, a: 0 }],
            angle: 0
          },
          position: { left: -155.38188277087036, top: 314.6003552397869 },
          id: 203,
          rotation: 88
        },
        {
          type: "object",
          width: 548.6323268206039,
          height: 375.98579040852576,
          showIframe: true,
          adaptation: svgs[52],
          configValues: {
            palette: ["#9ce5ff", { r: 255, g: 255, b: 255, a: 0 }],
            angle: 0
          },
          position: { left: 399.0053285968029, top: -34.52930728241563 },
          id: 205,
          rotation: 229
        },
        {
          type: "object",
          width: 427.77975133214926,
          height: 441.20781527531085,
          showIframe: true,
          adaptation: svgs[52],
          configValues: {
            palette: ["#7aa3fe", { r: 255, g: 255, b: 255, a: 0 }],
            angle: 0
          },
          position: { left: 249.3783303730018, top: 109.34280639431617 },
          id: 202,
          rotation: 446
        },
        {
          type: "object",
          width: 510.2664298401421,
          height: 395.1687388987567,
          showIframe: true,
          adaptation: svgs[52],
          configValues: {
            palette: ["#27e1e1", { r: 255, g: 255, b: 255, a: 0 }],
            angle: 0
          },
          position: { left: 153.46358792184725, top: 132.36234458259327 },
          id: 204,
          rotation: 173
        },
        {
          type: "object",
          width: 170.72824156305506,
          height: 93.99644760213144,
          showIframe: true,
          adaptation: svgs[52],
          configValues: {
            palette: ["#33d3d3", { r: 51, g: 211, b: 211, a: 0 }],
            angle: 0
          },
          position: { left: 874.7424511545294, top: 705.9325044404974 },
          id: 208,
          rotation: 301
        },
        {
          type: "object",
          width: 178.40142095914743,
          height: 65.22202486678509,
          showIframe: true,
          adaptation: svgs[52],
          configValues: {
            palette: [
              { r: 122, g: 163, b: 254, a: 0.76 },
              { r: 122, g: 163, b: 254, a: 0 }
            ],
            angle: 0
          },
          position: { left: 801.8472468916519, top: 721.2788632326822 },
          id: 207,
          rotation: 635
        },
        {
          type: "object",
          width: 92.07815275310836,
          height: 21.101243339253998,
          showIframe: true,
          adaptation: svgs[52],
          configValues: { palette: ["#9cfff1", "#9cfff1"], angle: 0 },
          position: { left: 63.30373001776199, top: 132.36234458259327 },
          id: 209,
          rotation: 63
        },
        {
          type: "object",
          width: 92.07815275310836,
          height: 21.101243339253998,
          showIframe: true,
          adaptation: svgs[52],
          configValues: { palette: ["#9ce5ff", "#9cfff1"], angle: 0 },
          position: { left: 913.1083481349912, top: 117.01598579040854 },
          id: 210,
          rotation: 111
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Prata",
            fontSize: 76,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            hasCyrillic: true,
            isBold: false
          },
          id: 102,
          width: 960.4962255772647,
          height: 290.4418294849023,
          position: { left: 66.18117229129663, top: 695.3818827708703 },
          text: "Едва осознав, \nчто происходит, \nмы оторвались от земли"
        },
        {
          type: "object",
          width: 46.03907637655418,
          height: 21.101243339253998,
          showIframe: true,
          adaptation: svgs[52],
          configValues: {
            palette: [
              { r: 156, g: 229, b: 255, a: 0.56 },
              { r: 156, g: 229, b: 255, a: 0 }
            ],
            angle: 0
          },
          position: { left: 671.4031971580818, top: 494.92007104795744 },
          id: 103,
          rotation: 102
        }
      ]
    }
  },
  // 83
  {
    ...linearGradient,
    thumb: "/thumbs/83.png",
    title: "Glitchy elements",
    author: "Anna Taran",
    objectPack: "Glitchy",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#371b41", "#722345"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 539.0408525754885,
          height: 364.47602131438725,
          showIframe: true,
          adaptation: svgs[73],
          configValues: { palette: ["#722345", "#FF2200"], angle: 0 },
          position: { left: -5.754884547069272, top: 732.7886323268207 },
          id: 202,
          rotation: 0
        },
        {
          type: "object",
          width: 228.2770870337478,
          height: 464.227353463588,
          showIframe: true,
          adaptation: svgs[68],
          configValues: { palette: ["#be1024", "#be1024"], angle: 0 },
          position: { left: 209.0941385435169, top: 627.2824156305506 },
          id: 203,
          rotation: 0
        },
        {
          type: "object",
          width: 399.0053285968029,
          height: 366.39431616341034,
          showIframe: true,
          adaptation: svgs[76],
          configValues: { palette: ["#FF2200", "#722345"], angle: 0 },
          position: { left: -9.591474245115453, top: -24.93783303730018 },
          id: 204,
          rotation: 0
        },
        {
          type: "object",
          width: 199.50266429840144,
          height: 408.5968028419183,
          showIframe: true,
          adaptation: svgs[71],
          configValues: {
            palette: [{ r: 65, g: 32, b: 59, a: 0 }, "#be1024"],
            angle: 0
          },
          position: { left: 527.5310834813499, top: 679.0763765541741 },
          id: 205,
          rotation: 0
        },
        {
          type: "object",
          width: 249.3783303730018,
          height: 354.8845470692718,
          showIframe: true,
          adaptation: svgs[77],
          configValues: {
            palette: [{ r: "122", g: "28", b: "67", a: "0" }, "#FF2200"],
            angle: 0
          },
          position: { left: 372.1492007104796, top: 151.54529307282417 },
          id: 207,
          rotation: 180
        },
        {
          type: "object",
          width: 539.0408525754885,
          height: 358.72113676731794,
          showIframe: true,
          adaptation: svgs[74],
          configValues: {
            palette: [{ r: 122, g: 28, b: 67, a: 0 }, "#FF2200"],
            angle: 0
          },
          position: { left: 544.7957371225577, top: -9.591474245115453 },
          id: 206,
          rotation: 180
        },
        {
          type: "object",
          width: 239.78685612788635,
          height: 539.0408525754885,
          showIframe: true,
          adaptation: svgs[78],
          configValues: {
            palette: ["#FF2200", { r: 122, g: 28, b: 67, a: 0 }],
            angle: 0
          },
          position: { left: 220.60390763765542, top: -3.8365896980461813 },
          id: 208,
          rotation: 0
        },
        {
          type: "object",
          width: 381.74067495559507,
          height: 395.1687388987567,
          showIframe: true,
          adaptation: svgs[79],
          configValues: { palette: ["#722345", "#FF2200"], angle: 0 },
          position: { left: 725.1154529307283, top: 732.7886323268207 },
          id: 210,
          rotation: 0
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto Condensed",
            fontSize: 120,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            isBold: true
          },
          id: 102,
          width: 988.4014209591475,
          height: 163.83436944937833,
          position: { left: 46.99822380106572, top: 465.1865008880995 },
          text: "LET'S  GET  SPOOKY"
        }
      ]
    }
  },
  // 84
  {
    ...blank,
    thumb: "/thumbs/84.png",
    title: "subtle waves",
    id: 84,
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: { transparent: false, color: "#ffffff" },
      insertedItems: [
        {
          type: "object",
          width: 999.4316163410302,
          height: 999.4316163410302,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#efefef", "#f5cea1"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: 37.40674955595027, top: 40.284191829484904 },
          id: 202,
          rotation: 0
        },
        {
          type: "object",
          width: 995.5950266429841,
          height: 425.8614564831261,
          showIframe: true,
          adaptation: svgs[84],
          configValues: {
            palette: [{ r: 245, g: 206, b: 161, a: 0.02 }, "#eb8997"],
            angle: 0
          },
          position: { left: 41.24333925399645, top: 468.06394316163414 },
          id: 204,
          rotation: 0
        },
        {
          type: "object",
          width: 999.4316163410302,
          height: 508.348134991119,
          showIframe: true,
          adaptation: svgs[88],
          configValues: { palette: ["#f5cea1", "#eb8997"], angle: 0 },
          position: { left: 37.40674955595027, top: 531.3676731793961 },
          id: 203,
          rotation: 0
        },
        {
          type: "object",
          width: 383.65896980461815,
          height: 7.673179396092363,
          showIframe: true,
          adaptation: svgs[53],
          configValues: {
            palette: ["#ffffff", { r: 237, g: 234, b: 156, a: 0 }],
            angle: 0
          },
          position: { left: 177.4422735346359, top: 281.98934280639435 },
          id: 102,
          rotation: -48
        },
        {
          type: "object",
          width: 243.62344582593252,
          height: 7.673179396092363,
          showIframe: true,
          adaptation: svgs[53],
          configValues: {
            palette: ["#fdfdfd", { r: 237, g: 234, b: 156, a: 0 }],
            angle: 0
          },
          position: { left: 810.4795737122558, top: 151.54529307282417 },
          id: 103,
          rotation: -48
        },
        {
          type: "object",
          width: 166.8916518650089,
          height: 7.673179396092363,
          showIframe: true,
          adaptation: svgs[53],
          configValues: {
            palette: ["#ffffff", { r: 237, g: 234, b: 156, a: 0 }],
            angle: 0
          },
          position: { left: 474.77797513321497, top: 189.911190053286 },
          id: 104,
          rotation: -48
        }
      ]
    }
  },
  // 85
  {
    ...linearGradient,
    thumb: "/thumbs/85.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#ed2639", "#fb8714"],
        direction: "right",
        angle: 200
      },
      insertedItems: [
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Oswald",
            fontSize: 120,
            padding: 130,
            letterSpacing: 0,
            color: "#fdfdfd",
            backgroundColor: "#000000",
            borderWidth: 0,
            isInline: false,
            lineHeight: 10,
            textAlign: "center",
            isBold: true
          },
          id: 202,
          width: 675.8992007104796,
          height: 616.7917406749557,
          position: { left: 198.5435168738899, top: 254.1740674955595 },
          text: "THE\nATLANTIC\nFESTIVAL"
        },
        {
          type: "object",
          width: 399.0053285968029,
          height: 558.2238010657194,
          showIframe: true,
          adaptation: svgs[63],
          configValues: {
            palette: ["#ffffff", { r: 255, g: 255, b: 255, a: 0.16 }],
            angle: 0
          },
          position: { left: 696.3410301953819, top: -397.0870337477798 },
          id: 102,
          rotation: 33
        },
        {
          type: "object",
          width: 539.0408525754885,
          height: 462.3090586145649,
          showIframe: true,
          adaptation: svgs[57],
          configValues: {
            palette: [{ r: 253, g: 253, b: 253, a: 0.13 }, "#ffffff"],
            angle: 0
          },
          position: { left: -310.7637655417407, top: -187.99289520426288 },
          id: 103,
          rotation: 123
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto",
            fontSize: 36,
            padding: 10,
            letterSpacing: 4,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            isBold: true
          },
          id: 104,
          width: 509.51709591474247,
          height: 62.16474245115453,
          position: { left: 286.7850799289521, top: 927.4955595026644 },
          text: "SEPTEMBER 24-26, 2019"
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto",
            fontSize: 27,
            padding: 10,
            letterSpacing: 4,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            isBold: true
          },
          id: 105,
          width: 340.01776198934283,
          height: 50.65497335701599,
          position: { left: 367.35346358792185, top: 146.74955595026645 },
          text: "#THEATLANTICFEST"
        }
      ]
    }
  },
  // 86
  {
    ...linearGradient,
    thumb: "/thumbs/86.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#fbe0b0", "#feb15a"],
        direction: "right",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 251.2966252220249,
          height: 443.12611012433393,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#feb15a", "#fbe0b0"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: 149.62699822380108, top: 730.8703374777975 },
          id: 104,
          rotation: 90
        },
        {
          type: "object",
          width: 270.4795737122558,
          height: 435.4529307282416,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#feb15a", "#fbe0b0"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: 489.1651865008881, top: 642.6287744227354 },
          id: 103,
          rotation: 180
        },
        {
          type: "object",
          width: 270.4795737122558,
          height: 717.4422735346359,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#feb15a", "#fbe0b0"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: 750.0532859680285, top: 358.72113676731794 },
          id: 102,
          rotation: 180
        },
        {
          type: "object",
          width: 222.52220248667854,
          height: 218.68561278863234,
          showIframe: true,
          adaptation: svgs[52],
          configValues: { palette: ["#feb15a", "#fbe0b0"], angle: 0 },
          position: { left: 191.82948490230908, top: 608.0994671403198 },
          id: 105,
          rotation: -90
        }
      ]
    }
  },
  // 87
  {
    ...linearGradient,
    thumb: "/thumbs/87.png",
    title: "blurred bubbles",
    author: "anonymous",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#fceff6", "#ebf1ff"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 1118,
          height: 256,
          showIframe: true,
          adaptation: svgs[81],
          configValues: {
            palette: [{ r: 64, g: 134, b: 224, a: 0 }, "#54b9db"],
            angle: 0
          },
          position: { left: -7, top: -12.5 },
          id: 402,
          rotation: 180
        },
        {
          type: "object",
          width: 1089,
          height: 268,
          showIframe: true,
          adaptation: svgs[89],
          configValues: {
            palette: [{ r: 198, g: 223, b: 255, a: 0.13 }, "#54b9db"],
            angle: 0
          },
          position: { left: -91, top: -166.5 },
          id: 403,
          rotation: 156
        },
        {
          type: "object",
          width: 1207,
          height: 256,
          showIframe: true,
          adaptation: svgs[86],
          configValues: {
            palette: ["#7d91eb", { r: 84, g: 185, b: 219, a: 0 }],
            angle: 0
          },
          position: { left: -70, top: -130.5 },
          id: 404,
          rotation: 180
        },
        {
          type: "object",
          width: 386,
          height: 301,
          showIframe: true,
          adaptation: svgs[140],
          configValues: { palette: ["#EABDD9", "#B0C5F8"], angle: 0 },
          position: { left: 890, top: 200.5 },
          id: 406,
          rotation: 0
        },
        {
          type: "object",
          width: 1207,
          height: 256,
          showIframe: true,
          adaptation: svgs[86],
          configValues: {
            palette: [
              { r: 125, g: 145, b: 235, a: 0.37 },
              { r: 84, g: 185, b: 219, a: 0 }
            ],
            angle: 0
          },
          position: { left: 81, top: -246.5 },
          id: 407,
          rotation: 216
        },
        {
          type: "object",
          width: 175,
          height: 164,
          showIframe: true,
          adaptation: svgs[139],
          configValues: {
            palette: ["#5cf4be", { r: 197, g: 253, b: 201, a: 0.29 }],
            angle: 0
          },
          position: { left: 640, top: -57.5 },
          id: 405,
          rotation: 0
        },
        {
          type: "object",
          width: 1076,
          height: 505,
          showIframe: true,
          adaptation: svgs[89],
          configValues: {
            palette: [
              { r: 176, g: 197, b: 248, a: 0 },
              { r: 234, g: 189, b: 217, a: 0.56 }
            ],
            angle: 0
          },
          position: { left: 400, top: 614.5 },
          id: 408,
          rotation: -31
        },
        {
          type: "object",
          width: 161,
          height: 156,
          showIframe: true,
          adaptation: svgs[52],
          configValues: {
            palette: [
              { r: 255, g: 143, b: 221, a: 0.54 },
              { r: 237, g: 234, b: 156, a: 0.24 }
            ],
            angle: 0
          },
          position: { left: 55, top: 139.5 },
          id: 413,
          rotation: 0
        },
        {
          type: "object",
          width: 99,
          height: 94,
          showIframe: true,
          adaptation: svgs[52],
          configValues: {
            palette: [
              { r: 255, g: 255, b: 255, a: 0.34 },
              { r: 255, g: 255, b: 255, a: 0.13 }
            ],
            angle: 0
          },
          position: { left: 413, top: 146.5 },
          id: 414,
          rotation: 0
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Nunito",
            fontSize: 82,
            padding: 10,
            letterSpacing: 0,
            color: "#000000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 11,
            isBold: true
          },
          id: 305,
          width: 809.34375,
          height: 200,
          position: { left: 82, top: 404 },
          text: "super calming\nrelaxing sleep sounds"
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "ABeeZee",
            fontSize: 44,
            padding: 10,
            letterSpacing: 0,
            color: "#000000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 16
          },
          id: 306,
          width: 569.65625,
          height: 90,
          position: { left: 83, top: 631 },
          text: "feel your stress melt away"
        },
        {
          type: "object",
          width: 381,
          height: 64,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#edf746", "#eeac77"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: 91, top: 807.5 },
          id: 104,
          rotation: 0
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "ABeeZee",
            fontSize: 32,
            padding: 10,
            letterSpacing: 0,
            color: "#000000",
            backgroundColor: { r: 238, g: 172, b: 119, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 16,
            hasCyrillic: true
          },
          id: 102,
          width: 276.609375,
          height: 71,
          position: { left: 153, top: 804 },
          text: " 2,435 .wav files "
        }
      ]
    }
  },
  // 88
  {
    ...linearGradient,
    thumb: "/thumbs/88.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#1d1d63", "#08061c"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 645,
          height: 595,
          showIframe: true,
          adaptation: svgs[134],
          configValues: { palette: ["#1fa3f7", "#14d2b3"], angle: 0 },
          position: { left: 224, top: 220.5 },
          id: 102,
          rotation: 0
        },
        {
          type: "object",
          width: 688,
          height: 536,
          showIframe: true,
          adaptation: svgs[136],
          configValues: { palette: ["#3a43fc", "#f109aa"], angle: 0 },
          position: { left: 255, top: 252.5 },
          id: 103,
          rotation: 0
        },
        {
          type: "object",
          width: 264,
          height: 13,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#1d1c62", "#692dc4"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: 242, top: 677.5 },
          id: 104,
          rotation: 0
        },
        {
          type: "object",
          width: 261,
          height: 12,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#1d1c62", "#692dc4"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: 164, top: 455.5 },
          id: 105,
          rotation: 0
        },
        {
          type: "object",
          width: 261,
          height: 15,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#0bff8f", "#2f6ab9"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: 616, top: 753.5 },
          id: 106,
          rotation: 0
        },
        {
          type: "object",
          width: 261,
          height: 13,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#0bff8f", "#2f6ab9"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: 713, top: 506.5 },
          id: 107,
          rotation: 0
        },
        {
          type: "object",
          width: 264,
          height: 13,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#1d1c62", "#692dc4"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: 217, top: 381.5 },
          id: 108,
          rotation: 0
        },
        {
          type: "object",
          width: 210,
          height: 199,
          showIframe: true,
          adaptation: svgs[0],
          configValues: { palette: ["#ffffff", "#ffffff"], angle: 0 },
          position: { left: 734, top: 830.5 },
          id: 110,
          rotation: 0
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto",
            fontSize: 37,
            padding: 10,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            textAlign: "center"
          },
          id: 111,
          width: 76.90625,
          height: 108,
          position: { left: 800, top: 877 },
          text: "26\nOct"
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Lalezar",
            fontSize: 100,
            padding: 10,
            letterSpacing: 17,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            textAlign: "left",
            isBold: true
          },
          id: 112,
          width: 543,
          height: 380,
          position: { left: 368, top: 344 },
          text: "DNB & \nBEATS\nFESTIVAL"
        }
      ]
    }
  },
  // 89
  {
    ...radialGradient,
    thumb: "/thumbs/89.png",
    initState: {
      size: { width: 1200, height: 550 },
      configValues: { palette: ["#820701", "#120807"] },
      insertedItems: [
        {
          type: "object",
          width: 1225,
          height: 551,
          showIframe: true,
          adaptation: gradientWaves,
          configValues: {
            palette: ["#3c0301", "#080000"],
            lines: 54,
            amplituteX: 563,
            amplituteY: 10,
            smoothness: 34,
            fill: false,
            randomValues: []
          },
          position: { left: -7, top: 0.5 },
          id: 202,
          rotation: 0
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Inconsolata",
            fontSize: 39,
            padding: 10,
            letterSpacing: 0,
            color: "#f1c031",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            isBold: true
          },
          id: 203,
          width: 293,
          height: 66,
          position: { left: 449, top: 109 },
          text: "npm Enterprise"
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Inconsolata",
            fontSize: 24,
            padding: 10,
            letterSpacing: 0,
            color: "#f1c031",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            textAlign: "center"
          },
          id: 204,
          width: 1112,
          height: 104,
          position: { left: 43, top: 212 },
          text:
            "You need to get quality products to market fast but you also need enterprise-grade security\nand compliance. Speed up development while also upgrading to the most advanced tooling in \nJavaScript, from the trusted authorities on JavaScript package management."
        },
        {
          type: "object",
          width: 324,
          height: 61,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#6c3212", "#6c3212"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: 453, top: 391.5 },
          id: 206,
          rotation: 0
        },
        {
          type: "object",
          width: 324,
          height: 61,
          showIframe: true,
          adaptation: linearGradient,
          configValues: {
            palette: ["#f1c031", "#f1c031"],
            direction: "custom_angle",
            angle: 200
          },
          position: { left: 442, top: 381.5 },
          id: 205,
          rotation: 0
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Inconsolata",
            fontSize: 22,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12,
            isBold: true
          },
          id: 207,
          width: 154.203125,
          height: 46,
          position: { left: 531, top: 389 },
          text: "Learn more →"
        }
      ]
    }
  },
  // 90
  {
    ...waterpipe,
    id: 90,
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#6d107e", "#f03358"],
        opacity: 10,
        smokeSize: 155,
        lineWidth: 25,
        numCircles: 1
      },
      insertedItems: []
    }
  },
  // 91
  {
    ...linearGradient,
    thumb: "/thumbs/91.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#231a2e", "#120e1d"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 789,
          height: 716,
          showIframe: true,
          adaptation: svgs[131],
          configValues: {
            palette: [
              { r: 255, g: 255, b: 255, a: 0.11 },
              { r: 18, g: 14, b: 29, a: 0 }
            ],
            angle: 0
          },
          position: { left: 167, top: 176.5 },
          id: 105,
          rotation: 0
        },
        {
          type: "object",
          width: 756,
          height: 475,
          showIframe: true,
          adaptation: svgs[132],
          configValues: { palette: ["#fe5f26", "#fe2522"], angle: 0 },
          position: { left: 169, top: 286.5 },
          id: 103,
          rotation: 0
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Alfa Slab One",
            fontSize: 59,
            padding: 10,
            letterSpacing: 0,
            color: "#007bff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12
          },
          id: 106,
          width: 577.671875,
          height: 90,
          position: { left: 239, top: 900 },
          text: "Some sample text"
        }
      ]
    }
  },
  // 92
  {
    ...linearGradient,
    thumb: "/thumbs/92.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#ffffff", "#ffffff"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 32,
          height: 251,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#46003a", "#ea01b7"], angle: 0 },
          position: { left: 564, top: 338.5 },
          id: 102,
          rotation: -43
        },
        {
          type: "object",
          width: 163,
          height: 371,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#5098a1", "#a43aa6"], angle: 0 },
          position: { left: 615, top: 111.5 },
          id: 103,
          rotation: 53
        },
        {
          type: "object",
          width: 187,
          height: 153,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#c62cec", "#a1ceaa"], angle: 0 },
          position: { left: 503, top: 518.5 },
          id: 104,
          rotation: 130
        },
        {
          type: "object",
          width: 76,
          height: 55,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#c62cec", "#a1ceaa"], angle: 0 },
          position: { left: 843, top: 135.5 },
          id: 105,
          rotation: 5
        },
        {
          type: "object",
          width: 73,
          height: 153,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#c62cec", "#a1ceaa"], angle: 0 },
          position: { left: 633, top: 391.5 },
          id: 106,
          rotation: 265
        },
        {
          type: "object",
          width: 85,
          height: 229,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#1dcfaa", "#a41511"], angle: 0 },
          position: { left: 187, top: 527.5 },
          id: 107,
          rotation: 93
        },
        {
          type: "object",
          width: 85,
          height: 150,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#1dcfaa", "#a41511"], angle: 0 },
          position: { left: 123, top: 670.5 },
          id: 108,
          rotation: 172
        },
        {
          type: "object",
          width: 25,
          height: 296,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#37d3b0", "#c8b9f5"], angle: 0 },
          position: { left: 546, top: 706.5 },
          id: 110,
          rotation: 0
        },
        {
          type: "object",
          width: 25,
          height: 296,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#37d3b0", "#c8b9f5"], angle: 0 },
          position: { left: 610, top: 724.5 },
          id: 111,
          rotation: 24
        },
        {
          type: "object",
          width: 25,
          height: 296,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#37d3b0", "#c8b9f5"], angle: 0 },
          position: { left: 681, top: 863.5 },
          id: 112,
          rotation: 91
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Prompt",
            fontSize: 75,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0.5 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12
          },
          id: 113,
          width: 614.5625,
          height: 200,
          position: { left: 297, top: 427 },
          text: "▽ Not sponsored \nby triangles ►"
        },
        {
          type: "object",
          width: 25,
          height: 296,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#37d3b0", "#c8b9f5"], angle: 0 },
          position: { left: 546, top: 706.5 },
          id: 114,
          rotation: 0
        },
        {
          type: "object",
          width: 25,
          height: 296,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#37d3b0", "#c8b9f5"], angle: 0 },
          position: { left: 546, top: 706.5 },
          id: 115,
          rotation: 0
        }
      ]
    }
  },
  // 93
  {
    ...linearGradient,
    thumb: "/thumbs/93.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#ffffff", "#ebf1ff"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 353,
          height: 328,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#f7fba7", "#25e554"], angle: 0 },
          position: { left: 200, top: 271.5 },
          id: 102,
          rotation: 0
        },
        {
          type: "object",
          width: 217,
          height: 308,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#0869eb", "#25e554"], angle: 0 },
          position: { left: 539, top: 316.5 },
          id: 103,
          rotation: 62
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto",
            fontSize: 45,
            padding: 29,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0.5 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 9,
            isBold: false,
            isItalic: false
          },
          id: 104,
          width: 293.78125,
          height: 178,
          position: { left: 249, top: 428 },
          text: "BEST\nTRIANGLES\nCOMPANY"
        },
        {
          type: "object",
          width: 147,
          height: 117,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#25e554", "#0869eb"], angle: 0 },
          position: { left: 334, top: 705.5 },
          id: 105,
          rotation: 123
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto",
            fontSize: 24,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0.5 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12
          },
          id: 106,
          width: 1177.609375,
          height: 48,
          position: { left: -93, top: 110 },
          text:
            "BESTTRIANGLESCOMPANYBESTTRIANGLESCOMPANYBESTTRIANGLECOMPANYBESTTRIANGLECOMPANY"
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Roboto",
            fontSize: 24,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0.5 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12
          },
          id: 110,
          width: 1177.609375,
          height: 48,
          position: { left: -77, top: 972 },
          text:
            "BESTTRIANGLESCOMPANYBESTTRIANGLESCOMPANYBESTTRIANGLECOMPANYBESTTRIANGLECOMPANY"
        }
      ]
    }
  },
  // 94
  {
    ...linearGradient,
    thumb: "/thumbs/94.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#fceff6", "#ebf1ff"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 348,
          height: 307,
          showIframe: true,
          adaptation: svgs[140],
          configValues: { palette: ["#EABDD9", "#B0C5F8"], angle: 0 },
          position: { left: 6, top: 89.5 },
          id: 108,
          rotation: 0
        },
        {
          type: "object",
          width: 75,
          height: 73,
          showIframe: true,
          adaptation: svgs[138],
          configValues: { palette: ["#4BBFD6", "#8456D7"], angle: 0 },
          position: { left: 7, top: 284.5 },
          id: 105,
          rotation: 0
        },
        {
          type: "object",
          width: 62,
          height: 62,
          showIframe: true,
          adaptation: svgs[138],
          configValues: { palette: ["#fffa34", "#539200"], angle: 0 },
          position: { left: 322, top: 472.5 },
          id: 106,
          rotation: 0
        },
        {
          type: "object",
          width: 196,
          height: 191,
          showIframe: true,
          adaptation: svgs[139],
          configValues: { palette: ["#fbda00", "#f91515"], angle: 0 },
          position: { left: 835, top: 157.5 },
          id: 107,
          rotation: 0
        }
      ]
    }
  },
  // 95
  {
    ...linearGradient,
    thumb: "/thumbs/95.png",
    initState: {
      size: { width: 1080, height: 1080 },
      configValues: {
        palette: ["#fbfbfb", "#ebf1ff"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 264.72468916518653,
          height: 354.8845470692718,
          showIframe: true,
          adaptation: svgs[107],
          configValues: { palette: ["#f9f1d7", "#a7f1e2"], angle: 0 },
          position: { left: 397.0870337477798, top: 201.42095914742453 },
          id: 102,
          rotation: 59
        },
        {
          type: "object",
          width: 414.3516873889876,
          height: 351.0479573712256,
          showIframe: true,
          adaptation: svgs[102],
          configValues: { palette: ["#f4b0b2", "#fae9ca"], angle: 0 },
          position: { left: 1.9182948490230907, top: 234.03197158081707 },
          id: 103,
          rotation: -4
        },
        {
          type: "object",
          width: 565.8969804618117,
          height: 207.1758436944938,
          showIframe: true,
          adaptation: svgs[100],
          configValues: { palette: ["#bbc5e3", "#58ebe4"], angle: 113 },
          position: { left: 506.42984014209594, top: 124.6891651865009 },
          id: 104,
          rotation: 4
        },
        {
          type: "object",
          width: 13.428063943161636,
          height: 466.14564831261106,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#000000", "#000000"], angle: 0 },
          position: { left: 237.86856127886324, top: 460.39076376554175 },
          id: 105,
          rotation: 0
        },
        {
          type: "object",
          width: 13.428063943161636,
          height: 466.14564831261106,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#000000", "#000000"], angle: 0 },
          position: { left: 510.2664298401421, top: 397.0870337477798 },
          id: 106,
          rotation: 3
        },
        {
          type: "object",
          width: 13.428063943161636,
          height: 466.14564831261106,
          showIframe: true,
          adaptation: svgs[11],
          configValues: { palette: ["#000000", "#000000"], angle: 0 },
          position: { left: 794.1740674955596, top: 226.3587921847247 },
          id: 107,
          rotation: 0
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Warnes",
            fontSize: 46.03907637655418,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 12
          },
          id: 108,
          width: 391.6618561278863,
          height: 73.67451154529307,
          position: { left: 610.9769094138544, top: 795.133214920071 },
          text: "autumn trees"
        }
      ]
    }
  },
  // 96
  {
    ...radialGradient,
    author: "Freepik",
    authorLink: "https://freepik.com",
    title: "Radial gradient with ripples",
    thumb: "/thumbs/96.png",
    palettes: [
      ["#5B2A86", "#360568", "#E5C3D1", "#613F75"],
      ["#f3a930", "#e76779", "#c9eaff", "#e9e9f1"],
      ["#7e2ec4", "#360568", "#00fffc", "#54fd8b"],
      ["#9AD1D4", "#CCDBDC", "#007EA7", "#003249"],
      ["#ffcdd3", "#dfb7c7", "#fbf7ff", "#6961ff"],
      ["#16143c", "#1a1844", "#e96eff", "#6f00fb"]
    ],
    initState: {
      size: { width: 726, height: 563 },
      configValues: { palette: ["#3f0686", "#260057"] },
      insertedItems: [
        {
          type: "object",
          width: 727,
          height: 565,
          showIframe: true,
          adaptation: svgs[54],
          configValues: { palette: ["#fdf5d4", "#ff3ba6"], angle: 0 },
          position: { left: 0, top: -0.5 },
          id: 102,
          rotation: 0
        }
      ]
    }
  },
  // 97
  {
    ...linearGradient,
    thumb: "/thumbs/97.png",
    initState: {
      size: { width: 1280, height: 962 },
      configValues: {
        palette: ["#fceff6", "#ebf1ff"],
        direction: "custom_angle",
        angle: 200
      },
      insertedItems: [
        {
          type: "object",
          width: 346.5981148243359,
          height: 304.9185946872322,
          showIframe: true,
          adaptation: svgs[140],
          configValues: { palette: ["#EABDD9", "#B0C5F8"], angle: 0 },
          position: { left: 802.879177377892, top: 81.74807197943444 },
          id: 508,
          rotation: 0
        },
        {
          type: "object",
          width: 52.64781491002571,
          height: 51.550985432733505,
          showIframe: true,
          adaptation: svgs[138],
          configValues: { palette: ["#4BBFD6", "#8456D7"], angle: 0 },
          position: { left: 814.9443016281062, top: 122.33076263924593 },
          id: 505,
          rotation: 0
        },
        {
          type: "object",
          width: 194.13881748071978,
          height: 189.751499571551,
          showIframe: true,
          adaptation: svgs[139],
          configValues: { palette: ["#fbda00", "#f91515"], angle: 0 },
          position: { left: 23.033419023136247, top: 738.7489288774635 },
          id: 507,
          rotation: 0
        },
        {
          type: "object",
          width: 823.7189374464439,
          height: 686.6152527849185,
          showIframe: true,
          adaptation: svgs[140],
          configValues: {
            palette: ["#ffffff", { r: 255, g: 255, b: 255, a: 0.7 }],
            angle: 0
          },
          position: { left: -250.0771208226221, top: -258.26906598114823 },
          id: 303,
          rotation: 0
        },
        {
          type: "object",
          width: 60.32562125107112,
          height: 60.32562125107112,
          showIframe: true,
          adaptation: svgs[138],
          configValues: { palette: ["#fffa34", "#539200"], angle: 0 },
          position: { left: 409.1173950299914, top: 213.36760925449872 },
          id: 506,
          rotation: 0
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Poppins",
            fontSize: 56,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 14,
            isBold: true
          },
          id: 403,
          position: { left: 140.942587832048, top: 323.77035132819196 },
          width: 1085.929734361611,
          height: 175.73264781491002,
          text: "a simple design tool \nbased on packs of adaptive elements\n"
        },
        {
          type: "text",
          hasCyrillic: false,
          configValues: {
            fontFamily: "Poppins",
            fontSize: 39,
            padding: 10,
            letterSpacing: 0,
            color: "#000",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            isInline: false,
            lineHeight: 16,
            isBold: false
          },
          id: 404,
          position: { left: 139.8457583547558, top: 529.9742930591259 },
          width: 797.617823479006,
          height: 142.82776349614394,
          text:
            "for music makers, for coders, for writers, \nand other creatives"
        },
        {
          type: "object",
          width: 584.6101113967437,
          height: 495.7669237360754,
          showIframe: true,
          adaptation: svgs[140],
          configValues: { palette: ["#ffffff", "#cbd8f9"], angle: 0 },
          position: { left: 871.9794344473007, top: 586.2896315338475 },
          id: 102,
          rotation: 0
        },
        {
          type: "object",
          width: 282.9820051413882,
          height: 251.1739502999143,
          showIframe: true,
          adaptation: svgs[140],
          configValues: { palette: ["#ffffff", "#cbd8f9"], angle: 0 },
          position: { left: 691.0025706940874, top: 648.808911739503 },
          id: 302,
          rotation: 0
        }
      ]
    }
  },
  // 98
  {
    ...radialGradient,
    thumb: "/thumbs/98.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: { palette: ["#440000", "#1f0000"] },
      insertedItems: [
        {
          type: "object",
          width: 1021.2418300653595,
          height: 743.4640522875817,
          showIframe: true,
          adaptation: waterpipe,
          configValues: {
            palette: ["#400000", "#ff0000"],
            opacity: 10,
            smokeSize: 113,
            lineWidth: 20,
            numCircles: 1
          },
          position: { left: 0, top: 130.718954248366 },
          id: 102,
          rotation: 0
        }
      ]
    }
  },
  // 99
  {
    ...waterpipe,
    thumb: "/thumbs/99.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: {
        palette: ["#000000", "#6d6d6d"],
        opacity: 6,
        smokeSize: 102,
        lineWidth: 22,
        numCircles: 1
      },
      insertedItems: []
    }
  },
  // 100
  {
    ...radialGradient,
    thumb: "/thumbs/100.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: { palette: ["#FBC2EB", "#A18CD1"] },
      insertedItems: [
        {
          type: "object",
          width: 1019.5381882770871,
          height: 1015.9857904085259,
          showIframe: true,
          adaptation: waterpipe,
          configValues: {
            palette: ["#ff3ba6", "#fdf5d4"],
            opacity: 10,
            smokeSize: 182,
            lineWidth: 20,
            numCircles: 1
          },
          position: { left: -0.8880994671403198, top: -10.657193605683837 },
          id: 202,
          rotation: 0
        },
        {
          type: "object",
          width: 1451.1545293072825,
          height: 552.3978685612789,
          showIframe: true,
          adaptation: waterpipe,
          configValues: {
            palette: ["#ff3ba6", "#fdf5d4"],
            opacity: 47,
            smokeSize: 182,
            lineWidth: 15,
            numCircles: 1
          },
          position: { left: -333.03730017761995, top: 76.37655417406751 },
          id: 102,
          rotation: -45
        }
      ]
    }
  },
  // 101
  {
    ...radialGradient,
    thumb: "/thumbs/101.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: { palette: ["#ae65ff", "#3d0081"] },
      insertedItems: [
        {
          type: "object",
          width: 1019.5381882770871,
          height: 742.4511545293074,
          showIframe: true,
          adaptation: waterpipe,
          configValues: {
            palette: ["#E5CB23", "#3d0081"],
            opacity: 50,
            smokeSize: 43,
            lineWidth: 31,
            numCircles: 1
          },
          position: { left: -0.8880994671403198, top: 129.66252220248668 },
          id: 202,
          rotation: 0
        },
        {
          type: "object",
          width: 1019.5381882770871,
          height: 742.4511545293074,
          showIframe: true,
          adaptation: waterpipe,
          configValues: {
            palette: ["#3AD5FA", "#3d0081"],
            opacity: 22,
            smokeSize: 84,
            lineWidth: 20,
            numCircles: 1
          },
          position: { left: -4.440497335701599, top: 536.4120781527531 },
          id: 102,
          rotation: 0
        },
        {
          type: "object",
          width: 1019.5381882770871,
          height: 742.4511545293074,
          showIframe: true,
          adaptation: waterpipe,
          configValues: {
            palette: ["#FF0097", "#3d0081"],
            opacity: 50,
            smokeSize: 84,
            lineWidth: 3,
            numCircles: 1
          },
          position: { left: -20.426287744227356, top: -257.54884547069275 },
          id: 103,
          rotation: 0
        }
      ]
    }
  },
  // 102
  {
    ...radialGradient,
    thumb: "/thumbs/102.png",
    initState: {
      size: { width: 1000, height: 1000 },
      configValues: { palette: ["#09203f", "#09203f"] },
      insertedItems: [
        {
          type: "object",
          width: 1211.3676731793962,
          height: 880.9946714031972,
          showIframe: true,
          adaptation: waterpipe,
          configValues: {
            palette: ["#00c9ff", "#92fe9d"],
            opacity: 10,
            smokeSize: 113,
            lineWidth: 20,
            numCircles: 1
          },
          position: { left: -68.38365896980463, top: -42.62877442273535 },
          id: 202,
          rotation: -90
        }
      ]
    }
  }
  // { ...cells },
  // { ...fog },
];

// adaptation: "svgs/(.*)",
// adaptation: svgs[$1],
