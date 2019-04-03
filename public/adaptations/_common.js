window.addEventListener(
  "message",
  function(event) {
    if (event.data.type === "render") {
      window.adaptiffRender(event.data.payload);
    } else if (event.data.type === "download") {
      window.adaptiffDownload();
    }
  },
  false
);
