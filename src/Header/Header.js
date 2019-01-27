import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a className="logo" href="/">
          <div className="logo-symbol">
            <div className="logo-symbol-block-1" />
            <div className="logo-symbol-block-2" />
          </div>
          <div className="logo-text">adaptiff</div>
        </a>
        <div className="header-buttons">
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
