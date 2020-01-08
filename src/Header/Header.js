import React, { Component } from "react";
import classnames from "classnames";
import { Button } from "semantic-ui-react";

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
            {/* <Button
              icon
              className={s["social-button"]}
              target="_blank"
              href="https://www.instagram.com/adaptiff"
            >
              <Icon name="instagram" />
            </Button>
            <Button
              icon
              className={s["social-button"]}
              target="_blank"
              href="https://www.twitter.com/adaptiff_com"
            >
              <Icon name="twitter" />
            </Button>
            <Button
              icon
              className={s["social-button"]}
              target="_blank"
              href="https://t.me/adaptiff"
            >
              <Icon name="telegram plane" />
            </Button> */}
            <Button
              icon
              className={s["contact-button"]}
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSddoo8_28sRF5Pt7AZae5wtTXPH18dNYFoD8kujnf7omcKaDQ/viewform"
            >
              Contact
            </Button>
            <Button
              icon
              className={s["add-code-button"]}
              target="_blank"
              href="https://docs.google.com/forms/d/1UjRg1IMhTAwZSUelpORjsXjSUvWGXiHBRZ7cFDrlePA/viewform"
            >
              Contribute
            </Button>
            <Button
              icon
              className={s["log-in-button"]}
              basic
              aria-label="Coming soon"
              data-balloon-pos="down"
            >
              Log In
            </Button>
            <div className={s["submit-button-wrapper"]}>
              <Button
                color="black"
                icon
                className={s["submit-button"]}
                aria-label="Coming soon"
                data-balloon-pos="down"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
