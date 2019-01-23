import React, { Component } from "react";
import { Card } from "semantic-ui-react";

import "./MiniCard.css";

class MiniCard extends Component {
  state = {
    loadAllThumbs: false
  };
  render() {
    const { thumbs } = this.props;
    return (
      <Card link={false} className="mini-card">
        <div
          className="mini-previews-scroller"
          onScroll={() => this.setState({ loadAllThumbs: true })}
        >
          <div className="mini-preview-paddle mini-preview-paddle-prev" />
          <div className="mini-preview-paddle mini-preview-paddle-next" />
          <div className="mini-previews-wrapper">
            <div
              className="mini-preview"
              style={{
                backgroundImage: `url("${thumbs[0]}")`
              }}
            />
            <div
              className="mini-preview"
              style={{
                backgroundImage:
                  this.state.loadAllThumbs && `url("${thumbs[1]}")`
              }}
            />
            <div
              className="mini-preview"
              style={{
                backgroundImage:
                  this.state.loadAllThumbs && `url("${thumbs[2]}")`
              }}
            />
            <div
              className="mini-preview"
              style={{
                backgroundImage:
                  this.state.loadAllThumbs && `url("${thumbs[3]}")`
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
