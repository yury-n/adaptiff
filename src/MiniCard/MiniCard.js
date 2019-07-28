import React, { Component } from "react";
import classnames from "classnames";
import { Icon, Card } from "semantic-ui-react";
import Modal from "../Modal/Modal";

import s from "./MiniCard.module.css";

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
      thumb,
      thumbBackgroundSize,
      thumbWidth,
      onClick
    } = this.props;
    return (
      <>
        <Card
          link={false}
          className={classnames(
            s["mini-card"],
            mode && s[`${mode}-mode`],
            this.props.className
          )}
          onClick={onClick || this.showModal}
          as="div"
          style={{ width: thumbWidth }}
        >
          <div className={s['mini-preview-wrapper']}>
            <div
              className={s["mini-preview"]}
              style={{
                backgroundImage: `url("${thumb}")`,
                backgroundSize: thumbBackgroundSize
              }}
            />
          </div>
          <button className={s["use-button"]}>
            <Icon name="edit outline" />
            Use
          </button>
          <Card.Content className={s["content"]}>
            <div className={s["mini-title"]}>{title}</div>
            <span className={s["mini-by-author"]}>
              {mode === "hero" ? "background by" : "by"}
            </span>
            {authorLink ? (
              <a
                href={authorLink}
                className={s["mini-author"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {author || "multiple authors"}
              </a>
            ) : (
              <span className={s["mini-author"]}>
                {author || "multiple authors"}
              </span>
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
