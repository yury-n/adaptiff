import React from "react";
import IframePreview from "./IframePreview";
import RnDItem from "../RnDItem/RnDItem";

import s from "./IframePreviewRnD.module.css";

export default React.memo(
  React.forwardRef(function IframePreviewRnD(
    { onLoad, fileName, version, ...restProps },
    ref
  ) {
    return (
      <RnDItem {...restProps} ref={ref} lockAspectRatio={false}>
        <IframePreview
          className={s["iframe"]}
          fileName={fileName}
          version={version}
          onLoad={onLoad}
        />
      </RnDItem>
    );
  })
);
