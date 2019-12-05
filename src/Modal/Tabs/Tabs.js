import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedTab } from "../../selectors/page";
import { setSelectedTab } from "../../actions/page";
import { Button } from "semantic-ui-react";

import s from "./Tabs.module.css";

export default () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector(getSelectedTab);
  return (
    <div className={s["tabs"]}>
      <Button.Group>
        <Button
          basic={selectedTab !== "templates"}
          color="black"
          onClick={() => dispatch(setSelectedTab("templates"))}
        >
          Templates
        </Button>
        <Button
          basic={selectedTab !== "backgrounds"}
          color="black"
          onClick={() => dispatch(setSelectedTab("backgrounds"))}
        >
          Backgrounds
        </Button>
      </Button.Group>
    </div>
  );
};
