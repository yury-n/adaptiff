import React, { useState } from "react";
import ModalGroup from "../../ModalGroup/ModalGroup";

import s from "./CollectionMiniCard.module.css";

export default ({ item, items }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={s["collection-thumb"]} onClick={() => setShowModal(true)}>
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
