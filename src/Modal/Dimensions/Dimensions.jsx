import React from "react";
import { Input, Icon, Dropdown } from "semantic-ui-react";

import s from "./Dimensions.module.css";

export default ({ width, height, onChange }) => {
  return (
    <div key={`${width}+${height}`} className={s["dimensions"]}>
      <Input
        key={width}
        defaultValue={width}
        className={s["dimension-input"]}
        onKeyUp={e => {
          if (e.key === "Enter") {
            onChange({ width: +e.target.value, height });
          }
        }}
        onBlur={e => {
          onChange({ width: +e.target.value, height });
        }}
      />
      <span className={s["dimension-times"]}>&times;</span>
      <Input
        key={height}
        defaultValue={height}
        className={s["dimension-input"]}
        onKeyUp={e => {
          if (e.key === "Enter") {
            onChange({ width, height: +e.target.value });
          }
        }}
        onBlur={e => {
          onChange({ width, height: +e.target.value });
        }}
      />
      <Dropdown
        floating
        labeled
        button
        icon={
          <Icon
            name="chevron down"
            size="small"
            className={s["dimension-icon"]}
          />
        }
      >
        <Dropdown.Menu className={s["dimension-menu"]} direction="left">
          <Dropdown.Item
            description="4:3"
            text="Standard"
            onClick={() => onChange({ width: 1080, height: 810 })}
          />
          <Dropdown.Item
            description="16:9"
            text="Wide"
            onClick={() => onChange({ width: 1080, height: 607 })}
          />
          <Dropdown.Item
            description="1:1"
            text="Square"
            onClick={() => onChange({ width: 1080, height: 1080 })}
          />
          <Dropdown.Divider />
          <Dropdown.Item
            description="1080×1080"
            text="Instagram Square"
            onClick={() => onChange({ width: 1080, height: 1080 })}
          />
          <Dropdown.Item
            description="1080×1920"
            text="Instagram Story"
            onClick={() => onChange({ width: 1080, height: 1920 })}
          />
          <Dropdown.Item
            description="1280×720"
            text="Youtube Thumb"
            onClick={() => onChange({ width: 1280, height: 720 })}
          />
          <Dropdown.Item
            description="940×788"
            text="Facebook Post"
            onClick={() => onChange({ width: 940, height: 788 })}
          />
          <Dropdown.Item
            description="850×315"
            text="Facebook Cover"
            onClick={() => onChange({ width: 850, height: 315 })}
          />
          <Dropdown.Item
            description="1024×512"
            text="Twitter Post"
            onClick={() => onChange({ width: 1024, height: 512 })}
          />
          <Dropdown.Item
            description="1500×500"
            text="Twitter Header"
            onClick={() => onChange({ width: 1500, height: 500 })}
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
