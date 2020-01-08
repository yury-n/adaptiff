import React, { useState } from "react";
import classnames from "classnames";
import PremiumCrown from "../pages/PremiumCrown/PremiumCrown";
import CollectionMiniCard from "./CollectionMiniCard/CollectionMiniCard";
import { Icon } from "semantic-ui-react";

import s from "./Collection.module.css";

export default ({ title, author, authorLink, items, isPremium }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const slicedItems = isExpanded ? items : items.slice(0, 4);

  return (
    <div className={s["collection-super-wrapper"]}>
      <div className={s["collection-header"]}>
        {isPremium && <PremiumCrown className={s["premium-icon"]} />}
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
      <div
        className={classnames(
          s["collection-wrapper"],
          isExpanded && s["is-expanded"]
        )}
      >
        <div className={s["collection-inner-shadow"]} />
        {!isExpanded && (
          <div
            className={s["collect-view-all"]}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            see all &nbsp;
            <Icon name="chevron down" size="small" />
          </div>
        )}
        {slicedItems.map((item, index) => (
          <CollectionMiniCard
            showModal={true}
            key={index}
            isPremium={isPremium}
            adaptation={item}
            adaptations={items}
          />
        ))}
      </div>
    </div>
  );
};
