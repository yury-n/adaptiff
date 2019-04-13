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
