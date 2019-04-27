import React, { useState } from "react";
import { Menu, Button, Icon } from "semantic-ui-react";

import s from "./InsertButton.module.css";

export default React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Button circular icon="plus" onClick={() => setIsMenuOpen(true)} />
      {isMenuOpen && (
        <Menu className={s["add-menu"]} icon="labeled" vertical>
          <Menu.Item className={s["add-menu-item"]}>
            <div className={s["add-text-icon"]}>T</div>
            <div>Text</div>
          </Menu.Item>
          <Menu.Item className={s["add-menu-item"]}>
            <input
              type="file"
              name="file"
              id="file"
              className={s["file-input"]}
            />
            <label className={s["file-input-label"]} for="file" />
            <Icon name="image outline" />
            <div>Image</div>
          </Menu.Item>
        </Menu>
      )}
    </>
  );
});
