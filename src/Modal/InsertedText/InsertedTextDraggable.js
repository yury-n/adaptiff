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
