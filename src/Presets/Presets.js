import React, { useState } from "react";
import classnames from "classnames";
import MiniCard from "../MiniCard/MiniCard";
import gradientWaves from "../_adaptationConfigs/gradientWaves";
import clipSpace3d from "../_adaptationConfigs/clipSpace3d";
import linearGradient from "../_adaptationConfigs/linearGradient";
import mesh from "../_adaptationConfigs/mesh";
import chromaticLiquids from "../_adaptationConfigs/chromatic_liquids";
import gradientBubbles from "../_adaptationConfigs/gradient_bubbles";
import fiberRibbons from "../_adaptationConfigs/fiber_ribbons";
import subtleRib from "../_adaptationConfigs/subtle_rib";
import blobmaker from "../_adaptationConfigs/blobmaker";

import s from "./Presets.module.css";

const cards = [
  // {
  //   ...template,
  //   thumbs: ["/preset_thumbs/10.png"],
  //   thumbWidth: 130,
  //   initState: {
  //     size: { width: 600, height: 500 },
  //     config: {
  //     },
  //     insertedItems: [
  //     ]
  //   }
  // },
  {
    ...linearGradient,
    thumbs: ["/preset_thumbs/18.png"],
    thumbWidth: 130,
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
            fontFamily: "Helvetica",
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
  {
    ...linearGradient,
    thumbs: ["/preset_thumbs/16.png"],
    thumbWidth: 98,
    initState: {
      size: { width: 450, height: 600 },
      config: {
        angle: 200,
        direction: "custom_angle",
        palette: ["#0b0a21", "#1e1b57"]
      },
      insertedItems: [
        {
          id: 100,
          type: "object",
          showIframe: true,
          adaptation: linearGradient,
          width: 398,
          height: 540,
          position: { left: 25, top: 31 },
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
          width: 351,
          height: 462,
          position: { left: 48, top: 75 },
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
          position: { left: 81, top: 172 },
          config: {
            backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
            borderWidth: 0,
            color: "#ffffff",
            fontFamily: "Monoton",
            fontSize: 77,
            letterSpacing: 0,
            padding: 10
          },
          text: `what
so
not`
        }
      ]
    }
  },
  {
    ...linearGradient,
    thumbs: ["/preset_thumbs/12.png"],
    thumbWidth: 156,
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
  {
    ...mesh,
    thumbs: ["/preset_thumbs/2.png"],
    thumbWidth: 130,
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        distanceBetween: 7,
        palette: ["#fff", "#000"]
      }
    }
  },
  {
    ...gradientBubbles,
    thumbs: ["/preset_thumbs/11.png"],
    thumbWidth: 156,
    initState: {
      size: { width: 600, height: 500 },
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
  {
    ...clipSpace3d,
    thumbs: ["/preset_thumbs/17.png"],
    thumbWidth: 219,
    initState: {
      size: { width: 930, height: 552 },
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
  {
    ...gradientWaves,
    thumbs: ["/preset_thumbs/9.png"],
    thumbWidth: 130,
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
  {
    ...fiberRibbons,
    thumbs: ["/preset_thumbs/7.png"],
    thumbWidth: 87,
    initState: {
      size: { width: 800, height: 1200 },
      config: {
        backgroundColor: "#324444",
        fov: 75,
        numLines: 94,
        palette: ["#A2CCB6", "#FCEEB5", "#fff", "#EE786E"]
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
          position: { left: 115.13, top: 220.66 },
          text: `React
Three
Fiber`
        }
      ]
    }
  },
  {
    ...fiberRibbons,
    thumbs: ["/preset_thumbs/8.png"],
    thumbWidth: 130,
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
  {
    ...gradientWaves,
    thumbs: ["/preset_thumbs/1.png"],
    thumbWidth: 130,
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
  {
    ...subtleRib,
    thumbs: ["/preset_thumbs/10.png"],
    thumbWidth: 130,
    initState: {
      size: { width: 500, height: 500 },
      config: {
        color: "#fcd633",
        intensity: 22,
        mode: "vertical"
      },
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
            isBold: false,
            isItalic: false,
            letterSpacing: 4,
            padding: 10
          },
          position: { left: 135, top: 163 },
          text: `every
next step
is simple`
        }
      ]
    }
  },
  {
    ...chromaticLiquids,
    thumbs: ["/preset_thumbs/4.png"],
    thumbWidth: 197,
    initState: {
      size: { width: 1000, height: 660 },
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
  }
];

export default () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [allCards, setAllCards] = useState(cards);
  const onViewAllClick = () => {
    setIsExpanded(true);
    import("./loadMore1").then(module => {
      const moreCards = module.default;
      setAllCards([...allCards, ...moreCards]);
    });
  };
  return (
    <div className={classnames(s["root-wrapper"], isExpanded && s["expanded"])}>
      <div className={s["view-all"]} onClick={onViewAllClick}>
        view all
      </div>
      <div className={s["root"]}>
        {allCards.map((card, index) => (
          <MiniCard key={index} mode="preset" {...card} />
        ))}
      </div>
    </div>
  );
};
