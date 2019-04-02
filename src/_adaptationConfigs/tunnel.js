export default {
  author: "Mamboleoo",
  authorLink: "https://github.com/Mamboleoo",
  title: "Triangle tunnel",
  thumbs: ["/thumbs/tunnel/1.png"],
  config: [],
  externalScripts: [
    "https://cdnjs.cloudflare.com/ajax/libs/three.js/100/three.min.js",
    "/libs/perlin.js",
    "/libs/tubes.js"
  ],
  generate: ({ hue }) => {
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
