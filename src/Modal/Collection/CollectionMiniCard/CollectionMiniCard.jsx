import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalGroup from "../../ModalGroup/ModalGroup";
import PremiumCrown from "../../../pages/PremiumCrown/PremiumCrown";
import Layout from "../../Layouts/Layout/Layout";
import { getSelectedTab, getSelectedLayout } from "../../../selectors/page";

import s from "./CollectionMiniCard.module.css";
import layouts from "../../../pages/layouts";

export default ({ item, items, isPremium }) => {
  const [showModal, setShowModal] = useState(false);
  const selectedLayout = useSelector(getSelectedLayout);
  const selectedTab = useSelector(getSelectedTab);
  return (
    <>
      <div className={s["collection-thumb"]} onClick={() => setShowModal(true)}>
        {isPremium && (
          <div className={s["premium-only-overlay"]}>
            <PremiumCrown />
          </div>
        )}
        <img loading="lazy" src={item.thumb} alt="" />
        {selectedTab === "templates" && (
          <Layout
            layout={layouts[selectedLayout]}
            width={180}
            textColor={item.textColor}
          />
        )}
      </div>
      {showModal && (
        <ModalGroup
          onClose={() => setShowModal(false)}
          initItemIndex={items.indexOf(item)}
          items={items}
        />
      )}
    </>
  );
};
