window.addEventListener(
  "message",
  function(event) {
    if (event.data.type === "render") {
      window.aff_render(event.data.payload);
    } else if (event.data.type === "download") {
      window.aff_download();
    }
  },
  false
);
