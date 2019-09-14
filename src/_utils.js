export const colorObjToString = rgbObj => {
  return typeof rgbObj === "string"
    ? rgbObj
    : `rgba(${rgbObj.r}, ${rgbObj.g}, ${rgbObj.b}, ${rgbObj.a})`;
};

export const stringToColorObj = rgbString => {
  const rgbStringParts = rgbString.split(/[()]/)[1] || "";
  const values = rgbStringParts.split(",");
  if (values.length < 3) {
    return { r: 0, g: 0, b: 0, a: 0 };
  }
  return {
    r: values[0].trim(),
    g: values[1].trim(),
    b: values[2].trim(),
    a: values[3] ? values[3].trim() : 1
  };
};

// from Abhinav's answer at  https://stackoverflow.com/questions/37135417/download-canvas-as-png-in-fabric-js-giving-network-error/
export const dataURLtoBlob = function(dataurl) {
  var parts = dataurl.split(","),
    mime = parts[0].match(/:(.*?);/)[1];
  if (parts[0].indexOf("base64") !== -1) {
    var bstr = atob(parts[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], { type: mime });
  } else {
    var raw = decodeURIComponent(parts[1]);
    return new Blob([raw], { type: mime });
  }
};

export const downloadFromDataURL = function(filename, dataUrl) {
  var element = document.createElement("a");

  var dataBlob = dataURLtoBlob(dataUrl);
  element.setAttribute("href", URL.createObjectURL(dataBlob));
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  var clickHandler;
  element.addEventListener(
    "click",
    (clickHandler = function() {
      // ..and to wait a frame
      requestAnimationFrame(function() {
        URL.revokeObjectURL(element.href);
      });

      element.removeAttribute("href");
      element.removeEventListener("click", clickHandler);
    })
  );

  document.body.removeChild(element);
};

export const logStat = type => {
  const statIframe = document.createElement("IFRAME");
  statIframe.src = `./stats/${type}.html`;
  statIframe.style.position = "absolute";
  statIframe.style.left = "-1000px";
  document.body.appendChild(statIframe);
};

export const isMac = () => navigator.platform.toUpperCase().indexOf("MAC") >= 0;

export const macify = shortcut => {
  if (isMac()) {
    return shortcut.replace("Ctrl", "Cmd");
  }
  return shortcut;
};
