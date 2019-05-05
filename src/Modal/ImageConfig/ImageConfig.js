import React from "react";
import { Button } from "semantic-ui-react";

import s from "./ImageConfig.module.css";

export default function ImageConfig({ config, setConfigValue, onDelete }) {
  return (
    <div className={s["image-config-container"]}>
      <Button className={s["delete-button"]} onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
}
