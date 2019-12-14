import React from "react";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./Layout/Layout";
import layouts from "../../pages/layouts";
import { getSelectedLayout, getSelectedTab } from "../../selectors/page";

import s from "./Layouts.module.css";
import { setSelectedLayout } from "../../actions/page";
import PencilIcon from "../../Icons/PencilIcon";

export default ({ className }) => {
  const dispatch = useDispatch();
  const selectedLayout = useSelector(getSelectedLayout);
  const selectedTab = useSelector(getSelectedTab);

  if (selectedTab === "backgrounds") {
    return null;
  }

  return (
    <div className={classnames(s["layouts"], className)}>
      <div className={s["inner-wrapper"]}>
        {layouts.map((layout, index) => (
          <div
            key={index}
            className={classnames(
              s["layout"],
              selectedLayout === index && s["layout-active"]
            )}
            onClick={() => {
              dispatch(setSelectedLayout(index));
            }}
          >
            <Layout layout={layout} width={140} />
            {index === 1 && <PencilIcon />}
          </div>
        ))}
      </div>
    </div>
  );
};
