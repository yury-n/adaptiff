import React from "react";
import classnames from "classnames";
import { Button } from "semantic-ui-react";
// import MiniCard from "../MiniCard/MiniCard";

import Header from "../Header/Header";
import Templates from "../Templates/Templates";
import Footer from "../Footer/Footer";
import SubscribeBlock from "../SubscribeBlock/SubscribeBlock";

// import { backgrounds } from "./adaptationsList";

import s from "../App.module.css";

// reactKawaii from "./_adaptationConfigs/react_kawaii";
// import bubbles from "../_adaptationConfigs/bubbles";
// import pulse from "../_adaptationConfigs/pulse";
// import abstractParticles from "../_adaptationConfigs/abstractParticles";
// import tunnel from "./_adaptationConfigs/tunnel";
// import waves from "./_adaptationConfigs/waves";
// import tunnel from "./_adaptationConfigs/tunnel";
// import waves from "./_adaptationConfigs/waves";

export default () => (
  <>
    <Header />
    <div
      className={classnames(s["main-content-area"], "restricted-width-area")}
    >
      <div className={s["tabs"]}>
        <Button.Group size="medium">
          <Button color="black">All</Button>
          <Button basic color="black">
            Backgrounds
          </Button>
          <Button basic color="black">
            Templates
          </Button>
        </Button.Group>
      </div>
      <Templates />
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
