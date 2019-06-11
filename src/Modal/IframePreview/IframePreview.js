import React from "react";

export default React.memo(
  React.forwardRef((props, ref) => {
    return (
      <iframe
        ref={ref}
        className={props.className}
        title="preview"
        src={`/adaptations/${props.fileName}.html?v=${props.version}`}
        frameBorder="0"
        onLoad={props.onLoad}
        style={{
          width: props.width,
          height: props.height,
          transform: props.scale < 1 ? `scale(${props.scale})` : undefined
        }}
      />
    );
  })
);
