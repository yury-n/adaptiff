import { gradientPalettes } from "../palettes";

export default {
  author: "Colin van Eenige",
  authorLink: "https://codepen.io/cvaneenige/",
  title: "Bubbles",
  thumbs: ["/thumbs/bubbles/1.png"],
  config: [],
  palettes: [["#ff5252", "#8bc34a"], ...gradientPalettes],
  externalScripts: [
    "https://unpkg.com/three@0.100.0/build/three.js",
    "https://unpkg.com/three.phenomenon@1.0.0/dist/three.phenomenon.umd.js",
    "/libs/bubbles_phenomenon.js"
  ],
  pause: () => {
    window.pause = true;
  },
  unpause: () => {
    window.pause = false;
    window.animate();
  },
  generate: ({ palette }) => {
    window.palette = palette;
    const previewWrapper = document.querySelector("#preview-wrapper");
    const oldPreview = document.querySelector("#preview");
    if (oldPreview) {
      window.destroyScene();
      previewWrapper.removeChild(oldPreview);
    }
    const preview = document.createElement("canvas");
    preview.id = "preview";
    preview.classList.add("preview");
    previewWrapper.appendChild(preview);

    window.createBaseStructure();
    window.createInstance();
    window.animate();
    return null;
  },
  degenerate: () => {
    window.destroyScene();
  }
};
