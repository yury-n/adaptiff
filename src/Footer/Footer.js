import React, { Component } from "react";
import classnames from "classnames";

import s from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <footer className={s["footer"]}>
        <div className={classnames(s["footer-inner"], "restricted-width-area")}>
          <div className={s["license"]}>license</div>
          All images generated on Adaptiff can be used for free. You can use
          them for commercial and noncommercial purposes.
        </div>
      </footer>
    );
  }
}

export default Footer;
