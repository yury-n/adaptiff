import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal";
import layouts from "../../pages/layouts";
import {
  getSelectedLayout,
  getSelectedTab,
  getQuickFormFieldValues
} from "../../selectors/page";

export default ({ initadaptationIndex, adaptations, onClose }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(initadaptationIndex);
  const selectedLayout = useSelector(getSelectedLayout);
  const selectedTab = useSelector(getSelectedTab);
  const quickFormFieldValues = useSelector(getQuickFormFieldValues);

  const currentAdaptation = adaptations[currentItemIndex];
  let extrainsertedItems = [];
  if (selectedTab === "templates") {
    extrainsertedItems = layouts[selectedLayout].items.map(item => ({
      ...item,
      configValues: {
        ...item.configValues,
        color: currentAdaptation.textColor,
        backgroundColor: item.configValues.withBackground
          ? currentAdaptation.textBackgroundColor ||
            item.configValues.backgroundColor
          : undefined
      },
      text: quickFormFieldValues[item.layoutItemType]
        ? quickFormFieldValues[item.layoutItemType]
        : item.text
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
        ...extrainsertedItems
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
