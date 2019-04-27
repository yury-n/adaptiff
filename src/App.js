import React from "react";
import {Router} from "@reach/router"
import RootPage from './pages/root';
import Configs from './pages/configs';
import ConfigPage from './pages/config-page';

export default () => (
  <div className="App">
    <Router>
      <RootPage path="/" />
      <Configs path="/configs" />
      <ConfigPage path="configs/:configId" />
    </Router>
  </div>
);
