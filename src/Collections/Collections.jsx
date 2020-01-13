import React from "react";
import { useSelector } from "react-redux";
import Collection from "../Collection/Collection";
import collectionsNotFiltered from "../pages/collections";
import { getSelectedTab } from "../selectors/page";

import s from "./Collections.module.css";

export default () => {
  const selectedTab = useSelector(getSelectedTab);
  const collections = collectionsNotFiltered.filter(collection =>
    selectedTab === "backgrounds" && collection.noBackgrounds ? false : true
  );
  return (
    <div className={s["collections"]}>
      <div className={s["collections-column"]}>
        {collections.map((collection, index) =>
          index % 2 ? null : <Collection key={index} {...collection} />
        )}
      </div>
      <div className={s["collections-column"]}>
        {collections.map((collection, index) =>
          index % 2 ? <Collection key={index} {...collection} /> : null
        )}
      </div>
    </div>
  );
};
