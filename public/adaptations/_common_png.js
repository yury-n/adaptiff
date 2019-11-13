function screenshot(imgNode) {
  var format =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "png";
  var quality =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.97;

  var canvas = document.createElement("canvas");
  canvas.width = imgNode.width;
  canvas.height = imgNode.height;

  var context = canvas.getContext("2d");
  context.filter = getComputedStyle(imgNode).filter;

  imgNode.setAttribute("crossOrigin", "anonymous");

  context.drawImage(imgNode, 0, 0, canvas.width, canvas.height);
  var url = canvas.toDataURL("image/" + format, quality);

  return {
    url: url,
    then: function then(cb) {
      cb(url);
    }
  };
}

function aff_render(config) {
  const img = document.querySelector("img");
  console.log({ img });
  if (!img) {
    return;
  }
  img.style.filter = `hue-rotate(${config.hue}deg) saturate(${config.saturate}%) brightness(${config.brightness}%) contrast(${config.contrast}%)`;
}
function aff_download() {
  const img = document.querySelector("img");
  screenshot(img).then(url => {
    postDownloadImage({ image: url });
  });
}
