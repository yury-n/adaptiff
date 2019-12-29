import React from "react";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import ThinCloseIcon from "../Icons/ThinCloseIcon";
import { setIsQuickFormShown, setQuickFormFieldValue } from "../actions/page";
import layouts from "../pages/layouts";
import {
  getIsQuickFormShown,
  getSelectedLayout,
  getSelectedTab
} from "../selectors/page";

import s from "./QuickForm.module.css";

export default () => {
  const dispatch = useDispatch();
  const isQuickFormShown = useSelector(getIsQuickFormShown);
  const selectedTab = useSelector(getSelectedTab);
  const selectedLayout = useSelector(getSelectedLayout);

  if (!isQuickFormShown) {
    return null;
  }

  if (selectedTab === "backgrounds") {
    return null;
  }

  const layout = layouts[selectedLayout];

  const throttledDispatch = debounce((field, value) => {
    dispatch(setQuickFormFieldValue(field, value));
  }, 500);

  return (
    <div className={s["quick-form"]}>
      <div className={s["quick-form-close-wrapper"]}>
        <div
          className={s["quick-form-close"]}
          onClick={() => dispatch(setIsQuickFormShown(false))}
        >
          <ThinCloseIcon />
        </div>
      </div>
      {layout.items.map((item, index) => {
        if (item.layoutItemType.includes("multiline")) {
          return (
            <textarea
              key={index}
              className={s["quick-start-input"]}
              placeholder="Secondary Text"
              rows="3"
            ></textarea>
          );
        }
        return (
          <input
            key={index}
            autoFocus={index === 0}
            className={s["quick-start-input"]}
            placeholder="Type something"
            onKeyUp={e => {
              throttledDispatch(item.layoutItemType, e.target.value);
            }}
          />
        );
      })}
      {/* <textarea
                className={s["quick-start-input"]}
                placeholder="Secondary Text"
                rows="3"
              ></textarea> */}
    </div>
  );
};
