// Copyright (c) 2019 by Levi Boenish (https://codepen.io/leviboenish/pen/pGPjQg)
let renderer,
  camera,
  distortion,
  scene,
  shape,
  size,
  light,
  light2,
  geometry,
  material,
  mesh,
  metalness,
  weight;

function create() {
  size = window.size;
  weight = window.weight;
  distortion = window.distortion;

  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#preview"),
    antialias: true
  });
  renderer.setClearColor(window.palette[0]);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  //camera
  camera = new THREE.PerspectiveCamera(
    15,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  );

  //scene
  scene = new THREE.Scene();
  //lights
  light = new THREE.PointLight(0x632c65, 3.5);
  light2 = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light, light2);

  //object
  geometry = new THREE.TorusKnotGeometry(
    size,
    weight,
    distortion,
    20,
    15,
    shape
  );
  material = new THREE.MeshPhysicalMaterial({
    metalness: false,
    roughness: 0.2,
    reflectivity: 0.7,
    color: window.palette[1]
  });
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, -1000);
  scene.add(mesh);
  //render loop
  requestAnimationFrame(render);
}

function render() {
  if (!window.isPaused) {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
