import React, { Component } from "react";
import { Card } from "semantic-ui-react";

import "./MiniCard.css";

class MiniCard extends Component {
  state = {
    loadAllImages: false
  };
  render() {
    const images = [
      "https://mir-s3-cdn-cf.behance.net/projects/404/2d38cc73343905.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/37abb01e-9eb0-4ceb-8e7f-c247caed05a6/dcxhgrx-c2da73e5-9323-48c9-87dd-cfb71ec4651c.png",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/37abb01e-9eb0-4ceb-8e7f-c247caed05a6/dcxhgrd-46697057-35de-4418-893b-470889d04e89.png",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/37abb01e-9eb0-4ceb-8e7f-c247caed05a6/dcxhgr0-ba93084a-1e69-427b-a2a8-ce5efee44aa8.png"
    ];
    return (
      <Card link={false} className="mini-card">
        <div
          className="mini-previews-scroller"
          onScroll={() => this.setState({ loadAllImages: true })}
        >
          <div className="mini-preview-paddle mini-preview-paddle-prev" />
          <div className="mini-preview-paddle mini-preview-paddle-next" />
          <div className="mini-previews-wrapper">
            <div
              className="mini-preview"
              style={{
                backgroundImage: `url("${images[0]}")`
              }}
            />
            <div
              className="mini-preview"
              style={{
                backgroundImage:
                  this.state.loadAllImages && `url("${images[1]}")`
              }}
            />
            <div
              className="mini-preview"
              style={{
                backgroundImage:
                  this.state.loadAllImages && `url("${images[2]}")`
              }}
            />
            <div
              className="mini-preview"
              style={{
                backgroundImage:
                  this.state.loadAllImages && `url("${images[3]}")`
              }}
            />
          </div>
        </div>
        <Card.Content>
          <div className="mini-title">Spirals</div>
          <span className="mini-by-author">by</span>
          <a href="//twitter.com/cc" className="mini-author">
            Danielle
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default MiniCard;
