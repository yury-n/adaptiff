let line_gap = 20;

function setup() {
  const canvas = createCanvas(900, 900);
  canvas.parent("preview-wrapper");

  // createCanvas(720, 1280);
  noLoop();

  line_gap = floor(random(10, 30));
}

function draw() {
  background(255);
  let c = color(window.color1 || "#000");
  fill(c);
  noStroke();

  for (var y = -20; y < height + 20; y += line_gap) {
    for (let x = -10; x < width + 10; x++) {
      ellipse(
        x,
        y +
          20 *
            sin(
              (x + y) *
                line_gap *
                0.01 *
                0.4 *
                noise(
                  frameCount * x * 0.0001,
                  line_gap * y * 0.0001 * x * 0.001
                )
            ),
        5 +
          (line_gap / 2) *
            sin(
              (x + y) *
                line_gap *
                0.01 *
                0.02 *
                noise(
                  frameCount * x * 0.0001,
                  line_gap * y * 0.0001 * x * 0.0001
                )
            )
      );
    }
  }
}
