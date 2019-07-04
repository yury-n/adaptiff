import React from "react";

import s from "./IframePreview.module.css";

class IframePreview extends React.Component {
  state = {
    isLoaded: false
  };
  static getDerivedStateFromProps(props) {
    if (!props.showIframe) {
      return {
        isLoaded: false
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
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
    return shouldUpdate || this.state.isLoaded !== nextState.isLoaded;
  }
  render() {
    const props = this.props;
    const state = this.state;
    console.log("props.forwardRef", props.forwardRef);
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
        {props.placeholder && !state.isLoaded && (
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
            onLoad={this.onLoad}
            className={s["iframe"]}
          />
        )}
        <div className={s["opaque-overlay"]} />
      </div>
    );
  }

  onLoad = () => {
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 100);
    this.props.onLoad();
  };
}

export default React.forwardRef((props, ref) => (
  <IframePreview forwardRef={ref} {...props} />
));
