import png from "../_adaptationConfigs/png";

const commonChildishDreams = {
  pack: "childishDreams",
  thumbBackgroundSize: "100%",
  initState: {
    size: { width: 1000, height: 1000 },
    configValues: {}
  }
};

const commonAbstractLines = {
  pack: "abstractLines",
  thumbBackgroundSize: "100%",
  initState: {
    size: { width: 1000, height: 1000 },
    configValues: {}
  }
};

const pngs = [
  {
    ...png,
    ...commonChildishDreams,
    thumb: "/thumbs/pngs/0.png",
    fileName: "png_htmls/0",
    aspectRatio: 70 / 70
  },
  {
    ...png,
    ...commonChildishDreams,
    thumb: "/thumbs/pngs/1.png",
    fileName: "png_htmls/1",
    aspectRatio: 70 / 50
  },
  {
    ...png,
    ...commonChildishDreams,
    thumb: "/thumbs/pngs/2.png",
    fileName: "png_htmls/2",
    aspectRatio: 70 / 70
  },
  {
    ...png,
    ...commonChildishDreams,
    thumb: "/thumbs/pngs/3.png",
    fileName: "png_htmls/3",
    aspectRatio: 70 / 70
  },
  {
    ...png,
    ...commonChildishDreams,
    thumb: "/thumbs/pngs/4.png",
    fileName: "png_htmls/4",
    aspectRatio: 70 / 95
  },
  {
    ...png,
    ...commonChildishDreams,
    thumb: "/thumbs/pngs/5.png",
    fileName: "png_htmls/5",
    aspectRatio: 70 / 70
  },
  {
    ...png,
    ...commonChildishDreams,
    thumb: "/thumbs/pngs/6.png",
    fileName: "png_htmls/6",
    aspectRatio: 70 / 51
  },
  {
    ...png,
    ...commonChildishDreams,
    thumb: "/thumbs/pngs/7.png",
    fileName: "png_htmls/7",
    aspectRatio: 70 / 51
  },
  {
    ...png,
    ...commonChildishDreams,
    thumb: "/thumbs/pngs/8.png",
    fileName: "png_htmls/8",
    aspectRatio: 70 / 54
  },
  {
    ...png,
    ...commonChildishDreams,
    thumb: "/thumbs/pngs/9.png",
    fileName: "png_htmls/9",
    aspectRatio: 70 / 86
  },
  {
    ...png,
    ...commonChildishDreams,
    thumb: "/thumbs/pngs/10.png",
    fileName: "png_htmls/10",
    aspectRatio: 70 / 40
  },
  {
    ...png,
    ...commonChildishDreams,
    thumb: "/thumbs/pngs/11.png",
    fileName: "png_htmls/11",
    aspectRatio: 70 / 70
  },
  {
    ...png,
    ...commonChildishDreams,
    thumb: "/thumbs/pngs/12.png",
    fileName: "png_htmls/12",
    aspectRatio: 70 / 48
  },
  {
    ...png,
    ...commonAbstractLines,
    thumb: "/thumbs/pngs/13.jpg",
    fileName: "png_htmls/13",
    aspectRatio: 899 / 861
  },
  {
    ...png,
    ...commonAbstractLines,
    thumb: "/thumbs/pngs/14.jpg",
    fileName: "png_htmls/14",
    aspectRatio: 565 / 947
  },
  {
    ...png,
    ...commonAbstractLines,
    thumb: "/thumbs/pngs/15.jpg",
    fileName: "png_htmls/15",
    aspectRatio: 1293 / 764
  }
];

export const abstractLines = [13, 14, 15].map(index => pngs[index]);

export const childishDreams = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
  index => pngs[index]
);
