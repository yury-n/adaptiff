function stringifyColor(color) {
  if (typeof color === "string") {
    return color;
  }
  const { r, g, b, a } = color;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
function generateGradientInnerHTML(palette) {
  let html = "";
  let currentOffset = 0;
  const offsetStep = Math.floor(100 / (palette.length - 1));
  palette.forEach(color => {
    html += `<stop offset="${currentOffset}%" stop-color="${stringifyColor(
      color
    )}" />`;
    currentOffset += offsetStep;
  });
  return html;
}
function aff_render(config) {
  document.querySelector("svg").setAttribute("preserveAspectRatio", "none");
  if (config.palette) {
    const gradients = document.querySelectorAll(
      "#gradient, .gradient, linearGradient"
    );
    gradients.forEach(gradient => {
      gradient.innerHTML = generateGradientInnerHTML(config.palette);
      if (config.angle) {
        gradient.setAttribute("gradientTransform", `rotate(-${config.angle})`);
      }
    });
  } else {
    document.querySelector("#svg, svg").style.color = config.color;
  }
}
function aff_download() {
  var canvas = document.createElement("canvas");
  canvas.width = window.innerWidth * 2;
  canvas.height = window.innerHeight * 2;
  var svg = document.querySelector("#svg, svg");
  var ctx = canvas.getContext("2d");
  var data = new XMLSerializer().serializeToString(svg);
  var DOMURL = window.URL || window.webkitURL || window;

  var img = new Image();
  var svgBlob = new Blob([data], {
    type: "image/svg+xml;base64;charset=utf-8"
  });
  var url = DOMURL.createObjectURL(svgBlob);

  img.onload = function() {
    ctx.drawImage(img, 0, 0, window.innerWidth * 2, window.innerHeight * 2);
    DOMURL.revokeObjectURL(url);

    var imgURI = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    postDownloadImage({ image: imgURI });
  };

  img.src = url;
}
