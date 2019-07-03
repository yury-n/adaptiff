window.addEventListener(
  "message",
  function(event) {
    if (event.data.type === "render") {
      window.aff_render && window.aff_render(event.data.payload);
    } else if (event.data.type === "download") {
      window.aff_download && window.aff_download();
    } else if (event.data.type === "pause") {
      window.aff_pause && window.aff_pause();
    } else if (event.data.type === "unpause") {
      window.aff_unpause && window.aff_unpause();
    }
  },
  false
);

function postDownloadImage({ image }) {
  const objectId = getQueryVariable("object_id");
  window.parent.postMessage({ type: "download", image, objectId }, "*");
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}
