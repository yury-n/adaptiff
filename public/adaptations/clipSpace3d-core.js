console.clear();

const twodWebGL = new WTCGL(
  document.querySelector("canvas#preview"),
  document.querySelector("script#vertexShader").textContent,
  document.querySelector("script#fragmentShader").textContent,
  window.innerWidth,
  window.innerHeight,
  1
);
twodWebGL.startTime = -0.5;
// twodWebGL.startTime = -100 + Math.random() * 50;

window.tdWebGL = twodWebGL;

window.addEventListener("resize", () => {
  twodWebGL.resize(window.innerWidth, window.innerHeight);
});

const uniforms = {
  shininess: 200,
  strength: 1,
  light_1_strength: 1.3,
  light_2_strength: 0.3,
  bump_strength: 0.9,
  fresnel_bias: 0.55,
  fresnel_scale: 1.5,
  fresnel_power: 2,
  light_colour: [255, 255, 255],
  object_colour: [20, 20, 20],
  bg_colour: [225, 235, 255],
  metalness: 0,
  cam_x: 1,
  cam_y: 1.5,
  cam_z: -3,
  cam_fov: 0.4,
  cam_zoom: 0.3,
  refl_power: 0.5,
  refl_blur: 6,

  spinning: false,
  curling: false,
  spin_phase: 0
};

// // Dat gui
// var gui = new dat.GUI();
// const f0 = gui.addFolder("Colours");
// const light_colour = f0.addColor(uniforms, "light_colour").name("Light Colour");
// const smoke_colour = f0
//   .addColor(uniforms, "object_colour")
//   .name("Surface Colour");
// const bg_colour = f0.addColor(uniforms, "bg_colour").name("Background");
// const f1 = gui.addFolder("Object");
// const bump_strength = f1
//   .add(uniforms, "bump_strength", 0, 2)
//   .name("Bump Strength")
//   .step(0.01);
// const shininess = f1
//   .add(uniforms, "shininess", 1, 200)
//   .name("Shininess")
//   .step(0.5);
// const strength = f1
//   .add(uniforms, "strength", 0, 2)
//   .name("Specular Strength")
//   .step(0.01);
// // const light_1_strength = gui.add(uniforms, 'light_1_strength', 0, 2).name("Light Strength main").step(0.01);
// // const light_2_strength = gui.add(uniforms, 'light_2_strength', 0, 2).name("Light Strength rim").step(0.01);
// const f2 = gui.addFolder("Fresnel Falloff");
// const fresnel_bias = f2
//   .add(uniforms, "fresnel_bias", 0, 2)
//   .name("Bias")
//   .step(0.01);
// const fresnel_scale = f2
//   .add(uniforms, "fresnel_scale", 0, 20)
//   .name("Scale")
//   .step(0.01);
// const fresnel_power = f2
//   .add(uniforms, "fresnel_power", 0, 20)
//   .name("Power")
//   .step(0.01);
// // const metalness = gui.add(uniforms, 'metalness', 0, 1).name("Metalness").step(0.01);
// const f3 = gui.addFolder("Environment");
// const refl_power = f3
//   .add(uniforms, "refl_power", 0, 2)
//   .name("Power")
//   .step(0.01);
// const refl_blur = f3
//   .add(uniforms, "refl_blur", 0, 10)
//   .name("Blur")
//   .step(0.01);
// const f4 = gui.addFolder("Camera");
// const cam_x = f4
//   .add(uniforms, "cam_x", -5, 5)
//   .name("Camera X")
//   .step(0.01);
// const cam_y = f4
//   .add(uniforms, "cam_y", -5, 5)
//   .name("Camera Y")
//   .step(0.01);
// const cam_z = f4
//   .add(uniforms, "cam_z", -5, 5)
//   .name("Camera Z")
//   .step(0.01);
// const cam_fov = f4
//   .add(uniforms, "cam_fov", -2, 2)
//   .name("Camera FoV")
//   .step(0.01);
// const cam_zoom = f4
//   .add(uniforms, "cam_zoom", -2, 2)
//   .name("Camera Zoom")
//   .step(0.01);
// const f5 = gui.addFolder("Animation");
// const spinning = f5.add(uniforms, "spinning").name("Spinning");
// const curling = f5.add(uniforms, "curling").name("Curling");
// const curl_phase = f5
//   .add(uniforms, "spin_phase", -1, 1)
//   .name("Curl Phase")
//   .step(0.01);

// const onChange = function(value) {
//   console.log(this);
//   twodWebGL.addUniform(this.property, WTCGL.TYPE_FLOAT, value);
// };
// const onChangeColour = function(value) {
//   let u = [...value];
//   u[0] /= 255;
//   u[1] /= 255;
//   u[2] /= 255;
//   twodWebGL.addUniform(this.property, WTCGL.TYPE_V3, u);
// };
// const onChangeBool = function(value) {
//   console.log(this.property);
//   twodWebGL.addUniform(this.property, WTCGL.TYPE_BOOL, value);
// };

// shininess.onChange(onChange);
// strength.onChange(onChange);
// // light_1_strength.onChange(onChange);
// // light_2_strength.onChange(onChange);
// bump_strength.onChange(onChange);
// fresnel_bias.onChange(onChange);
// fresnel_scale.onChange(onChange);
// fresnel_power.onChange(onChange);
// // metalness.onChange(onChange);
// cam_x.onChange(onChange);
// cam_y.onChange(onChange);
// cam_z.onChange(onChange);
// cam_fov.onChange(onChange);
// cam_zoom.onChange(onChange);
// refl_power.onChange(onChange);
// refl_blur.onChange(onChange);

// light_colour.onChange(onChangeColour);
// smoke_colour.onChange(onChangeColour);
// bg_colour.onChange(onChangeColour);

// spinning.onChange(onChangeBool);
// curling.onChange(onChangeBool);
// curl_phase.onChange(onChange);

for (let i in uniforms) {
  if (typeof uniforms[i] === "boolean") {
    twodWebGL.addUniform(i, WTCGL.TYPE_BOOL, uniforms[i]);
  } else if (typeof uniforms[i] === "number") {
    twodWebGL.addUniform(i, WTCGL.TYPE_FLOAT, uniforms[i]);
  } else if (uniforms[i].length === 3) {
    let u = [...uniforms[i]];
    u[0] /= 255;
    u[1] /= 255;
    u[2] /= 255;
    twodWebGL.addUniform(i, WTCGL.TYPE_V3, u);
  }
}

// track mouse move
let mousepos = [0, 0];
const u_mousepos = twodWebGL.addUniform("mouse", WTCGL.TYPE_V2, mousepos);
window.addEventListener("pointermove", e => {
  let ratio = window.innerHeight / window.innerWidth;
  if (window.innerHeight > window.innerWidth) {
    mousepos[0] = (e.pageX - window.innerWidth / 2) / window.innerWidth;
    mousepos[1] =
      ((e.pageY - window.innerHeight / 2) / window.innerHeight) * -1 * ratio;
  } else {
    mousepos[0] = (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio;
    mousepos[1] =
      ((e.pageY - window.innerHeight / 2) / window.innerHeight) * -1;
  }
  twodWebGL.addUniform("mouse", WTCGL.TYPE_V2, mousepos);
});

// Load all our textures. We only initiate the instance once all images are loaded.
const textures = [
  {
    name: "noise",
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png",
    type: WTCGL.IMAGETYPE_TILE,
    img: null
  },
  {
    name: "cube_NEGATIVE_Z",
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/miramar_bk.jpg",
    type: WTCGL.IMAGETYPE_TILE,
    img: null,
    defer: true
  },
  {
    name: "cube_NEGATIVE_X",
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/miramar_lf.jpg",
    type: WTCGL.IMAGETYPE_TILE,
    img: null,
    defer: true
  },
  {
    name: "cube_POSITIVE_Z",
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/miramar_ft.jpg",
    img: null,
    defer: true
  },
  {
    name: "cube_NEGATIVE_Y",
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/miramar_dn.jpg",
    img: null,
    defer: true
  },
  {
    name: "cube_POSITIVE_Y",
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/miramar_up.jpg",
    img: null,
    defer: true
  },
  {
    name: "cube_POSITIVE_X",
    url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/miramar_rt.jpg",
    img: null,
    defer: true
  }
];
const loadImage = function(imageObject) {
  let img = document.createElement("img");
  img.crossOrigin = "anonymous";

  return new Promise((resolve, reject) => {
    img.addEventListener("load", e => {
      imageObject.img = img;
      resolve(imageObject);
    });
    img.addEventListener("error", e => {
      reject(e);
    });
    img.src = imageObject.url;
  });
};
const loadTextures = function(textures) {
  return new Promise((resolve, reject) => {
    const loadTexture = pointer => {
      if (pointer >= textures.length || pointer > 10) {
        resolve(textures);
        return;
      }
      const imageObject = textures[pointer];

      const p = loadImage(imageObject);
      p.then(
        result => {
          if (!result.defer) {
            twodWebGL.addTexture(result.name, result.type, result.img);
          }
        },
        error => {
          console.log("error", error);
        }
      ).finally(e => {
        loadTexture(pointer + 1);
      });
    };
    loadTexture(0);
  });
};

loadTextures(textures).then(
  result => {
    const gl = twodWebGL.context;

    // Create a texture.
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);

    const faceInfos = [
      { target: gl.TEXTURE_CUBE_MAP_POSITIVE_X },
      { target: gl.TEXTURE_CUBE_MAP_NEGATIVE_X },
      { target: gl.TEXTURE_CUBE_MAP_POSITIVE_Y },
      { target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Y },
      { target: gl.TEXTURE_CUBE_MAP_POSITIVE_Z },
      { target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Z }
    ];

    textures.forEach(tex => {
      if (tex.name === "cube_POSITIVE_X") {
        faceInfos[4].img = tex.img;
      } else if (tex.name === "cube_NEGATIVE_X") {
        faceInfos[5].img = tex.img;
      } else if (tex.name === "cube_POSITIVE_Y") {
        faceInfos[3].img = tex.img;
      } else if (tex.name === "cube_NEGATIVE_Y") {
        faceInfos[2].img = tex.img;
      } else if (tex.name === "cube_POSITIVE_Z") {
        faceInfos[0].img = tex.img;
      } else if (tex.name === "cube_NEGATIVE_Z") {
        faceInfos[1].img = tex.img;
      }
    });

    faceInfos.forEach(faceInfo => {
      const { target, img } = faceInfo;

      // Upload the canvas to the cubemap face.
      const level = 0;
      const internalFormat = gl.RGBA;
      const format = gl.RGBA;
      const type = gl.UNSIGNED_BYTE;
      gl.texImage2D(target, level, internalFormat, format, type, img);
    });

    gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
    gl.texParameteri(
      gl.TEXTURE_CUBE_MAP,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR
    );
    twodWebGL.pushTexture(
      "cube_env",
      texture,
      faceInfos,
      gl.TEXTURE_CUBE_MAP,
      false
    );

    twodWebGL.initTextures();
    // twodWebGL.render();
    twodWebGL.running = true;
  },
  error => {
    console.log("error");
  }
);
