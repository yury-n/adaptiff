import React from "react";
import classnames from "classnames";
import { Card } from "semantic-ui-react";
import MiniCard from "../MiniCard/MiniCard";

import Header from "../Header/Header";
import Templates from "../Templates/Templates";
import Footer from "../Footer/Footer";
import SubscribeBlock from "../SubscribeBlock/SubscribeBlock";

import { backgrounds } from "./adaptationsList";

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
      <div className={s["subheader"]}>templates</div>
      <Templates />
      <div className={s["subheader"]}>backgrounds</div>
      <Card.Group className="cards">
        {backgrounds.map((background, index) => (
          <MiniCard key={index} {...background} />
        ))}
      </Card.Group>
      <SubscribeBlock />
    </div>
    <Footer />
  </>
);
