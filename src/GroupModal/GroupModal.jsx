import React from "react";
import { Modal, Card } from "semantic-ui-react";
import MiniCard from "../MiniCard/MiniCard";

import s from "./GroupModal.module.css";

class GroupModal extends React.Component {
  render() {
    return (
      <Modal
        open
        closeIcon={true}
        closeOnDimmerClick={true}
        onClose={this.props.onClose}
        className={s["group-modal"]}
        dimmer="inverted"
      >
        <Modal.Content className={s["group-modal-content"]}>
          <Card.Group>
            {" "}
            {this.props.adaptations.map((template, index) => (
              <MiniCard key={index} {...template} />
            ))}
          </Card.Group>
        </Modal.Content>
      </Modal>
    );
  }
}

export default GroupModal;
