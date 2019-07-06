let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("id", "svg");
document.body.appendChild(svg);
/*--------------------
SETTINGS
--------------------*/
let settings = {};

/*--------------------
VARS
--------------------*/
let winW = window.innerWidth,
  winH = window.innerHeight,
  Colors = [],
  Paths = [],
  Mouse = {
    x: winW / 2,
    y: winH / 2
  },
  overflow,
  startColor,
  endColor,
  gui;

/*--------------------
PATH
--------------------*/
class Path {
  constructor(y, fill, offsetX) {
    this.rootY = y;
    this.fill = fill;
    this.offsetX = offsetX;
  }

  createRoot() {
    this.root = [];
    let offsetX = this.offsetX;
    let x = -overflow + offsetX;
    let y = 0;
    let rootY = this.rootY;
    let upSideDown = 0;

    this.root.push({ x: x, y: rootY });

    while (x < winW) {
      let value = Math.random() > 0.5 ? 1 : -1; // TODO: explore upsidedown

      // Crazyness
      if (settings.randomValues.length > 0) {
        x += parseInt(
          (settings.randomValues[0] * settings.amplitudeX) / 2 +
            settings.amplitudeX / 2
        );
        y =
          parseInt(
            (settings.randomValues[1] * settings.amplitudeY) / 2 +
              settings.amplitudeY / 2
          ) *
            value +
          rootY;
      } else {
        // Geometric
        upSideDown = !upSideDown;
        value = upSideDown == 0 ? 1 : -1;

        x += settings.amplitudeX;
        y = settings.amplitudeY * value + rootY;
      }

      this.root.push({ x: x, y: y });
    }

    this.root.push({ x: winW + overflow, y: rootY });
  }

  createCircles() {
    const fill = "#fff";
    this.root.forEach(function(key, obj) {
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("r", 1);
      circle.setAttribute("cx", key.x);
      circle.setAttribute("cy", key.y);
      circle.setAttribute("fill", "rgba(255, 255, 255, .3)");
      svg.appendChild(circle);
    });
  }

  createPath() {
    const root = this.root;
    const fill = this.fill;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    if (settings.fill) {
      path.setAttribute("fill", fill);
      path.setAttribute("stroke", "none");
    } else {
      path.setAttribute("stroke", fill);
      path.setAttribute("fill", "none");
    }
    svg.appendChild(path);
    // if (settings.fill) {
    //   svg.setAttribute("class", "path");
    // } else {
    //   svg.setAttribute("class", "stroke");
    // }

    // first & second points
    let d = `M -${overflow} ${winH + overflow}`;
    d += ` L ${root[0].x} ${root[0].y}`;

    // magic points
    for (let i = 1; i < this.root.length - 1; i++) {
      let prevPoint = root[i - 1];
      let actualPoint = root[i];
      let diffX = (actualPoint.x - prevPoint.x) / settings.smoothness;
      let x1 = prevPoint.x + diffX;
      let x2 = actualPoint.x - diffX;
      let x = actualPoint.x;
      let y1 = prevPoint.y;
      let y2 = actualPoint.y;
      let y = actualPoint.y;

      d += ` C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`;
    }

    // Second last
    const reverseRoot = root.reverse();
    d += ` L ${reverseRoot[0].x} ${reverseRoot[0].y}`;
    root.reverse();

    // Last point
    d += ` L ${winW + overflow} ${winH + overflow}`;

    // Close path
    d += ` Z`;

    path.setAttribute("d", d);
  }

  createLines() {
    const root = this.root;
    const fill = this.fill;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", fill);
    path.classList.add("path");
    svg.appendChild(path);

    // first & second points
    let d = `M -${overflow} ${winH + overflow}`;
    d += ` L ${root[0].x} ${root[0].y}`;

    // Magic points
    for (let i = 1; i < root.length - 1; i++) {
      d += ` L ${root[i].x} ${root[i].y}`;
    }

    // Second last & last points
    const reverseRoot = root.reverse();
    d += ` L ${reverseRoot[0].x} ${reverseRoot[0].y}`;
    d += ` L ${winW + overflow} ${winH + overflow}`;
    root.reverse();

    // Close path
    d += ` Z`;

    path.setAttribute("d", d);
  }
}

// Converter RGB to HSL

function hexToHSL(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  r = parseInt(result[1], 16);
  g = parseInt(result[2], 16);
  b = parseInt(result[3], 16);
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  var HSL = new Object();
  HSL["h"] = h;
  HSL["s"] = s;
  HSL["l"] = l;

  HSL["s"] = Math.round(s * 100);
  HSL["l"] = Math.round(l * 100);
  HSL["h"] = Math.round(360 * h);

  return "hsl(" + HSL["h"] + ", " + HSL["s"] + "%, " + HSL["l"] + "%)";
}

/*--------------------
INIT
--------------------*/
function init(hexStart, hexEnd) {
  settings = {
    amplitudeX: window.amplituteX,
    amplitudeY: window.amplituteY,
    lines: window.lines,
    hueStartColor: 255,
    saturationStartColor: 74,
    lightnessStartColor: 67,
    hueEndColor: 0,
    saturationEndColor: 100,
    lightnessEndColor: 7,
    smoothness: window.smoothness / 10,
    offsetX: 10,
    fill: window.fill,
    randomValues: window.randomValues
  };

  // Overflow
  overflow = Math.abs(settings.lines * settings.offsetX);

  // Colors
  startColor = hexToHSL(hexStart);
  endColor = hexToHSL(hexEnd);
  Colors = chroma
    .scale([startColor, endColor])
    .mode("lch")
    .colors(settings.lines + 2);

  // Reset
  Paths = [];
  document.body.removeChild(svg);
  svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("id", "svg");
  document.body.appendChild(svg);

  // Background
  if (settings.fill) {
    svg.style.backgroundColor = Colors[0];
  }

  // Lines
  for (let i = 0; i < settings.lines + 1; i++) {
    let rootY = parseInt((winH / settings.lines) * i);
    const path = new Path(rootY, Colors[i + 1], settings.offsetX * i);
    Paths.push(path);
    path.createRoot();
  }
  Paths.forEach(function(path) {
    path.createPath();
  });
}
window.init = init;

/*--------------------
WIN RESIZE
--------------------*/
window.addEventListener("resize", function() {
  winW = window.innerWidth;
  winH = window.innerHeight;
  init(window.startColor, window.endColor);
});

/*--------------------
RANDOMIZE
--------------------*/
function randomize() {
  settings = {
    lines: parseInt(5 + Math.random() * 45),
    amplitudeX: parseInt(20 + Math.random() * 300),
    amplitudeY: parseInt(Math.random() * 200),
    hueStartColor: parseInt(Math.random() * 360),
    saturationStartColor: 74,
    lightnessStartColor: 67,
    hueEndColor: parseInt(Math.random() * 360),
    saturationEndColor: 90,
    lightnessEndColor: 14,
    smoothness: 1 + parseInt(Math.random() * 9),
    offsetX: parseInt(-20 + Math.random() * 40),
    fill: Math.random() * 1 > 0.3 ? true : false,
    crazyness: Math.random() * 1 > 0.9 ? true : false
  };
  init(window.startColor, window.endColor);
  gui.destroy();
}
