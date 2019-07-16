function create() {
  const {
    innerWidth: width,
    innerHeight: height,
    minRadius: customMinRadius,
    maxRadius: customMaxRadius,
    lineWidth,
    filled,
    palette,
  } = window;

  const canvas = document.getElementById('preview');
  const context = canvas.getContext('2d');
  var size = { width, height };
  canvas.width = size.width;
  canvas.height = size.height;

  context.lineWidth = lineWidth;

  var circles = [];
  var minRadius = customMinRadius;
  var maxRadius = customMaxRadius;
  // TODO
  var totalCircles = 200;
  var createCircleAttempts = 500;

  function createAndDrawCircle() {

    var newCircle;
    var circleSafeToDraw = false;
    for( var tries = 0; tries < createCircleAttempts; tries++) {
      newCircle = {
        x: Math.floor(Math.random() * size.width),
        y: Math.floor(Math.random() * size.height),
        radius: minRadius
      }

      if(doesCircleHaveACollision(newCircle)) {
        continue;
      } else {
        circleSafeToDraw = true;
        break;
      }
    }

    if(!circleSafeToDraw) {
      return;
    }

    for(var radiusSize = minRadius; radiusSize < maxRadius; radiusSize++) {
      newCircle.radius = radiusSize;
      if(doesCircleHaveACollision(newCircle)){
        newCircle.radius--
        break;
      }
    }

    circles.push(newCircle);
    const currentColor = palette[Math.floor(Math.random()*3)]
    if (filled) {
      context.fillStyle = currentColor;
    } else {
      context.strokeStyle = currentColor;
    }
    context.beginPath();
    context.arc(newCircle.x, newCircle.y, newCircle.radius, 0, 2*Math.PI);
    if (filled) {
      context.closePath();
      context.fill();
    } else {
      context.stroke();
    }
  }

  function doesCircleHaveACollision(circle) {
    for(var i = 0; i < circles.length; i++) {
      var otherCircle = circles[i];
      var a = circle.radius + otherCircle.radius;
      var x = circle.x - otherCircle.x;
      var y = circle.y - otherCircle.y;

      if (a >= Math.sqrt((x*x) + (y*y))) {
        return true;
      }
    }

    if ( circle.x + circle.radius >= size.width ||
      circle.x - circle.radius <= 0 ) {
      return true;
    }

    if (circle.y + circle.radius >= size.height ||
        circle.y-circle.radius <= 0 ) {
      return true;
    }

    return false;
  }

  for( var i = 0; i < totalCircles; i++ ) {
    createAndDrawCircle();
  }
}