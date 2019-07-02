import React from "react";
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
    return (
      <DraggableItem
        isActive={isActive}
        initialPosition={initialPosition}
        onClick={onClick}
        onDragStart={onDragStart}
        onDragStop={onDragStop}
        className={className}
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
