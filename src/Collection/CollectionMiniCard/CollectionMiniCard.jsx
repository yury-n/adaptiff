import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalGroup from "../../Modal/ModalGroup/ModalGroup";
import PremiumCrown from "../../pages/PremiumCrown/PremiumCrown";
import Layout from "../../Layouts/Layout/Layout";
import { getSelectedTab, getSelectedLayout } from "../../selectors/page";

import s from "./CollectionMiniCard.module.css";
import layouts from "../../pages/layouts";

// (debugShowModal && adaptation.id === 143 &&

export default ({ adaptation, adaptations, isPremium }) => {
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
        <img loading="lazy" src={adaptation.thumb} alt="" />
        {selectedTab === "templates" && (
          <Layout
            layout={layouts[selectedLayout]}
            width={180}
            textColor={adaptation.textColor}
            textBackgroundColor={adaptation.textBackgroundColor}
          />
        )}
      </div>
      {(showModal || adaptation.id === 143) && (
        <ModalGroup
          onClose={() => setShowModal(false)}
          initadaptationIndex={adaptations.indexOf(adaptation)}
          adaptations={adaptations}
        />
      )}
    </>
  );
};
