import React from "react";
import { Router } from "@reach/router";
import RootPage from "./pages/root";
import Configs from "./pages/configs";
import ConfigPage from "./pages/config-page";

import "./global.overrides.css";
import s from "./App.module.css";

export default () => (
  <div className={s["App"]}>
    <Router>
      <RootPage path="/" />
      <Configs path="/configs" />
      <ConfigPage path="configs/:configId" />
    </Router>
  </div>
);
