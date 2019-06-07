const palettes = [
  ["#A2CCB6", "#FCEEB5", "#EE786E"],
  ["#fffccc", "#f28b3a", "#ee4a30", "#812326"],
  ["#f7fcfd", "#9ebcda", "#8b96c5", "#4e1a4b"],
  ["#f029ad", "#d0d1e6", "#0081e7", "#176697"],
  ["#ffebeb", "#fc6767", "#0081e7", "#ec008c"]
];

export default {
  title: "fiber ribbons",
  fileName: "fiber_ribbons/build/index",
  author: "drcmda",
  authorLink: "https://codesandbox.io/embed/kky7yk087v",
  thumbs: ["/thumbs/fiber_ribbons/1.png"],
  isPausable: true,
  config: [
    {
      key: "numLines",
      text: "Number of lines",
      type: "range",
      defaultValue: 100,
      min: 0,
      max: 200
    },
    {
      key: "fov",
      text: "Field of view",
      type: "range",
      defaultValue: 75,
      min: 0,
      max: 200
    },
    {
      key: "backgroundColor",
      text: "Background",
      type: "single-color",
      defaultValue: "#324444"
    },
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    }
  ]
};
