import React from "react";

export default {
  author: "qrohlf",
  authorLink: "https://qrohlf.com/",
  title: "Trianglify",
  thumbs: ["/thumbs/trianglify/1.jpg"],
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
    }
  ],
  palettes: [
    ["#fffccc", "#fcd975", "#f28b3a", "#ee4a30", "#be3626", "#812326"],
    ["#fef7f3", "#f7c5bf", "#ed66a0", "#af3c7e", "#4a216a"],
    ["#f7fcfd", "#9ebcda", "#8b96c5", "#4e1a4b"],
    ["#fffde5", "#78c679", "#1c4529"],
    ["#fdf7fb", "#d0d1e6", "#2070b0", "#0d3858"],
    ["#9f2f42", "#fde090", "#fefbbf", "#e0f3f8", "#5d4fa2"]
  ],
  externalScript:
    "https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js",
  generate: ({ cell_size, variance, palette }) => {
    const previewWrapper = document.querySelector("#preview-wrapper");
    const oldPreview = document.querySelector("#preview");
    if (oldPreview) {
      previewWrapper.removeChild(oldPreview);
    }
    const preview = document.createElement("div");
    preview.id = "preview";
    preview.classList.add("preview");
    const pattern = window.Trianglify({
      width: previewWrapper.offsetWidth,
      height: previewWrapper.offsetHeight,
      cell_size,
      variance: variance / 100,
      x_colors: palette
    });
    preview.appendChild(pattern.canvas());
    previewWrapper.appendChild(preview);
    return null;
  }
};
