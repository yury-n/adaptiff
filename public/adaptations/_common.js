window.addEventListener(
  "message",
  function(event) {
    window.render(event.data);
  },
  false
);
