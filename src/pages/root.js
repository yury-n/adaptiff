import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { Card, Checkbox, Button } from "semantic-ui-react";
import MiniCard from "../MiniCard/MiniCard";
import { Provider } from "react-redux";
import store from "../store";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SubscribeBlock from "../SubscribeBlock/SubscribeBlock";
import backgroundsList from "./backgroundsList";
import Collection from "../Modal/Collection/Collection";
import collections from "./collections";
import Layouts from "../Modal/Layouts/Layouts";
import Tabs from "../Modal/Tabs/Tabs";

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
  const [selectedTab, setSelectedTab] = useState("templates");
  const [page, setPage] = useState(0);
  const all = backgroundsList;
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
      <Provider store={store}>
        <Header />
        <div
          className={classnames(
            s["main-content-area"],
            "restricted-width-area"
          )}
        >
          <div style={{ display: "none" }}>
            <div className={s["main-header"]}>
              Unique adaptive designs for everyone
            </div>
            <div className={s["sub-header"]}>
              transform and customize, remix and build upon the material for any
              purpose
            </div>
          </div>
          <div className={s["get-started"]} style={{ display: "none" }}>
            <Button basic size="big" className={s["CTA-button"]}>
              Enter Your Text
            </Button>
            <div className={s["CTA-text"]}>or</div>
            <div className={s["CTA-text"]}>
              start by picking a background below
            </div>
          </div>
          <Tabs />
          <Layouts />
          <div className={s["quick-post-form"]} style={{ display: "none" }}>
            <div className={s["preview-side"]}>
              <div
                className={s["preview"]}
                style={{ backgroundImage: "url(/thumbs/big/1.png)" }}
              />
            </div>
            <div className={s["form-side"]}>
              <input
                className={s["quick-start-input"]}
                placeholder="Primary Text"
              />
              <textarea
                className={s["quick-start-input"]}
                placeholder="Secondary Text"
                rows="3"
              ></textarea>
              <div className={s["quick-post-form-footer"]}>
                <Button icon className={s["font-style-button"]} basic>
                  Choose Font Styles
                </Button>
                <Button
                  className={s["preview-button"]}
                  size="big"
                  color="black"
                >
                  Preview
                </Button>
              </div>
            </div>
          </div>
          <div className={s["collections"]}>
            {collections.map((collection, index) => (
              <Collection key={index} {...collection} />
            ))}
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
      </Provider>
    </>
  );
};
