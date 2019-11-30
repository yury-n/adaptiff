import React, { useState } from "react";
import Modal from "../Modal";

export default ({ initItemIndex, items, onClose }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(initItemIndex);
  console.log({ items });
  return (
    <Modal
      key={currentItemIndex}
      onGoToPrevAdaptation={() => {
        let newIndex = currentItemIndex - 1;
        if (newIndex < 0) {
          newIndex = items.length - 1;
        }
        setCurrentItemIndex(newIndex);
      }}
      onGoToNextAdaptation={() => {
        let newIndex = currentItemIndex + 1;
        if (newIndex > items.length - 1) {
          newIndex = 0;
        }
        setCurrentItemIndex(newIndex);
      }}
      onClose={onClose}
      {...items[currentItemIndex]}
    />
  );
};
