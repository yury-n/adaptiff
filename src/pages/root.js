import React from "react";
import classnames from "classnames";
import { Checkbox, Button } from "semantic-ui-react";
import { Provider } from "react-redux";
import store from "../store";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SubscribeBlock from "../SubscribeBlock/SubscribeBlock";
import Collection from "../Modal/Collection/Collection";
import collections from "./collections";
import Layouts from "../Modal/Layouts/Layouts";
import Tabs from "../Modal/Tabs/Tabs";
import LegacyCards from "./LegacyCards/LegacyCards";
import ThinCloseIcon from "../Icons/ThinCloseIcon";

import s from "../App.module.css";

export default () => {
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
          <Tabs />
          <div className={s["quick-form"]}>
            <div className={s["quick-form-close-wrapper"]}>
              <div className={s["quick-form-close"]}>
                <ThinCloseIcon />
              </div>
            </div>
            <input
              className={s["quick-start-input"]}
              placeholder="Type something"
            />
            {/* <textarea
              className={s["quick-start-input"]}
              placeholder="Secondary Text"
              rows="3"
            ></textarea> */}
          </div>
          <div className={s["v2-layout"]}>
            <Layouts className={s["sidebar"]} />
            <div className={s["collections"]}>
              {collections.map((collection, index) => (
                <Collection key={index} {...collection} />
              ))}
            </div>
          </div>
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
          <div className={s["filters"]}>
            <Checkbox label="generative" checked={true} />
            <Checkbox label="static" checked={true} />
          </div>
          <LegacyCards />
          <SubscribeBlock />
        </div>
        <Footer />
      </Provider>
    </>
  );
};
