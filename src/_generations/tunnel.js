export default {
  author: "Mamboleoo",
  authorLink: "https://github.com/Mamboleoo",
  title: "Triangle tunnel",
  thumbs: ["/thumbs/tunnel/1.png"],
  config: [],
  palettes: [
    ["#eafaf8", "#b0d8a2", "#93d0e0"],
    ["#e1d4f4", "#f5b4a8", "#9ab3ec"],
    ["#f8d5ab", "#a6c4e6", "#ed7f82"],
    ["#f4f8eb", "#6cc9e2", "#ecb968"],
    ["#cce5c6", "#7abfa6", "#aabde0"],
    ["#b5d2ee", "#6fade2", "#d8b2d4"],
    ["#f1eb95", "#acdb8e", "#f1c4e5"],
    ["#bdd4f9", "#f8dcf8", "#6cb5f6"]
  ],
  externalScripts: [
    "https://cdnjs.cloudflare.com/ajax/libs/three.js/100/three.min.js",
    "/libs/perlin.js",
    "/libs/tubes.js"
  ],
  generate: ({ palette }) => {
    const previewWrapper = document.querySelector("#preview-wrapper");
    const oldPreview = document.querySelector("#preview");
    if (oldPreview) {
      previewWrapper.removeChild(oldPreview);
    }
    const preview = document.createElement("canvas");
    preview.id = "preview";
    preview.classList.add("preview");
    previewWrapper.appendChild(preview);
    window.SetTunnelWindow(
      previewWrapper.offsetWidth,
      previewWrapper.offsetHeight
    );
    window.tunnel = new window.Tunnel();
    return null;
  }
};
