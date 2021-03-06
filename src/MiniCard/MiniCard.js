import React, { Component } from "react";
import classnames from "classnames";
import { Card } from "semantic-ui-react";
import Modal from "../Modal/Modal";
import GroupModal from "../GroupModal/GroupModal";

import s from "./MiniCard.module.css";

class MiniCard extends Component {
  state = {
    showModal: false,
    showGroupModal: false,
    isSelectingColor: false
  };
  constructor(props) {
    super(props);
    if (props.showModal) this.state.showModal = true;
    if (props.showGroupModal) this.state.showGroupModal = true;
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
      groupAdaptations
    } = this.props;
    return (
      <>
        <Card
          link={false}
          className={classnames(
            s["mini-card"],
            groupAdaptations && s["mini-card-group"],
            mode && s[`${mode}-mode`],
            this.props.className
          )}
          onMouseDown={this.onClick}
          as="div"
          style={{ width: thumbWidth }}
        >
          <div className={s["mini-preview-wrapper"]}>
            <div
              className={s["mini-preview"]}
              style={{
                backgroundImage: `url("${thumb}")`,
                backgroundSize: thumbBackgroundSize
              }}
            />
          </div>
          <Card.Content className={s["content"]}>
            <div className={s["mini-title"]} title={title}>
              {title}
            </div>
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
        {this.state.showGroupModal && (
          <GroupModal
            adaptations={groupAdaptations}
            onClose={this.closeGroupModal}
          />
        )}
      </>
    );
  }

  onClick = () => {
    const { onClick, clickAndShowModal, groupAdaptations } = this.props;

    if (groupAdaptations) {
      this.showGroupModal();
      return;
    }

    if (clickAndShowModal) {
      onClick();
      this.showModal();
    } else {
      onClick ? onClick() : this.showModal();
    }
  };

  showGroupModal = () => {
    this.setState({ showGroupModal: true });
  };

  closeGroupModal = () => {
    this.setState({ showGroupModal: false });
  };

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
