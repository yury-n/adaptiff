import React from "react";

import "./global.overrides.css";

export default React.memo(
  React.forwardRef(function InsertedImage(
    { id, width, height, className, imageUrl },
    ref
  ) {
    return (
      <img
        id={id}
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
