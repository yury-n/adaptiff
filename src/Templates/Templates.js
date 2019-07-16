import React from "react";
import { Card } from "semantic-ui-react";
import MiniCard from "../MiniCard/MiniCard";
import templatesList from "./templatesList";
import { backgrounds } from "../pages/adaptationsList";

import s from "./Templates.module.css";

export default () => {
  // const [isExpanded, setIsExpanded] = useState(false);
  // const [allCards, setAllCards] = useState(cards);
  // const onViewAllClick = () => {
  //   setIsExpanded(true);
  //   import("./loadMore1").then(module => {
  //     const moreCards = module.default;
  //     setAllCards([...allCards, ...moreCards]);
  //   });
  // };
  return (
    <div className={s["root"]}>
      <Card.Group className="cards">
        {[...templatesList, ...backgrounds].map((template, index) => (
          <MiniCard key={index} mode="thumb-only" {...template} />
        ))}
      </Card.Group>
    </div>
  );
};
