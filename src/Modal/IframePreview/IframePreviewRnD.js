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
      lockAspectRatio = false,
      onGoToPrevElementInPack,
      onGoToNextElementInPack,
      ...restProps
    },
    ref
  ) {
    return (
      <RnDItem ref={ref} lockAspectRatio={lockAspectRatio} {...restProps}>
        <IframePreview
          showIframe={showIframe}
          className={s["iframe"]}
          fileName={fileName}
          version={version}
          insertedObjectId={insertedObjectId}
          placeholder={placeholder}
          onLoad={onLoad}
        />
        {restProps.isActive && restProps.pack && (
          <>
            <div
              className={s["prev"]}
              aria-label="Prev Element (Arrow Left)"
              data-balloon-pos="up"
              onClick={onGoToPrevElementInPack}
            >
              ←
            </div>
            <div
              className={s["next"]}
              aria-label="Next Element (Arrow Right)"
              data-balloon-pos="up"
              onClick={onGoToNextElementInPack}
            >
              →
            </div>
          </>
        )}
      </RnDItem>
    );
  })
);
