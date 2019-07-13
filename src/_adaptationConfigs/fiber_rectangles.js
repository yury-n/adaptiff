const palettes = [
  ["#fffccc", "#f28b3a", "#ee4a30", "#812326"],
  ["#A2CCB6", "#FCEEB5", "#EE786E", "#e0feff", "#00c9ff", "#92fe9d"],
  ["#8e2de2", "#4a00e0", "#6d107e", "#e0feff", "#00c9ff", "#92fe9d"],
  ["#A2CCB6", "#FCEEB5", "#EE786E", "#f03358", "#00c9ff"],
  ["#f7fcfd", "#9ebcda", "#8b96c5", "#4e1a4b"],
  ["#f029ad", "#d0d1e6", "#0081e7", "#176697"],
  ["#ffebeb", "#fc6767", "#0081e7", "#ec008c"]
];

export default {
  title: "fiber rectangles",
  fileName: "fiber_rectangles/build/index",
  author: "drcmda",
  authorLink: "https://codesandbox.io/embed/jz9l97qn89",
  thumb: "/background_thumbs/7.png",
  isPausable: true,
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    },
    {
      key: "itemsNum",
      text: "Number of items",
      type: "range",
      defaultValue: 30,
      min: 0,
      max: 60
    },
    {
      key: "backgroundColor",
      text: "Background",
      type: "single-color",
      defaultValue: "#ffffff"
    }
  ]
};
