import React from "react";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedTab } from "../../selectors/page";
import { setSelectedTab } from "../../actions/page";
import { Button } from "semantic-ui-react";

import s from "./Tabs.module.css";

export default () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector(getSelectedTab);
  return (
    <div
      className={classnames(
        s["tabs"],
        selectedTab === "templates" && s["active-templates"]
      )}
    >
      <Button.Group>
        <Button
          basic={selectedTab !== "templates"}
          color="black"
          onClick={() => {
            dispatch(setSelectedTab("templates"));
            localStorage.setItem("app.page.selectedTab", "templates");
          }}
        >
          Templates
        </Button>
        <Button
          basic={selectedTab !== "backgrounds"}
          color="black"
          onClick={() => {
            dispatch(setSelectedTab("backgrounds"));
            localStorage.setItem("app.page.selectedTab", "backgrounds");
          }}
        >
          Backgrounds
        </Button>
      </Button.Group>
    </div>
  );
};
