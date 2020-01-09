import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal";
import layouts from "../../pages/layouts";
import { getSelectedTab } from "../../selectors/page";

export default ({ initadaptationIndex, adaptations, onClose }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(initadaptationIndex);
  const selectedTab = useSelector(getSelectedTab);

  const currentAdaptation = adaptations[currentItemIndex];

  let extraInsertedItems = [];
  if (selectedTab === "templates") {
    const selectedLayout =
      currentAdaptation.defaultLayout !== undefined
        ? currentAdaptation.defaultLayout
        : 0;
    extraInsertedItems = layouts[selectedLayout].items.map(item => ({
      ...item,
      configValues: {
        ...item.configValues,
        color: currentAdaptation.textColor,
        backgroundColor: item.configValues.withBackground
          ? currentAdaptation.textBackgroundColor ||
            item.configValues.backgroundColor
          : undefined
      }
    }));
  }
  const currentAdaptationExtended = {
    ...currentAdaptation,
    initState: {
      ...currentAdaptation.initState,
      insertedItems: [
        ...(currentAdaptation.initState
          ? currentAdaptation.initState.insertedItems || []
          : []),
        ...extraInsertedItems
      ]
    }
  };
  return (
    <Modal
      key={currentItemIndex}
      onGoToPrevAdaptation={() => {
        let newIndex = currentItemIndex - 1;
        if (newIndex < 0) {
          newIndex = adaptations.length - 1;
        }
        setCurrentItemIndex(newIndex);
      }}
      onGoToNextAdaptation={() => {
        let newIndex = currentItemIndex + 1;
        if (newIndex > adaptations.length - 1) {
          newIndex = 0;
        }
        setCurrentItemIndex(newIndex);
      }}
      onClose={onClose}
      {...currentAdaptationExtended}
    />
  );
};
