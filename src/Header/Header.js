import React, { Component } from "react";
import classnames from "classnames";
import { Button, Icon } from "semantic-ui-react";

import s from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={s["header"]}>
        <div className={classnames(s["header-inner"], "restricted-width-area")}>
          <a className={s["logo"]} href="/">
            <div className={s["logo-symbol"]}>
              <div className={s["logo-symbol-block-1"]} />
              <div className={s["logo-symbol-block-2"]} />
            </div>
            <div className={s["logo-text"]}>
              adaptiff
              <span className={s["logo-beta"]}>
                β<span className={s["logo-eta"]}>eta</span>
              </span>
            </div>
          </a>
          <div className={s["header-buttons"]}>
            <Button icon className={s["social-button"]}>
              <Icon name="instagram" />
            </Button>
            <Button icon className={s["social-button"]}>
              <Icon name="twitter" />
            </Button>
            <Button icon className={s["social-button"]}>
              <Icon name="telegram plane" />
            </Button>
            <Button icon className={s["contact-button"]}>
              Contact
            </Button>
            <Button icon className={s["submit-button"]}>
              Submit
            </Button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
