import React, { Component } from "react";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-inner restricted-width-area">
          <div className="license">License</div>
          All images generated on Adaptiff can be used for free. You can use
          them for commercial and noncommercial purposes.
        </div>
      </footer>
    );
  }
}

export default Footer;
