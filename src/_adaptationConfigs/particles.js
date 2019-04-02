let particles;

export default {
  author: "marcbruederlin",
  authorLink: "https://github.com/marcbruederlin",
  title: "Connected particles",
  thumbs: ["/thumbs/particles/1.png"],
  externalScripts: [
    "https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js"
  ],
  config: [
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
  ],
  palettes: [
    ["#f4f8eb", "#1cc4f1", "#dc8a05"],
    ["#3c2957", "#fb4c2b", "#0450ff"],
    ["#e5e5fd", "#5a215e"],
    ["#eafaf8", "#b0d8a2", "#93d0e0"],
    ["#e1d4f4", "#f5b4a8", "#9ab3ec"],
    ["#f8d5ab", "#a6c4e6", "#ed7f82"],
    ["#cce5c6", "#7abfa6", "#aabde0"],
    ["#b5d2ee", "#6fade2", "#d8b2d4"],
    ["#f1eb95", "#acdb8e", "#f1c4e5"],
    ["#bdd4f9", "#f8dcf8", "#6cb5f6"]
  ],
  generate: ({ palette, maxParticles, sizeVariations }) => {
    const previewWrapper = document.querySelector("#preview-wrapper");
    const oldPreview = document.querySelector("#preview");
    if (oldPreview) {
      previewWrapper.removeChild(oldPreview);
      particles.destroy();
    }
    const preview = document.createElement("canvas");
    preview.id = "preview";
    preview.classList.add("preview");
    preview.style.backgroundColor = palette[0];
    previewWrapper.appendChild(preview);
    particles = window.Particles.init({
      selector: "#preview",
      color: palette.slice(1, palette.length),
      maxParticles,
      sizeVariations,
      connectParticles: true
    });
    return null;
  },
  degenerate: () => {
    const previewWrapper = document.querySelector("#preview-wrapper");
    const oldPreview = document.querySelector("#preview");
    previewWrapper.removeChild(oldPreview);
    particles.destroy();
  }
};
