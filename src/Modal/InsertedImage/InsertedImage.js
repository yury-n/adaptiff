import React from "react";

import "./global.overrides.css";

export default React.memo(
  React.forwardRef(function InsertedImage(
    { width, height, className, imageUrl },
    ref
  ) {
    return (
      <img
        ref={ref}
        width={width}
        height={height}
        className={className}
        alt=""
        src={imageUrl}
        draggable="false"
      />
    );
  })
);
