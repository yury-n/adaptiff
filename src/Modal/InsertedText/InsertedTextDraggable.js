import React, { useState } from "react";
import InsertedText from "./InsertedText";
import DraggableItem from "../DraggableItem/DraggableItem";

export default React.memo(
  React.forwardRef(function InsertedTextDraggable(
    {
      className,
      onDragStart,
      onDragStop,
      isActive,
      isHighlighted,
      initialPosition,
      initialValue,
      config,
      scale,
      setHasCyrillic,
      onFocus,
      onBlur
    },
    ref
  ) {
    const [isDragged, setIsDragged] = useState(false);
    return (
      <DraggableItem
        isActive={isActive}
        isHighlighted={isHighlighted}
        initialPosition={initialPosition}
        onDragStart={() => {
          setIsDragged(true);
          onDragStart();
        }}
        onDragStop={(...args) => {
          setIsDragged(false);
          onDragStop(...args);
        }}
        className={className}
        withOuterFrameWhenActive={true}
      >
        <InsertedText
          onFocus={onFocus}
          onBlur={onBlur}
          setHasCyrillic={setHasCyrillic}
          isEditable={isActive && !isDragged}
          initialValue={initialValue}
          config={config}
          scale={scale}
          ref={ref}
        />
      </DraggableItem>
    );
  })
);
