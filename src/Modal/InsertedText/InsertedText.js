import React from "react";
import s from "./InsertedText.module.css";

export default props => (
  <div className={s["inserted-text-block"]}>
    <div className={s["inserted-text-block-inner"]}>
      Sample text goes here
      <br />
      more text
    </div>
  </div>
);
