const colors = [
  ["#00005e", "#21267a", "#285189", "#16b793", "#285189", "#16b793"],
  ["#00005e", "#21267a", "#285189", "#16b793", "#ffdf00", "#ff0004"],
  ["#2b2e4a", "#e84545", "#2b2e4a", "#e84545", "#903749", "#53354a"], //
  ["#ecfffb", "#b4f1f1", "#2d767f", "#1e6262", "#2d767f", "#1e6262"], //
  ["#f9f7f7", "#dbe2ef", "#3f72af", "#112d4e", "#3f72af", "#112d4e"], //
  ["#00005e", "#21267a", "#285189", "#285189", "#16b793", "#16b793"],
  ["#f73f51", "#ffea84", "#f4f4f4", "#7787c6", "#f4f4f4", "#7787c6"],
  ["#28353a", "#e8495e", "#ff847a", "#ffcea8", "#ff847a", "#ffcea8"],
  ["#7900ff", "#00b7ff", "#ff8a00", "#ff0081", "#f000aa", "#ff9b05"],
  ["#9B50ED", "#69D5FF", "#FFBD6E", "#ff0081", "#ff000a", "#001eff"],
  ["#ff0000", "#FF6400", "#FFDE6B", "#b7f7d3", "#70e8db", "#7a07f9"],
  ["#70e8db", "#FF0087", "#FFBD6E", "#FF3333", "#69D5FF", "#FF00E1"],
  ["#ff0000", "#ff8900", "#ff00c6", "#ff99e2", "#78fff0", "#f900b3"],
  ["#7a07f9", "#a82dfc", "#c163ff", "#f7edfc", "#c163ff", "#f7edfc"],
  ["#e87a7a", "#8c4f7f", "#8c75a5", "#babfd6", "#8c75a5", "#babfd6"],
  ["#1eaa89", "#60d1a3", "#9ef2c4", "#d6f9e8", "#9ef2c4", "#d6f9e8"],
  ["#f9fcfc", "#c9eff9", "#07a3b5", "#ffd8a5", "#07a3b5", "#ffd8a5"],
  ["#bf0caa", "#ea2ba3", "#f99696", "#f4c996", "#f99696", "#f4c996"],
  ["#ea285b", "#ff703f", "#ffb549", "#ffea7c", "#ffb549", "#ffea7c"],
  ["#f7f7f7", "#fcd69b", "#1ea8ce", "#2656c1", "#1ea8ce", "#2656c1"],
  ["#f7aa26", "#f9c45b", "#fff7b5", "#21665e", "#fff7b5", "#21665e"],
  ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#b83b5e", "#6a2c70"],
  ["#222831", "#393e46", "#00adb5", "#eeeeee", "#00adb5", "#eeeeee"],
  ["#f38181", "#fce38a", "#eaffd0", "#95e1d3", "#eaffd0", "#95e1d3"],
  ["#08d9d6", "#252a34", "#ff2e63", "#eaeaea", "#ff2e63", "#eaeaea"],
  ["#364f6b", "#3fc1c9", "#f5f5f5", "#fc5185", "#f5f5f5", "#fc5185"],
  ["#a8d8ea", "#aa96da", "#fcbad3", "#ffffd2", "#fcbad3", "#ffffd2"],
  ["#00b8a9", "#f8f3d4", "#f6416c", "#ffde7d", "#f6416c", "#ffde7d"],
  ["#e4f9f5", "#30e3ca", "#11999e", "#40514e", "#11999e", "#40514e"],
  ["#48466d", "#3d84a8", "#46cdcf", "#abedd8", "#46cdcf", "#abedd8"],
  ["#2b2e4a", "#e84545", "#903749", "#53354a", "#903749", "#53354a"]
];

export default {
  title: "Chromatic Liquids",
  fileName: "bgpainter/index",
  author: "Frank Hsu",
  authorLink: "http://www.fangyexu.com/",
  thumb: "/thumbs/b6.png",
  isPausable: true,
  config: [
    {
      key: "palette",
      text: "Palette",
      type: "palette",
      defaultValue: colors[0],
      options: colors
    }
  ]
};
