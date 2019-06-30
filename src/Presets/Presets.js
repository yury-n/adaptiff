import React, { useState } from "react";
import classnames from "classnames";
import MiniCard from "../MiniCard/MiniCard";
import gradientWaves from "../_adaptationConfigs/gradientWaves";
import mesh from "../_adaptationConfigs/mesh";
import particles from "../_adaptationConfigs/particles";
import chromaticLiquids from "../_adaptationConfigs/chromatic_liquids";
import gradientBubbles from "../_adaptationConfigs/gradient_bubbles";
import fiberRibbons from "../_adaptationConfigs/fiber_ribbons";
import subtleRib from "../_adaptationConfigs/subtle_rib";

import s from "./Presets.module.css";

const cards = [
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
          id: 0,
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
        smoothness: 98
      },
      insertedItems: [
        {
          id: 0,
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
          id: 0,
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
        smoothness: 1
      }
    }
  },
  {
    ...mesh,
    thumbs: ["/preset_thumbs/2.png"],
    thumbWidth: 130,
    initState: {
      size: { width: 2000, height: 2000 },
      config: {
        distanceBetween: 7,
        palette: ["#fff", "#000"]
      }
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
  },
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
        withRandomness: true
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