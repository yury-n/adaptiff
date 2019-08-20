import svgWithGradient from "../_adaptationConfigs/svgWithGradient";
import svgWithSolidColor from "../_adaptationConfigs/svgWithSolidColor";

const svgs = [
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/0.svg",
    fileName: "svgs/0",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#ff9665", "#ff5f62"]
      }
    }
  },
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/1.svg",
    fileName: "svgs/1",
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#bbefd1", "#72d7fd"]
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
        palette: ["#42e3ed", "#2456fe"]
      }
    }
  },
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/3.svg",
    thumbBackgroundSize: "130%",
    fileName: "svgs/3",
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
    thumb: "/thumbs/svgs/4.svg",
    fileName: "svgs/4",
    thumbBackgroundSize: "130%",
    aspectRatio: 320.08 / 50.17,
    initState: {
      size: { width: 1000, height: 1000 },
      config: {
        palette: ["#FCA5F1", "#B5FFFF"]
      }
    }
  },
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/5.svg",
    fileName: "svgs/5",
    thumbBackgroundSize: 114,
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
    thumb: "/thumbs/svgs/6.svg",
    fileName: "svgs/6",
    thumbBackgroundSize: 80,
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
    thumb: "/thumbs/svgs/7.png",
    fileName: "svgs/7",
    aspectRatio: 400 / 296,
    initState: {
      size: { width: 1000, height: 1000 },
      config: {}
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
    ...svgWithGradient,
    thumb: "/thumbs/svgs/9.png",
    fileName: "svgs/9",
    aspectRatio: 108 / 215,
    initState: {
      size: { width: 250, height: 250 },
      config: {
        palette: ["#fefff5", "#d3f0e9"]
      }
    }
  },
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/9.png",
    fileName: "svgs/10",
    aspectRatio: 127.2 / 119,
    initState: {
      size: { width: 250, height: 250 },
      config: {
        palette: ["#fefff5", "#d3f0e9"]
      }
    }
  },
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/9.png",
    fileName: "svgs/11",
    aspectRatio: 500 / 433,
    initState: {
      size: { width: 250, height: 250 },
      config: {
        palette: ["#fefff5", "#d3f0e9"]
      }
    }
  },
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/9.png",
    fileName: "svgs/12",
    aspectRatio: 500 / 500,
    initState: {
      size: { width: 250, height: 250 },
      config: {
        palette: ["#fefff5", "#d3f0e9"]
      }
    }
  },
  {
    ...svgWithGradient,
    thumb: "/thumbs/svgs/9.png",
    fileName: "svgs/13",
    aspectRatio: 500 / 500,
    initState: {
      size: { width: 250, height: 250 },
      config: {
        palette: ["#fefff5", "#d3f0e9"]
      }
    }
  }
];

export default svgs;

export const orderedSvgs = [0, 1, 2, 9, 3, 4, 5, 6, 7, 8].map(
  index => svgs[index]
);

export const basicSvgs = [0, 2, 9, 10, 11, 12, 13].map(index => svgs[index]);

export const paintWorkSvgs = [1, 3, 4].map(index => svgs[index]);

export const childishDreamsSvgs = [5, 6].map(index => svgs[index]);
export const particlesSvgs = [7, 8].map(index => svgs[index]);
