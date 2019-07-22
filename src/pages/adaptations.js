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
import voronoi from "../_adaptationConfigs/voronoi";
import carpet from "../_adaptationConfigs/carpet";
import blank from "../_adaptationConfigs/blank";
import simpleRipple from "../_adaptationConfigs/simple_ripple";
import hedgehog from "../_adaptationConfigs/hedgehog";

export const allAdaptationTypes = [
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
  subtleRib,
  clipSpace3d,
  voronoi,
  carpet,
  blank,
  hedgehog
];

const unfilledGradientWaves = {
  ...gradientWaves,
  thumb: "/thumbs/b18.png",
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
};

export const allAdaptations = [
  // 0
  {
    ...linearGradient,
    thumb: "/thumbs/18.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
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
          config: {
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
          config: {
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
      config: {
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
          config: {
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
      config: {
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
          config: {
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
    initState: {
      size: { width: 700, height: 700 },
      config: {
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
          config: {
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
      config: {
        backgroundColor: "#324444",
        palette: ["#A2CCB6", "#FCEEB5", "#fff", "#EE786E"],
        numLines: 94,
        fov: 75
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          config: {
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
      config: {
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
          config: {
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
          config: {
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
          config: {
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
          config: {
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
    ...subtleRib,
    thumb: "/thumbs/10.png",
    initState: {
      size: { width: 500, height: 500 },
      config: { color: "#e2affb", mode: "vertical", intensity: 22 },
      insertedItems: [
        {
          id: 100,
          type: "text",
          config: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#000",
            fontFamily: "Noticia Text",
            fontSize: 44,
            isBold: true,
            isItalic: false,
            letterSpacing: 4,
            padding: 10
          },
          position: { left: 137, top: 165 },
          text: "every\nnext step\nis simple",
          width: 242.484375,
          height: 164
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
      config: {
        palette: ["#d8f1ff", "#000"],
        sizePercent: [25, 39],
        randomValues: [0.39245358845393374]
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          config: {
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
          config: {
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
          config: {
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
    thumb: "/thumbs/13.png",
    thumbBackgroundSize: "cover",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#ff9855", "#bb045d"],
        lines: 1,
        amplituteX: 148,
        amplituteY: 200,
        smoothness: 6,
        fill: true,
        randomValues: [0.5269907429385214, 0.44993152499044275]
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          config: {
            fontFamily: "Neucha",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            color: "#fff",
            fontSize: 100,
            padding: 13,
            borderWidth: 0
          },
          position: { left: 44.438844086021504, top: 461.8195564516129 },
          text: "create something unique",
          width: 918.5147849462365,
          height: 134.8706317204301
        }
      ]
    }
  },
  // 9
  {
    ...postmodern,
    thumb: "/thumbs/14.png",
    thumbBackgroundSize: "cover",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#dec7f9", "#693e97", "#2a013e"],
        count: 100,
        lineWidth: 74,
        randomValues: [0.9799188025715417]
      },
      insertedItems: [
        {
          id: 100,
          type: "text",
          config: {
            fontFamily: "Merriweather",
            backgroundColor: "#693e97",
            color: "#fff",
            fontSize: 55,
            isBold: true,
            padding: 15,
            borderWidth: 0
          },
          position: { left: 104.2086693548387, top: 419.48084677419354 },
          text: "créer quelque chose d'unique",
          width: 818.9474126344086,
          height: 89.12970430107526
        }
      ]
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
  // 12
  {
    ...gradientWaves,
    thumb: "/thumbs/b16.png",
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
  // 13
  {
    ...fiberRibbons,
    thumb: "/thumbs/b15.png",
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
  // 14
  {
    ...clipSpace3d,
    thumb: "/thumbs/b14.png",
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
  // 15
  {
    ...linearGradient,
    title: "multiple objects",
    author: "multiple authors",
    thumb: "/thumbs/b13.png",
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
  // 16
  {
    ...mesh,
    thumb: "/thumbs/b28.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
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
      config: { color: "#c1bbf2" },
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
    initState: { config: {}, size: { width: 600, height: 500 } }
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
    initState: { config: {}, size: { width: 600, height: 600 } }
  },
  // 28
  { ...perfectPurple },
  // 29
  {
    ...chromaticLiquids,
    initState: { config: {}, size: { width: 1000, height: 660 } }
  },
  // 30
  {
    ...fiberRectangles,
    initState: { config: {}, size: { width: 700, height: 500 } }
  },
  // 31
  {
    ...generateArt,
    initState: { config: {}, size: { width: 500, height: 500 } }
  },
  // 32
  { ...wallPattern },
  // 33
  {
    ...gradientBubbles,
    thumb: "/thumbs/b21.png",
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
  // 34
  {
    ...particles,
    thumb: "/thumbs/b20.png",
    initState: {
      size: { width: 600, height: 600 },
      config: {
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
    initState: { config: {}, size: { width: 1000, height: 1000 } }
  },
  // 38
  {
    ...linearGradient,
    thumb: "/thumbs/38.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: { palette: ["#00040e", "#470090"], direction: "top", angle: 200 },
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
          config: {
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
          config: {
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
    initState: { config: {}, size: { width: 1000, height: 1000 } }
  },
  // 40
  {
    ...gradientWaves,
    thumb: "/thumbs/40.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
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
      config: {
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
          config: {
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
          config: {
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
          config: {
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
          config: {
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
      config: { transparent: false, color: "#ffffff" },
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
          config: {
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
          config: {
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
          config: {
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
    thumb: "/thumbs/43.png",
    initState: {
      size: { width: 1000, height: 1000 },
      config: { palette: ["#fbcac4", "#45618a"], direction: "top", angle: 200 },
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
        },
        {
          id: 303,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Roboto Mono",
            fontSize: 70,
            padding: 0,
            letterSpacing: 0,
            color: "#fefefe",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isInline: true,
            textAlign: "center",
            lineHeight: 11,
            isItalic: false,
            isBold: false
          },
          width: 756.109375,
          height: 323,
          position: { left: 104.875, top: 318.046875 },
          text:
            "переживи всех\nпереживи вновь\nсловно они — снег\nпляшущий снег снов\n"
        },
        {
          id: 202,
          type: "text",
          hasCyrillic: false,
          config: {
            fontFamily: "Roboto Mono",
            fontSize: 37,
            padding: 0,
            letterSpacing: 0,
            color: "#ffffff",
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            hasCyrillic: true,
            isInline: true,
            textAlign: "right",
            lineHeight: 14,
            isItalic: false,
            isBold: false
          },
          width: 310.84375,
          height: 49,
          position: { left: 344.03125, top: 924.53125 },
          text: "И. А. Бросдкий"
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
      config: { transparent: false, color: "#ffffff" },
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
          config: {
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
          config: {
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
      config: {}
    }
  },
  // 46
  {
    ...hedgehog,
    thumb: "/thumbs/46.png",
    initState: {
      size: { width: 1080, height: 1080 },
      config: {}
    }
  }
];
