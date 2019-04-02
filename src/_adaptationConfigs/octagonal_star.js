import React from "react";

export default {
  author: "ofb",
  title: "Octagonal star pattern",
  thumbs: [
    "/thumbs/octagonal_star/1.jpg"
    // "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/37abb01e-9eb0-4ceb-8e7f-c247caed05a6/dcxhgrx-c2da73e5-9323-48c9-87dd-cfb71ec4651c.png",
    // "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/37abb01e-9eb0-4ceb-8e7f-c247caed05a6/dcxhgrd-46697057-35de-4418-893b-470889d04e89.png",
    // "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/37abb01e-9eb0-4ceb-8e7f-c247caed05a6/dcxhgr0-ba93084a-1e69-427b-a2a8-ce5efee44aa8.png"
  ],
  thumbBackgroundSize: "205px",
  config: [
    {
      key: "patternSize",
      text: "Pattern size",
      type: "range",
      defaultValue: 100,
      min: 0,
      max: 300
    }
  ],
  palettes: [
    ["#eafaf8", "#b0d8a2", "#93d0e0"],
    ["#e1d4f4", "#f5b4a8", "#9ab3ec"],
    ["#f8d5ab", "#a6c4e6", "#ed7f82"],
    ["#f4f8eb", "#6cc9e2", "#ecb968"],
    ["#cce5c6", "#7abfa6", "#aabde0"],
    ["#b5d2ee", "#6fade2", "#d8b2d4"],
    ["#f1eb95", "#acdb8e", "#f1c4e5"],
    ["#bdd4f9", "#f8dcf8", "#6cb5f6"]
  ],
  disableDownloads: true,
  generate: ({ palette, patternSize }) => {
    const backgroundImage =
      'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240"><title>pattern-</title><g class="cls-1"><g id="Layer_1" data-name="Layer 1"><rect class="cls-2" fill="' +
      palette[0] +
      '" x="-0.07" y="0.05" width="240" height="240"/><path class="cls-3" fill="' +
      palette[1] +
      '" d="M80.56,39.42H39.29V80.68H80.56Zm-8.26,33H47.55V47.67H72.3Zm2.26-51.75L55.87,0h11.4l-.14.14L78.22,12.41h29.27V41.68l12.32,11.16,13.41-13.41h26.11V13.33L172.61,0h11.27l.19.22L167.58,16.75V47.7H136.64L120.09,64.25,99.23,45.35V20.67Zm90.71,198.72L184,240h-11.3l.08-.08L161.6,227.65H132.33V198.38L120.11,187.3l-13.35,13.35H80.65v26.1L67.36,240H56l-.14-.16,16.55-16.56V192.39h30.95l16.49-16.49,20.76,18.82v24.68ZM64.13,120.21,47.64,136.7v30.94H16.7L.15,184.19-.07,184V172.73l13.35-13.35h26.1V133.28l13.35-13.35L41.56,107.61H12.29V78.34L.07,67.26l-.14.14V56L20.55,74.68V99.35H45.23ZM226.7,80.71h-26.1v26.1l-13.41,13.41,11.08,12.23h29.27v29.27l12.32,11.17.09-.08v11.3l-20.66-18.73V140.71H194.6l-18.81-20.77,16.55-16.55V72.45h30.94L239.77,56l.17.15V67.47Zm-67.37,120H200.6V159.45H159.33Zm8.26-33h24.75v24.75H167.59Z"/><path class="cls-4" fill="' +
      palette[2] +
      '" d="M140.5,20.67H99.23V0h8.26V12.41h24.75V0h8.26Zm99.43,35V67.31l-.07.07L220.14,47.67H200.56V80.74H167.5v19.57L187.21,120,167.5,139.74v27.88H139.62L119.9,187.34l-19.72-19.72H80.61v33.06H47.55v19.57L67.27,240l-.07.07H55.52l.07-.07-16.3-16.29v-23h-23L-.05,184.34l0,0V172.67l0,0,19.72,19.72H39.35v-33h33V139.74L52.59,120,72.3,100.31V72.42h27.89L119.9,52.71l19.72,19.72h19.68v-33h33V19.78L172.54.07l0,0h11.68l0,0,16.3,16.29v23h23l16.3,16.29Zm-167.58,112H47.6v24.75H72.35Zm86.89-63.95v-23h-23L119.9,64.39,103.6,80.68h-23v23L64.27,120l16.29,16.3v23h23l16.3,16.3,16.3-16.3h23v-23L175.53,120Zm33.06-56H167.55V72.48H192.3ZM47.51,47.64V19.76L67.22,0H55.54L39.26,16.34v23h-23L-.07,55.66V67.34l19.7-19.7Zm171.75,93.07h20.66v-8.26H227.53V107.7h12.4V99.44H219.27Zm-26.93,51.75v27.88L172.64,240h11.68l16.28-16.28v-23h23l16.29-16.29V172.75l-19.71,19.71ZM20.55,99.35H-.07v8.26H12.29v24.75H-.07v8.26H20.55ZM99.32,240h8.26V227.65h24.75V240h8.26V219.39H99.32Z"/></g></g></svg>\')';

    const backgroundSize = `${patternSize}px`;
    const backgroundPosition = "center";

    const styledObject = {
      backgroundImage,
      backgroundSize,
      backgroundPosition
    };
    return <div id="preview" className="preview" style={styledObject} />;
  }
};
