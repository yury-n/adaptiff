import React from "react";
import InsertedText from "./InsertedText";
import DraggableItem from "../DraggableItem/DraggableItem";

export default React.memo(
  React.forwardRef(function InsertedTextDraggable(
    { key, isActive, initialPosition, initialValue, config, scale, setActive },
    ref
  ) {
    return (
      <DraggableItem
        key={key}
        isActive={isActive}
        initialPosition={initialPosition}
        onClick={setActive}
      >
        <InsertedText
          initialValue={initialValue}
          config={config}
          scale={scale}
          ref={ref}
        />
      </DraggableItem>
    );
  })
);
