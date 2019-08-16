function stringifyColor(color) {
  if (typeof color === "string") {
    return color;
  }
  const { r, g, b, a } = color;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
function aff_render(config) {
  if (config.palette) {
    document.getElementById("gradient").innerHTML = `
    <stop offset="0" stop-color="${stringifyColor(config.palette[0])}" />
    <stop offset=".99" stop-color="${stringifyColor(config.palette[1])}" />
    `;
  } else {
    document.getElementById("svg").style.color = config.color;
  }
}
function aff_download() {
  var canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var svg = document.getElementById("svg");
  var ctx = canvas.getContext("2d");
  var data = new XMLSerializer().serializeToString(svg);
  var DOMURL = window.URL || window.webkitURL || window;

  var img = new Image();
  var svgBlob = new Blob([data], {
    type: "image/svg+xml;base64;charset=utf-8"
  });
  var url = DOMURL.createObjectURL(svgBlob);

  img.onload = function() {
    ctx.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
    DOMURL.revokeObjectURL(url);

    var imgURI = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    postDownloadImage({ image: imgURI });
  };

  img.src = url;
}
