import React, { useState, useEffect, useRef } from "react";
import throttle from "lodash.throttle";
import classnames from "classnames";
import PremiumCrown from "../../pages/PremiumCrown/PremiumCrown";

import s from "./Collection.module.css";

const SCROLL_THROTTLE_TIMEOUT = 250;

export default ({ title, author, items, isPremium }) => {
  const contentRef = useRef();
  const [overflow, setOverflow] = useState("");

  const updateOverflow = throttle(
    () => {
      let newOverflow = "";

      if (!contentRef.current) {
        return newOverflow;
      }

      const contentRect = contentRef.current.getBoundingClientRect();
      const scrollLeft = contentRef.current.scrollLeft;
      const scrollWidth = contentRef.current.scrollWidth;
      const scrollRight = scrollWidth - scrollLeft - contentRect.width;

      if (scrollLeft && scrollRight) {
        newOverflow = "both";
      } else if (scrollLeft) {
        newOverflow = "left";
      } else if (scrollRight) {
        newOverflow = "right";
      }

      if (newOverflow !== overflow) {
        setOverflow(newOverflow);
      }
    },
    SCROLL_THROTTLE_TIMEOUT,
    { leading: true }
  );

  useEffect(() => {
    updateOverflow();
    contentRef.current.addEventListener("scroll", updateOverflow);
    return () => {
      contentRef.current.removeEventListener("scroll", updateOverflow);
    };
  }, []);
  return (
    <>
      <div className={s["collection-header"]}>
        {isPremium && <PremiumCrown />}
        {title}
        <span className={s["collection-author"]}>
          <span>by</span> {author}
        </span>
      </div>
      <div className={s["collection-wrapper"]}>
        <div className={s["collection-inner-shadow"]} />
        <div
          className={classnames(
            s["paddle-button"],
            s["paddle-button-prev"],
            (overflow === "left" || overflow === "both") && s["paddle-visible"]
          )}
        >
          ←
        </div>
        <div
          className={classnames(
            s["paddle-button"],
            s["paddle-button-next"],
            (overflow === "right" || overflow === "both") && s["paddle-visible"]
          )}
        >
          →
        </div>
        <div className={s["collection-scroll-wrapper"]} ref={contentRef}>
          <div className={s["inside-padding"]} />
          {items.map((item, index) => (
            <div
              key={index}
              className={s["collection-thumb"]}
              style={{ backgroundImage: `url(${item.thumb})` }}
            />
          ))}
          <div className={s["inside-padding"]} />
        </div>
      </div>
    </>
  );
};
