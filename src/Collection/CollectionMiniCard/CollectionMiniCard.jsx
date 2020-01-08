import React, { useState } from "react";
import ModalGroup from "../../Modal/ModalGroup/ModalGroup";
import PremiumCrown from "../../pages/PremiumCrown/PremiumCrown";

import s from "./CollectionMiniCard.module.css";

// || adaptation.id === 143

export default ({ adaptation, adaptations, isPremium }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={s["collection-thumb"]} onClick={() => setShowModal(true)}>
        {isPremium && (
          <div className={s["premium-only-overlay"]}>
            <PremiumCrown />
          </div>
        )}
        <img loading="lazy" src={adaptation.thumb} alt="" />
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
