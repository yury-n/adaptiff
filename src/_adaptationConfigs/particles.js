const palettes = [
  ["#f4f8eb", "#1cc4f1", "#dc8a05"],
  ["#3c2957", "#fb4c2b", "#0450ff"],
  ["#273e3a", "#45c41c", "#93d0e0"],
  ["#a468f9", "#ffffff", "#f2ee0e"],
  ["#e5e5fd", "#5a215e"],
  ["#eafaf8", "#b0d8a2", "#93d0e0"],
  ["#e1d4f4", "#f5b4a8", "#9ab3ec"],
  ["#f8d5ab", "#015abe", "#ce0107"],
  ["#cce5c6", "#7abfa6", "#aabde0"],
  ["#b5d2ee", "#6fade2", "#d8b2d4"],
  ["#f1eb95", "#acdb8e", "#f1c4e5"],
  ["#bdd4f9", "#f8dcf8", "#6cb5f6"]
];

export default {
  title: "Connected particles",
  fileName: "particles",
  author: "marcbruederlin",
  authorLink: "https://github.com/marcbruederlin",
  thumb: "/thumbs/bconnected_particles.png",
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
      key: "maxParticles",
      text: "Number of particles",
      type: "range",
      defaultValue: 130,
      min: 10,
      max: 200
    },
    {
      key: "sizeVariations",
      text: "Size variations",
      type: "range",
      defaultValue: 10,
      min: 0,
      max: 30
    }
  ]
};
