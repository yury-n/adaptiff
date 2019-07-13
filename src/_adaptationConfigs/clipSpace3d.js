export default {
  title: "Clip space 3d",
  fileName: "clipSpace3d",
  author: "Liam Egan",
  authorLink: "https://codepen.io/shubniggurath",
  thumb: "/background_thumbs/clip_space_3d.png",
  config: [
    {
      key: "bumpStrength",
      text: "Bump Strength",
      type: "range",
      defaultValue: 10,
      min: 0,
      max: 200
    },
    {
      key: "objectColor",
      text: "Object Color",
      type: "single-color",
      defaultValue: "#141414"
    },
    {
      key: "objectShininess",
      text: "Object Shininess",
      type: "range",
      defaultValue: 100,
      min: 0,
      max: 200
    },
    {
      key: "lightColor",
      text: "Light Color",
      type: "single-color",
      defaultValue: "#ffffff"
    },
    {
      key: "backgroundColor",
      text: "Background Color",
      type: "single-color",
      defaultValue: "#e1ebff"
    },
    {
      key: "envPower",
      text: "Env. Power",
      type: "range",
      defaultValue: 5,
      min: 0,
      max: 20
    },
    {
      key: "envBlur",
      text: "Env. Blur",
      type: "range",
      defaultValue: 6,
      min: 0,
      max: 10
    },
    {
      key: "camX",
      text: "Camera X",
      type: "range",
      defaultValue: 10,
      min: -50,
      max: 50
    },
    {
      key: "camY",
      text: "Camera Y",
      type: "range",
      defaultValue: 15,
      min: -50,
      max: 50
    },
    {
      key: "camZ",
      text: "Camera Z",
      type: "range",
      defaultValue: -30,
      min: -50,
      max: 50
    },
    {
      key: "camZoom",
      text: "Camera Zoom",
      type: "range",
      defaultValue: 0,
      min: -20,
      max: 20
    }
  ]
};
