const palettes = [
  ["#fffccc", "#f28b3a", "#ee4a30", "#812326"],
  ["#16200c", "#c2f906", "#00ff95", "#3000ff", "#7c00f2"],
  ["#7f3b14", "#f7b862", "#f7f7f7", "#b2abd2", "#542a87"],
  ["#fcfbfd", "#dadaeb", "#bcbddc", "#807db9", "#41257d"],
  ["#fef7f3", "#f7c5bf", "#ed66a0", "#af3c7e", "#4a216a"],
  ["#f7fcfd", "#9ebcda", "#8b96c5", "#4e1a4b"],
  ["#fffde5", "#78c679", "#1c4529"],
  ["#f029ad", "#d0d1e6", "#0081e7", "#176697"],
  ["#ee0028", "#fde090", "#fefbbf", "#e0f3f8", "#11016e"],
  ["#ffebeb", "#fc6767", "#0081e7", "#ec008c"]
];

export default {
  title: "Trianglify",
  fileName: "trianglify",
  author: "qrohlf",
  authorLink: "https://qrohlf.com/",
  thumb: "/thumbs/btrianglify.png",
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    },
    {
      key: "cell_size",
      text: "Cell Size",
      type: "range",
      defaultValue: 50,
      min: 20,
      max: 80
    },
    {
      key: "variance",
      text: "Variance",
      type: "range",
      defaultValue: 50,
      min: 0,
      max: 100
    }
  ]
};
