import React, { useEffect, useRef } from "react";
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

  const ref = useRef();

  useEffect(() => {
    if (selectedTab === "backgrounds") {
      return;
    }
    const rect = document.body
      .querySelector("#active-layout")
      .getBoundingClientRect();
    if (ref.current) {
      ref.current.style.left = `${rect.right}px`;
      ref.current.style.top = `${rect.top + rect.height / 2}px`;
    }
  }, [selectedTab, isQuickFormShown, selectedLayout]);

  useEffect(() => {
    if (ref.current) {
      const input = ref.current.querySelector("input");
      if (input) {
        input.focus();
      }
    }
  }, [selectedLayout, isQuickFormShown, selectedLayout]);

  if (!isQuickFormShown) {
    return null;
  }

  if (selectedTab === "backgrounds") {
    return null;
  }

  const layout = layouts[selectedLayout];

  const debouncedDispatch = debounce((field, value) => {
    dispatch(setQuickFormFieldValue(field, value));
  }, 500);

  return (
    <div ref={ref} className={s["quick-form"]}>
      <div className={s["quick-form-close-wrapper"]}>
        <div
          className={s["quick-form-close"]}
          onClick={() => {
            localStorage.setItem("app.page.isQuickFormHidden", true);
            dispatch(setIsQuickFormShown(false));
          }}
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
              placeholder={item.text}
              rows="3"
              onKeyUp={e => {
                debouncedDispatch(item.layoutItemType, e.target.value);
              }}
            ></textarea>
          );
        }
        return (
          <input
            key={index}
            autoFocus={index === 0}
            className={s["quick-start-input"]}
            placeholder={selectedLayout === 0 ? "Type something" : item.text}
            onKeyUp={e => {
              debouncedDispatch(item.layoutItemType, e.target.value);
            }}
          />
        );
      })}
    </div>
  );
};
