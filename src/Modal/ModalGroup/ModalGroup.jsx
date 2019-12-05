import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal";
import layouts from "../../pages/layouts";
import { getSelectedLayout, getSelectedTab } from "../../selectors/page";

export default ({ initItemIndex, items, onClose }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(initItemIndex);
  const selectedLayout = useSelector(getSelectedLayout);
  const selectedTab = useSelector(getSelectedTab);

  const currentAdaptation = items[currentItemIndex];
  let extraInsertedItems = [];
  if (selectedTab === "templates") {
    extraInsertedItems = layouts[selectedLayout].items.map(item => ({
      ...item,
      configValues: {
        ...item.configValues,
        color: currentAdaptation.textColor
      }
    }));
  }
  const currentAdaptationExtended = {
    ...currentAdaptation,
    initState: {
      ...currentAdaptation.initState,
      insertedItems: [
        ...currentAdaptation.initState.insertedItems,
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
      {...currentAdaptationExtended}
    />
  );
};
