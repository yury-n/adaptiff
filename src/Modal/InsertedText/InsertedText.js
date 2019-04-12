import React, { useState } from "react";
import Draggable from "react-draggable";

import s from "./InsertedText.module.css";

export default props => {
  const [isDraggable, setIsDraggable] = useState(true);
  const renderTextBlock = () => (
    <div className={s["root"]}>
      <div
        onClick={() => setIsDraggable(false)}
        className={s["inserted-text-block"]}
      >
        <div
          contentEditable={!isDraggable}
          className={s["inserted-text-block-inner"]}
        >
          Sample text goes here
          <br />
          more text
        </div>
      </div>
    </div>
  );
  return <Draggable disabled={!isDraggable}>{renderTextBlock()}</Draggable>;
};
