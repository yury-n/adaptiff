// Copyright (c) 2019 by Colin van Eenige (https://codepen.io/cvaneenige/pen/aXmRyW)

function getArrayWithNoise(array, noise) {
  return array.map(item => item + getRandomBetween(noise));
}

function getRandomBetween(value) {
  const floor = -value;
  return floor + Math.random() * value * 2;
}

let instance;
let scene;
let renderer;
let camera;
let plane;
let light;

function destroyScene() {
  renderer.dispose();
}

function createInstance() {
  const duration = 0.2;

  const geometry = new THREE.IcosahedronGeometry(2, 2);

  // const multiplier = 50;

  const material = new THREE.MeshPhongMaterial({
    color: window.palette[0],
    emissive: window.palette[0],
    flatShading: false,
    shininess: 100
  });

  const castShadow = true;

  const S = 20;
  const positions = [];
  for (let z = -S; z < S; z += 1) {
    for (let x = -S; x < S; x += 1) {
      positions.push(x, z);
    }
  }

  const multiplier = positions.length / 2;

  const attributes = [
    {
      name: "aPositionStart",
      size: 3,
      data: i => [getRandomBetween(5), getRandomBetween(5), getRandomBetween(5)]
    },
    {
      name: "aControlPointOne",
      data: i => [
        getRandomBetween(5),
        getRandomBetween(5),
        getRandomBetween(5)
      ],
      size: 3
    },
    {
      name: "aControlPointTwo",
      data: i => [
        getRandomBetween(5),
        getRandomBetween(5),
        getRandomBetween(5)
      ],
      size: 3
    },
    {
      name: "aPositionEnd",
      size: 3,
      data: i => [getRandomBetween(5), getRandomBetween(5), getRandomBetween(5)]
    },
    {
      name: "aOffset",
      data: i => [i * ((1 - duration) / (multiplier - 1))],
      size: 1
    }
  ];

  const uniforms = {
    time: {
      value: 0
    }
  };

  const vertex = `
      attribute vec3 aPositionStart;
      attribute vec3 aControlPointOne;
      attribute vec3 aControlPointTwo;
      attribute vec3 aPositionEnd;
      attribute float aOffset;
      uniform float time;
  
      float easeInOutSin(float t){
        return (1.0 + sin(${Math.PI} * t - ${Math.PI} / 2.0)) / 2.0;
      }
  
      vec4 quatFromAxisAngle(vec3 axis, float angle) {
        float halfAngle = angle * 0.5;
        return vec4(axis.xyz * sin(halfAngle), cos(halfAngle));
      }
  
      vec3 rotateVector(vec4 q, vec3 v) {
        return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
      }
  
      vec3 bezier4(vec3 a, vec3 b, vec3 c, vec3 d, float t) {
        return mix(mix(mix(a, b, t), mix(b, c, t), t), mix(mix(b, c, t), mix(c, d, t), t), t);
      }
  
      void main(){
        float tProgress = easeInOutSin(min(1.0, max(0.0, (time - aOffset)) / ${duration}));
        vec4 quatX = quatFromAxisAngle(vec3(1.0, 0.0, 0.0), -10.0 * tProgress);
        vec4 quatY = quatFromAxisAngle(vec3(0.0, 0.0, 0.0), -5.0 * tProgress);
        vec3 basePosition = rotateVector(quatX, rotateVector(quatY, position));
        vec3 newPosition = bezier4(aPositionStart, aControlPointOne, aControlPointTwo, aPositionEnd, tProgress);
        float scale = tProgress * 2.0 - 1.0;
        scale = 1.0 - scale * scale;
        basePosition *= scale;
        vNormal = rotateVector(quatX, vNormal);
        gl_Position = basePosition + newPosition;
      }
    `;

  //      vNormal = rotateVector(quatX, vNormal);
  instance = new THREE.Phenomenon({
    geometry,
    multiplier,
    material,
    castShadow,
    attributes,
    uniforms,
    vertex
  });

  scene.add(instance.mesh);
}

// Base structure --

function createBaseStructure() {
  !(function(e, r) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = r())
      : "function" == typeof define && define.amd
      ? define(r)
      : (e.Phenomenon = r());
  })(this, function() {
    var e = (function(e) {
        function r(r) {
          e.call(this);
          var t = r.geometry,
            a = r.multiplier,
            n = r.attributes,
            o = t.vertices.length,
            i = 3 * t.faces.length,
            f = [];
          t.faces.map(function(e) {
            return f.push(e.a, e.b, e.c);
          });
          for (var s = new Uint32Array(a * i), u = 0; u < a; u += 1)
            for (var c = 0; c < i; c += 1) s[u * i + c] = f[c] + u * o;
          this.setIndex(new THREE.BufferAttribute(s, 1));
          var m = new THREE.BufferAttribute(new Float32Array(a * o * 3), 3);
          this.addAttribute("position", m);
          for (var d = 0, h = 0; h < a; h += 1)
            for (var v = 0; v < o; v += 1, d += 3) {
              var l = t.vertices[v];
              (m.array[d] = l.x),
                (m.array[d + 1] = l.y),
                (m.array[d + 2] = l.z);
            }
          for (var p = 0; p < n.length; p += 1) {
            var y = new Float32Array(a * o * n[p].size),
              E = new THREE.BufferAttribute(y, n[p].size);
            this.addAttribute(n[p].name, E);
            for (var S = 0; S < a; S += 1) {
              var x = n[p].data(S, a);
              d = S * o * E.itemSize;
              for (var b = 0; b < o; b += 1)
                for (var g = 0; g < E.itemSize; g += 1)
                  (E.array[d] = x[g]), (d += 1);
            }
          }
          return this;
        }
        return (
          e && (r.__proto__ = e),
          ((r.prototype = Object.create(e && e.prototype)).constructor = r),
          r
        );
      })(THREE.BufferGeometry),
      r = function(r) {
        var t = r.material,
          a = r.uniforms,
          n = r.vertex,
          o = r.castShadow;
        void 0 === o && (o = !1);
        var i = new e(r),
          f = new THREE.Mesh(i, t);
        return (
          f.geometry.computeVertexNormals(),
          (t.onBeforeCompile = function(e) {
            Object.assign(e.uniforms, a);
            var r = n.replace(/(\r\n|\n|\r)/gm, ""),
              i = r.match(/.+?(?=void)/)[0],
              s = r.match(/main\(\){(.*?)}/)[1];
            if (
              ((e.vertexShader = i + " \n " + e.vertexShader),
              (e.vertexShader = e.vertexShader.replace(
                "#include <begin_vertex>",
                s.replace("gl_Position =", "vec3 transformed =")
              )),
              (t.onBeforeCompile =
                t.onBeforeCompile.toString().slice(0, -1) +
                "/* " +
                Math.random() +
                " */}"),
              o)
            ) {
              var u = new THREE.ShaderMaterial({
                vertexShader: e.vertexShader,
                fragmentShader: THREE.ShaderLib.shadow.fragmentShader,
                uniforms: a
              });
              (f.castShadow = !0),
                (f.customDepthMaterial = u),
                (f.customDistanceMaterial = u);
            }
          }),
          { mesh: f, uniforms: a }
        );
      };
    return (THREE.Phenomenon = r), r;
  });

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector("#preview")
  });

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  renderer.setClearColor(0x212121, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(1);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );
  camera.position.set(0, 20 * 1, 35 * 1);
  camera.lookAt(scene.position);
  scene.add(camera);

  const ambientLight = new THREE.AmbientLight("#ffffff", 0.1);
  scene.add(ambientLight);

  plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000),
    new THREE.MeshPhongMaterial({
      emissive: window.palette[1]
    })
  );
  plane.receiveShadow = true;
  plane.position.y = -15;
  plane.rotation.x = Math.PI * -0.5;
  scene.add(plane);

  light = new THREE.SpotLight(0xffffff, 3, 80, Math.PI * 0.25, 1, 2);
  light.position.set(0, 40, 0);
  light.castShadow = true;
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;
  light.shadow.camera.near = 0.5;
  light.shadow.camera.far = 31;

  scene.add(light);
}

function animate() {
  if (window.pause) {
    return;
  }
  requestAnimationFrame(animate);
  if (instance.uniforms.time.value >= 1) {
    instance.uniforms.time.value = 0;
  }
  instance.uniforms.time.value += 1 / (8 * 60);
  renderer.render(scene, camera);
}

// TODO: react on popup resize

// window.addEventListener(
//   "resize",
//   () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize(window.innerWidth, window.innerHeight);
//   },
//   false
// );
