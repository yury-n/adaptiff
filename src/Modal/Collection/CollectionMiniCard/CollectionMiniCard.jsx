import React, { useState } from "react";
import ModalGroup from "../../ModalGroup/ModalGroup";
import PremiumCrown from "../../../pages/PremiumCrown/PremiumCrown";

import s from "./CollectionMiniCard.module.css";

export default ({ item, items, isPremium }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={s["collection-thumb"]} onClick={() => setShowModal(true)}>
        {isPremium && (
          <div className={s["premium-only-overlay"]}>
            <PremiumCrown />
          </div>
        )}
        <img loading="lazy" src={item.thumb} alt="" />
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