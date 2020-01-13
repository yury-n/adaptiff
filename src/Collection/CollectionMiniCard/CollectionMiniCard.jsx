import React, { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../Layouts/Layout/Layout";
import { getSelectedTab } from "../../selectors/page";
import ModalGroup from "../../Modal/ModalGroup/ModalGroup";
import PremiumCrown from "../../pages/PremiumCrown/PremiumCrown";
import layouts from "../../pages/layouts";

import s from "./CollectionMiniCard.module.css";

// || adaptation.id === 143

export default ({ adaptation, adaptations, isPremium }) => {
  const [showModal, setShowModal] = useState(false);
  const selectedLayout =
    adaptation.defaultLayout !== undefined ? adaptation.defaultLayout : 0;
  const selectedTab = useSelector(getSelectedTab);
  return (
    <>
      <div className={s["collection-thumb"]} onClick={() => setShowModal(true)}>
        {isPremium && (
          <div className={s["premium-only-overlay"]}>
            <PremiumCrown />
          </div>
        )}
        <img
          loading="lazy"
          src={
            selectedTab === "templates" && adaptation.layoutThumb
              ? adaptation.layoutThumb
              : adaptation.thumb
          }
          alt=""
        />
        {selectedTab === "templates" &&
          adaptation.defaultLayout !== undefined &&
          !adaptation.layoutThumb && (
            <Layout
              layout={layouts[selectedLayout]}
              width={180}
              textColor={adaptation.textColor}
              textBackgroundColor={adaptation.textBackgroundColor}
            />
          )}
      </div>
      {showModal && (
        <ModalGroup
          onClose={() => setShowModal(false)}
          initadaptationIndex={adaptations.indexOf(adaptation)}
          adaptations={adaptations}
        />
      )}
    </>
  );
};
