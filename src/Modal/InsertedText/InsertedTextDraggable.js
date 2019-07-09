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
      onClick
    },
    ref
  ) {
    const [isDragged, setIsDragged] = useState(false);
    return (
      <DraggableItem
        isActive={isActive}
        initialPosition={initialPosition}
        onClick={onClick}
        onDragStart={() => {
          setIsDragged(true);
          onDragStart();
        }}
        onDragStop={() => {
          setIsDragged(false);
          onDragStop();
        }}
        className={className}
      >
        <InsertedText
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
