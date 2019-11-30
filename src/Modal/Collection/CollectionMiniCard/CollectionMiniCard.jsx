import React, { useState } from "react";
import Modal from "../../Modal";

import s from "./CollectionMiniCard.module.css";

export default item => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={s["collection-thumb"]} onClick={() => setShowModal(true)}>
        <img loading="lazy" src={item.thumb} />
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} {...item} />}
    </>
  );
};
