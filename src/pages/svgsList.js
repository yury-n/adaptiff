import svgWithGradient from "../_adaptationConfigs/svgWithGradient";
import svgWithSolidColor from "../_adaptationConfigs/svgWithSolidColor";

export default [
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/1.svg",
    fileName: "svgs/1",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#ff9665", "#ff5f62"]
      }
    }
  },
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/2.svg",
    fileName: "svgs/2",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#bbefd1", "#72d7fd"]
      }
    }
  },
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/3.svg",
    fileName: "svgs/3",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#42e3ed", "#2456fe"]
      }
    }
  },
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/4.svg",
    thumbBackgroundSize: 130,
    fileName: "svgs/4",
    aspectRatio: 307.37 / 61.1,
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#F1EAB9", "#FF8C8C"]
      }
    }
  },
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/5.svg",
    thumbBackgroundSize: 150,
    aspectRatio: 320.08 / 50.17,
    fileName: "svgs/5",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#FCA5F1", "#B5FFFF"]
      }
    }
  },
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/6.svg",
    thumbBackgroundSize: 114,
    fileName: "svgs/6",
    aspectRatio: 260.6 / 83.3,
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#FF2CA9", "#ff0"]
      }
    }
  },
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/7.svg",
    thumbBackgroundSize: 80,
    fileName: "svgs/7",
    aspectRatio: 247.8 / 336.8,
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#FF91FF", "#FF9800"]
      }
    }
  },
  {
    ...svgWithSolidColor,
    thumb: "/thumbs/svgs/8.png",
    fileName: "svgs/8",
    aspectRatio: 400 / 296,
    initState: {
      size: { width: 1000, height: 1000 },
      config: {}
    }
  },
  {
    ...svgWithSolidColor,
    thumb: "/thumbs/svgs/9.png",
    fileName: "svgs/9",
    aspectRatio: 400 / 296,
    initState: {
      size: { width: 1000, height: 1000 },
      config: {}
    }
  }
];
