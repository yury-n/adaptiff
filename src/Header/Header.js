import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a class="logo" href="/">
          <div class="logo-symbol">
            <div class="logo-symbol-block-1" />
            <div class="logo-symbol-block-2" />
            <div class="logo-symbol-block-3" />
            <div class="logo-symbol-block-4" />
          </div>
          <div class="logo-text">generatiff</div>
        </a>
        <div class="header-buttons">
          <Button icon basic className="social-button">
            <Icon name="instagram" />
          </Button>
          <Button icon basic className="social-button">
            <Icon name="twitter" />
          </Button>
          <Button icon basic className="social-button">
            <Icon name="telegram plane" />
          </Button>
          <Button icon basic className="contact-button">
            Contact
          </Button>
          <Button icon className="submit-button">
            Submit
          </Button>
        </div>
      </header>
    );
  }
}

export default Header;
