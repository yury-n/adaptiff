const palettes = [
  ["#fffccc", "#f28b3a", "#ee4a30", "#812326"],
  ["#f7fcfd", "#9ebcda", "#8b96c5", "#4e1a4b"],
  ["#f029ad", "#d0d1e6", "#0081e7", "#176697"],
  ["#ffebeb", "#fc6767", "#0081e7", "#ec008c"]
];

export default {
  title: "ribbons",
  fileName: "ribbons/index",
  author: "test",
  authorLink: "https://test.com/",
  thumbs: ["/thumbs/todo.png"],
  config: [
    {
      key: "palette",
      text: "Palettes",
      type: "palette",
      defaultValue: palettes[0],
      options: palettes
    }
  ]
};
