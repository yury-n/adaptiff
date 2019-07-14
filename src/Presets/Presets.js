import React, { useState } from "react";
import classnames from "classnames";
import MiniCard from "../MiniCard/MiniCard";
import gradientWaves from "../_adaptationConfigs/gradientWaves";
import linearGradient from "../_adaptationConfigs/linearGradient";
import gradientBubbles from "../_adaptationConfigs/gradient_bubbles";
import fiberRibbons from "../_adaptationConfigs/fiber_ribbons";
import subtleRib from "../_adaptationConfigs/subtle_rib";
import blobmaker from "../_adaptationConfigs/blobmaker";
import postmodern from "../_adaptationConfigs/postmodern";
import strings25 from "../_adaptationConfigs/strings25";

import s from "./Presets.module.css";

const cards = [
  // {
  //   ...template,
  //   thumb: "/preset_thumbs/10.png",
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
    thumb: "/preset_thumbs/18.png",
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
    thumb: "/preset_thumbs/16.png",
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
    ...gradientBubbles,
    thumb: "/preset_thumbs/11.png",
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
    ...gradientWaves,
    thumb: "/preset_thumbs/9.png",
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
    thumb: "/preset_thumbs/7.png",
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
    ...subtleRib,
    thumb: "/preset_thumbs/10.png",
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
    ...strings25,
    thumb: "/preset_thumbs/15.png",
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
    thumb: "/preset_thumbs/13.png",
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
    thumb: "/preset_thumbs/14.png",
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
