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
      isHighlighted,
      initialPosition,
      initialValue,
      config,
      scale,
      setHasCyrillic,
      onClick
    },
    ref
  ) {
    return (
      <DraggableItem
        isActive={isActive}
        isHighlighted={isHighlighted}
        initialPosition={initialPosition}
        onDragStart={onDragStart}
        onDragStop={onDragStop}
        className={className}
        withOuterFrame={true}
        onClick={onClick}
      >
        <InsertedText
          setHasCyrillic={setHasCyrillic}
          initialValue={initialValue}
          config={config}
          scale={scale}
          ref={ref}
        />
      </DraggableItem>
    );
  })
);
