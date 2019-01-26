import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Card } from "semantic-ui-react";
import MiniCard from "./MiniCard/MiniCard";
import "./App.css";

import generation0 from "./_generations/linear_gradient";
import generation1 from "./_generations/octagonal_star";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div class="restricted-width-area">
          <Card.Group className="cards">
            <MiniCard {...generation0} />
            <MiniCard {...generation1} />
          </Card.Group>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
