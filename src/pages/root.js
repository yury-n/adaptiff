import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { Card, Checkbox, Button } from "semantic-ui-react";
import MiniCard from "../MiniCard/MiniCard";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SubscribeBlock from "../SubscribeBlock/SubscribeBlock";

import backgroundsList from "./backgroundsList";
import backgroundsListNew from "./backgroundsListNew";

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

const ITEMS_PER_CHUNK = 25;

export default () => {
  const [selectedTab, setSelectedTab] = useState(
    localStorage.getItem("app.selectedStream") || "featured"
  );
  const [page, setPage] = useState(0);
  const all = selectedTab === "featured" ? backgroundsList : backgroundsListNew;
  const adaptations = all.slice(0, (page + 1) * ITEMS_PER_CHUNK);
  useEffect(() => {
    localStorage.setItem("app.selectedTab", selectedTab);
  }, [selectedTab]);

  let idToShow = null;
  if (window.location.search !== "") {
    idToShow = +window.location.search.split("=")[1];
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
              basic={selectedTab !== "featured"}
              color="black"
              onClick={() => setSelectedTab("featured")}
            >
              Featured
            </Button>
            <Button
              basic={selectedTab !== "newest"}
              color="black"
              onClick={() => setSelectedTab("newest")}
            >
              Newest
            </Button>
          </Button.Group>
        </div>
        <div className={s["filters"]}>
          <Checkbox label="generative" checked={true} />
          <Checkbox label="static" checked={true} />
        </div>
        {/* <div className={s["subheader"]}>адаптивные дизайны от комьюнити</div> */}
        <Card.Group className={classnames(s["cards"], "cards")}>
          {adaptations.map((template, index) => (
            <MiniCard
              showModal={template.id === idToShow}
              showGroupModal={
                idToShow &&
                template.groupAdaptations &&
                template.groupAdaptations[0].id === idToShow
              }
              key={index}
              {...template}
            />
          ))}
        </Card.Group>
        {(page + 1) * ITEMS_PER_CHUNK < all.length && (
          <div className={s["load-more-wrapper"]}>
            <Button
              basic
              color="black"
              size="large"
              onClick={() => setPage(page + 1)}
            >
              Load More
            </Button>
          </div>
        )}
        <SubscribeBlock />
      </div>
      <Footer />
    </>
  );
};
