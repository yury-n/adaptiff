import React from "react";
import IframePreview from "./IframePreview";
import RnDItem from "../RnDItem/RnDItem";

import s from "./IframePreviewRnD.module.css";

export default React.memo(
  React.forwardRef(function IframePreviewRnD(
    {
      onLoad,
      insertedObjectId,
      showIframe,
      placeholder,
      fileName,
      version,
      ...restProps
    },
    ref
  ) {
    return (
      <RnDItem {...restProps} ref={ref} lockAspectRatio={false}>
        <IframePreview
          showIframe={showIframe}
          className={s["iframe"]}
          fileName={fileName}
          version={version}
          insertedObjectId={insertedObjectId}
          placeholder={placeholder}
          onLoad={onLoad}
        />
      </RnDItem>
    );
  })
);
