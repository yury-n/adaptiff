import React, { useState } from "react";
import classnames from "classnames";
import { Icon } from "semantic-ui-react";

import s from "./Layers.module.css";

export default function Layers({
  className,
  items,
  onSelect,
  onRemove,
  onMove,
  onSetHighlightedInsertedItem
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div
      className={classnames(
        s["root"],
        isCollapsed && s["collapsed"],
        className
      )}
      onMouseLeave={() => onSetHighlightedInsertedItem(null)}
    >
      <label
        className={classnames("form-label", s["form-label"])}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span>Layers</span>
        <Icon
          name={`chevron ${isCollapsed ? "down" : "up"}`}
          size="small"
          className={s["collapse-icon"]}
        />
      </label>
      {!isCollapsed && (
        <div className={s["layers"]}>
          {items.map(item => (
            <div
              key={item.id}
              className={classnames(s["layer"], item.isActive && s["active"])}
              onClick={() => onSelect(item.insertedItemIndex)}
              onMouseEnter={() =>
                onSetHighlightedInsertedItem(item.insertedItemIndex)
              }
            >
              <div className={s["label"]}>{item.label}</div>
              <div className={s["actions"]}>
                {item.isMoveable && item.insertedItemIndex !== 0 && (
                  <Icon
                    size="small"
                    name="long arrow alternate down"
                    onClick={e => {
                      onMove(
                        item.insertedItemIndex,
                        item.insertedItemIndex - 1
                      );
                      e.stopPropagation();
                    }}
                  />
                )}
                {item.isMoveable &&
                  item.insertedItemIndex !== items.length - 2 && (
                    <Icon
                      size="small"
                      name="long arrow alternate up"
                      onClick={e => {
                        onMove(
                          item.insertedItemIndex,
                          item.insertedItemIndex + 1
                        );
                        e.stopPropagation();
                      }}
                    />
                  )}
                {item.isMoveable && (
                  <Icon
                    size="small"
                    name="remove"
                    className={s["remove-icon"]}
                    onClick={e => {
                      onRemove(item.insertedItemIndex);
                      e.stopPropagation();
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
