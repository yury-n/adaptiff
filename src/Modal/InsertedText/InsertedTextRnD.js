import React from "react";
import InsertedText from "./InsertedText";
import RnDItem from "../RnDItem/RnDItem";

export default React.memo(
  React.forwardRef(function InsertedTextDraggable(
    { initialValue, config, scale, setHasCyrillic, ...restProps },
    ref
  ) {
    return (
      <RnDItem resizable={false} {...restProps} ref={ref}>
        <InsertedText
          setHasCyrillic={setHasCyrillic}
          initialValue={initialValue}
          config={config}
          scale={scale}
        />
      </RnDItem>
    );
  })
);
