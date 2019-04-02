import React from "react";

export default React.memo(
  React.forwardRef((props, ref) => (
    <iframe
      id="preview"
      ref={ref}
      className={props.className}
      title="preview"
      src={`adaptations/${props.fileName}.html`}
      frameBorder="0"
      onLoad={props.onLoad}
    />
  ))
);
