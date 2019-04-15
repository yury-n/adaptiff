import React from "react";

export default React.memo(
  React.forwardRef((props, ref) => {
    let scaleToFitWidth = 1;
    let scaleToFitHeight = 1;
    if (props.width && props.width > props.maxWidth) {
      scaleToFitWidth = props.maxWidth / props.width;
    }
    if (props.height && props.height > props.maxHeight) {
      scaleToFitHeight = props.maxHeight / props.height;
    }
    const scaleToFullyFit = Math.min(scaleToFitWidth, scaleToFitHeight);
    return (
      <iframe
        ref={ref}
        className={props.className}
        title="preview"
        src={`adaptations/${props.fileName}.html?v=${props.version}`}
        frameBorder="0"
        onLoad={props.onLoad}
        style={{
          width: props.width,
          height: props.height,
          transform:
            scaleToFullyFit < 1 ? `scale(${scaleToFullyFit})` : undefined
        }}
      />
    );
  })
);
