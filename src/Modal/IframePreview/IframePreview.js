import React from "react";

import s from "./IframePreview.module.css";

class IframePreview extends React.Component {
  shouldComponentUpdate(nextProps) {
    let shouldUpdate = false;
    [
      "width",
      "height",
      "version",
      "showIframe",
      "insertedObjectId",
      "fileName",
      "scale",
      "className",
      "placeholder"
    ].forEach(prop => {
      if (nextProps[prop] !== this.props[prop]) {
        shouldUpdate = true;
      }
    });
    return shouldUpdate;
  }
  render() {
    const props = this.props;
    return (
      <div
        style={{
          position: "relative",
          width: props.width,
          height: props.height,
          transform: props.scale < 1 ? `scale(${props.scale})` : undefined
        }}
        className={props.className}
      >
        {props.placeholder && (
          <img
            alt=""
            ref={!props.showIframe ? props.forwardRef : undefined}
            src={props.placeholder}
            className={s["iframe-placeholder"]}
          />
        )}
        {props.showIframe && (
          <iframe
            ref={props.forwardRef}
            title="preview"
            src={`/adaptations/${props.fileName}.html?v=${
              props.version
            }&object_id=${props.insertedObjectId || ""}`}
            frameBorder="0"
            onLoad={props.onLoad}
            className={s["iframe"]}
          />
        )}
        <div className={s["opaque-overlay"]} />
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <IframePreview forwardRef={ref} {...props} />
));
