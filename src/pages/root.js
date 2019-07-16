import React, { useState } from "react";
import classnames from "classnames";
import { Card, Button } from "semantic-ui-react";
import MiniCard from "../MiniCard/MiniCard";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SubscribeBlock from "../SubscribeBlock/SubscribeBlock";

import all from "./allAdaptationsList";
import templates from "./templatesList";
import backgrounds from "./backgroundsList";

import s from "../App.module.css";

// const [isExpanded, setIsExpanded] = useState(false);
// const [allCards, setAllCards] = useState(cards);
// const onViewAllClick = () => {
//   setIsExpanded(true);
//   import("./loadMore1").then(module => {
//     const moreCards = module.default;
//     setAllCards([...allCards, ...moreCards]);
//   });
// };

export default () => {
  const [selectedTab, setSelectedTab] = useState("all");
  let adaptations;
  switch (selectedTab) {
    default:
    case "all":
      adaptations = all;
      break;
    case "backgrounds":
      adaptations = backgrounds;
      break;
    case "templates":
      adaptations = templates;
      break;
  }
  return (
    <>
      <Header />
      <div
        className={classnames(s["main-content-area"], "restricted-width-area")}
      >
        <div className={s["tabs"]}>
          <Button.Group>
            <Button
              basic={selectedTab !== "all"}
              color="black"
              onClick={() => setSelectedTab("all")}
            >
              All
            </Button>
            <Button
              basic={selectedTab !== "backgrounds"}
              color="black"
              onClick={() => setSelectedTab("backgrounds")}
            >
              Backgrounds
            </Button>
            <Button
              basic={selectedTab !== "templates"}
              color="black"
              onClick={() => setSelectedTab("templates")}
            >
              Templates
            </Button>
          </Button.Group>
        </div>
        <Card.Group className={classnames(s["cards"], "cards")}>
          {adaptations.map((template, index) => (
            <MiniCard key={index} mode="thumb-only" {...template} />
          ))}
        </Card.Group>
        {/* <div className={s["load-more-wrapper"]}>
          <Button basic color="black" size="large">
            Load More
          </Button>
        </div> */}
        <SubscribeBlock />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSddoo8_28sRF5Pt7AZae5wtTXPH18dNYFoD8kujnf7omcKaDQ/viewform"
          className={s["feedback-button"]}
        >
          <span>feedback</span>
        </a>
      </div>
      <Footer />
    </>
  );
};
