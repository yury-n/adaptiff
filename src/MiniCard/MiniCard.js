import React, { Component } from "react";
import classnames from "classnames";
import { Card } from "semantic-ui-react";
import Modal from "../Modal/Modal";

import { EditButton } from './EditButton';

import s from "./MiniCard.module.css";

class MiniCard extends Component {
  state = {
    showModal: false,
    isSelectingColor: false,
    isEditButtonShown: false,
  };
  constructor(props) {
    super(props);
    if (props.showModal) this.state.showModal = true;
  }

  toggleEditButtonState = () => this.setState({ isEditButtonShown: !this.state.isEditButtonShown });

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
          onMouseEnter={this.toggleEditButtonState}
          onMouseLeave={this.toggleEditButtonState}
          as="div"
          style={{ width: thumbWidth }}
        >
          <div
            className={s["mini-preview"]}
            style={{
              backgroundImage: `url("${thumb}")`,
              backgroundSize: thumbBackgroundSize
            }}
          />
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
                {author}
              </a>
            ) : (
              <span className={s["mini-author"]}>{author}</span>
            )}
          </Card.Content>
          <EditButton isShown={this.state.isEditButtonShown} />
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
