import React, { useState, useEffect, useRef } from "react";
import throttle from "lodash.throttle";
import classnames from "classnames";
import PremiumCrown from "../../pages/PremiumCrown/PremiumCrown";
import CollectionMiniCard from "./CollectionMiniCard/CollectionMiniCard";

import s from "./Collection.module.css";

const SCROLL_THROTTLE_TIMEOUT = 250;

export default ({ title, author, authorLink, items, isPremium }) => {
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
          <span>by</span>{" "}
          {authorLink ? (
            <a target="_blank" rel="noopener noreferrer" href={authorLink}>
              {author}
            </a>
          ) : (
            author
          )}
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
          onClick={() => {
            contentRef.current.scrollLeft = 0;
          }}
        >
          ←
        </div>
        <div
          className={classnames(
            s["paddle-button"],
            s["paddle-button-next"],
            (overflow === "right" || overflow === "both") && s["paddle-visible"]
          )}
          onClick={() => {
            contentRef.current.scrollLeft = contentRef.current.scrollWidth;
          }}
        >
          →
        </div>
        <div className={s["collection-scroll-wrapper"]} ref={contentRef}>
          <div className={s["inside-padding"]} />
          {items.map((item, index) => (
            <CollectionMiniCard key={index} item={item} items={items} />
          ))}
          <div className={s["inside-padding"]} />
        </div>
      </div>
    </>
  );
};
