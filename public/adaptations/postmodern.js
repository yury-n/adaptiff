function create() {
  var canvas = document.getElementById("preview");
  var ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var min_x = 80;
  var min_y = 80;
  var max_x = canvas.width - min_x;
  var max_y = canvas.height - min_y;

  var min_w = 20;
  var max_w = 80;
  var min_h = 20;
  var max_h = 80;
  var count = window.count;
  var solidPercent = 10;
  var lineWidth = window.lineWidth;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = window.palette[0];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = lineWidth;
    for (var i = 0; i <= count; i++) {
      var x = randomIntBetween(min_x, max_x);
      var y = randomIntBetween(min_y, max_y);
      var w = randomIntBetween(min_w, max_w);
      var h = randomIntBetween(min_h, max_h);
      var c = window.palette[randomIntBetween(1, 2)];

      if (randomIntBetween(0, 100) < solidPercent) {
        // chance of a solid fill
        var hex = c;
        ctx.fillStyle = hex;
        ctx.fillRect(x, y, w, h);
      } else {
        ctx.strokeStyle = c;
        ctx.strokeRect(x, y, w, h);
      }
    }
  }

  // Helper functions
  // return a random integer between min and max inclusive
  function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  draw();
}
