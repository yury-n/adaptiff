const palettes = [
  ["#fffccc", "#f28b3a", "#ee4a30", "#812326"],
  ["#7f3b14", "#f7b862", "#f7f7f7", "#b2abd2", "#542a87"],
  ["#fcfbfd", "#dadaeb", "#bcbddc", "#807db9", "#41257d"],
  ["#fef7f3", "#f7c5bf", "#ed66a0", "#af3c7e", "#4a216a"],
  ["#f7fcfd", "#9ebcda", "#8b96c5", "#4e1a4b"],
  ["#fffde5", "#78c679", "#1c4529"],
  ["#fdf7fb", "#d0d1e6", "#2070b0", "#0d3858"],
  ["#9f2f42", "#fde090", "#fefbbf", "#e0f3f8", "#5d4fa2"]
];

export default {
  title: "Trianglify",
  fileName: "trianglify",
  author: "qrohlf",
  authorLink: "https://qrohlf.com/",
  thumbs: ["/thumbs/trianglify/1.png"],
  config: [
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
    },
    {
      key: "palette",
      text: "Palettes",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    }
  ]
};
