import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { Card, Checkbox, Button } from "semantic-ui-react";
import MiniCard from "../MiniCard/MiniCard";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SubscribeBlock from "../SubscribeBlock/SubscribeBlock";

import all from "./backgroundsList";

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
    localStorage.getItem("app.selectedTab") || "all"
  );
  const [page, setPage] = useState(0);
  const adaptations = all.slice(0, (page + 1) * ITEMS_PER_CHUNK);
  useEffect(() => {
    localStorage.setItem("app.selectedTab", selectedTab);
  }, [selectedTab]);

  let indexToShow = null;
  if (window.location.search !== "") {
    indexToShow = +window.location.search.split("=")[1];
  }

  return (
    <>
      <Header />
      <div
        className={classnames(s["main-content-area"], "restricted-width-area")}
      >
        {indexToShow !== null && (
          <div className={s["vk-ad"]}>
            <div className={s["vk-text"]}>
              новые
              <br />
              дизайн элементы <br /> для вашего творчества
            </div>
            <div
              className={s["ad"]}
              dangerouslySetInnerHTML={{
                __html: `<script type="text/javascript" src="https://vk.com/js/api/openapi.js?162"></script>
              <div id="vk_groups"></div>
              <script type="text/javascript">
              VK.Widgets.Group("vk_groups", {mode: 1}, 185661561);
              </script>`
              }}
            >
              {/* <iframe
                name="fXD5eaaa"
                frameborder="0"
                src="https://vk.com/widget_community.php?app=0&amp;width=200px&amp;_ver=1&amp;gid=185661561&amp;mode=1&amp;color1=&amp;color2=&amp;color3=&amp;class_name=&amp;url=https%3A%2F%2Fvk.com%2Fdev%2FCommunity%3Fheight%3D400%26link%3Dhttp%253A%252F%252Fvk.com%252Fadaptiff%26mode%3D1%26no_cover%3D%26oid%3D-185661561%26wide%3D&amp;referrer=https%3A%2F%2Fwww.google.com%2F&amp;title=%D0%92%D0%B8%D0%B4%D0%B6%D0%B5%D1%82%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%20%7C%20%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B0%D0%BC&amp;16d3bce6722"
                scrolling="no"
                id="vkwidget2"
                style={{ width: 200, height: 141 }}
              ></iframe> */}
            </div>
          </div>
        )}
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
        <div className={s["filters"]}>
          <Checkbox label="generative" checked={true} />
          <Checkbox label="static" checked={true} />
        </div>
        {/* <div className={s["subheader"]}>адаптивные дизайны от комьюнити</div> */}
        <Card.Group className={classnames(s["cards"], "cards")}>
          {adaptations.map((template, index) => (
            <MiniCard
              showModal={indexToShow !== null && false && index === indexToShow}
              key={index}
              {...template}
            />
          ))}
        </Card.Group>
        {selectedTab === "all" && (page + 1) * ITEMS_PER_CHUNK < all.length && (
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
        {indexToShow !== null ? (
          <div className={s["vk-ad"]}>
            <div className={s["vk-text"]}>
              новые
              <br />
              дизайн элементы <br /> для вашего творчества
            </div>
            <div
              className={s["ad"]}
              dangerouslySetInnerHTML={{
                __html: `<script type="text/javascript" src="https://vk.com/js/api/openapi.js?162"></script>
              <div id="vk_groups"></div>
              <script type="text/javascript">
              VK.Widgets.Group("vk_groups", {mode: 1}, 185661561);
              </script>`
              }}
            ></div>
          </div>
        ) : (
          <SubscribeBlock />
        )}
      </div>
      <Footer />
    </>
  );
};
