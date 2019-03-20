import React, { Component } from "react";
import classnames from "classnames";
import { Card } from "semantic-ui-react";
import Modal from "../Modal/Modal";

import "./MiniCard.css";

class MiniCard extends Component {
  state = {
    showModal: false,
    isSelectingColor: false
  };
  constructor(props) {
    super(props);
    if (props.showModal) this.state.showModal = true;
  }
  render() {
    const {
      author,
      authorLink,
      title,
      mode,
      thumbs,
      thumbBackgroundSize
    } = this.props;
    return (
      <>
        <Card
          link={false}
          className={classnames(
            "mini-card",
            mode === "hero" && "hero-mode",
            this.props.className
          )}
          onClick={this.showModal}
          as="div"
        >
          <div
            className="mini-preview"
            style={{
              backgroundImage: `url("${thumbs[0]}")`,
              backgroundSize: thumbBackgroundSize
            }}
          />
          <Card.Content>
            <div className="mini-title">{title}</div>
            <span className="mini-by-author">
              {mode === "hero" ? "background by" : "by"}
            </span>
            {authorLink ? (
              <a
                href={authorLink}
                className="mini-author"
                target="_blank"
                rel="noopener noreferrer"
              >
                {author}
              </a>
            ) : (
              <span className="mini-author">{author}</span>
            )}
          </Card.Content>
        </Card>
        {this.state.showModal && (
          <Modal
            onClose={this.closeModal}
            {...this.props}
            onStartSelectingColor={() =>
              this.setState({ isSelectingColor: true })
            }
            onStopSelectingColor={() =>
              this.setState({ isSelectingColor: false })
            }
          />
        )}
      </>
    );
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    if (this.state.isSelectingColor) {
      return;
    }
    this.setState({ showModal: false });
  };
}

export default MiniCard;
