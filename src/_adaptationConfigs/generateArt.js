const palettes = [
  ["#fff5fe", "#fba1a4", "#ec1d23"],
  ["#ffffff", "#fba1a4", "#990005"],
  ["#ffffff", "#ecd6af", "#eba118"],
  ["#ecd6af", "#ffffff", "#90661b"],
  ["#edf4fe", "#fe95fe", "#6cb5f6"],

  ["#f1eb95", "#3da000", "#d20d91"],
  ["#f4f8eb", "#1cc4f1", "#dc8a05"],
  ["#3c2957", "#fb4c2b", "#0450ff"],
  ["#eafaf8", "#b0d8a2", "#93d0e0"],
  ["#e1d4f4", "#f5b4a8", "#9ab3ec"],
  ["#f8d5ab", "#a6c4e6", "#ed7f82"],
  ["#cce5c6", "#7abfa6", "#aabde0"],
  ["#b5d2ee", "#6fade2", "#d8b2d4"],
  ["#f1eb95", "#acdb8e", "#f1c4e5"],
  ["#bdd4f9", "#f8dcf8", "#6cb5f6"]
];

export default {
  title: "Generate Art",
  fileName: "generate_art",
  author: "Phillip Broadbent ",
  authorLink: "https://codepen.io/phil_broadbent/",
  thumbs: ["/thumbs/generateArt/1.png"],
  refreshIframe: true,

  config: [
    {
      key: "shape",
      text: "Shape",
      type: "select",
      defaultValue: "diagonal",

      options: [
        { key: 0, text: "Diagonals", value: "diagonal" },
        { key: 3, text: "Orthogonals", value: "orthogonals" },
        { key: 4, text: "Quarter Arc", value: "quarterArc" }
      ]
    },

    {
      key: "iteration",
      text: "Density",
      type: "range",
      defaultValue: 50,
      min: 1,
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
