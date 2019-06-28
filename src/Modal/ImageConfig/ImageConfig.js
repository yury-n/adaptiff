import React from "react";
import { Button } from "semantic-ui-react";

import s from "./ImageConfig.module.css";

export default function ImageConfig({ config, setConfigValue, onRemove }) {
  return (
    <div className={s["root"]}>
      <Button className={s["delete-button"]} onClick={onRemove}>
        Delete
      </Button>
    </div>
  );
}
