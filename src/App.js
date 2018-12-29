import React, { Component } from "react";
import Header from "./Header/Header";
import ColorInput from "./ColorInput/ColorInput";
import { Card, Icon, Image, Modal, Dropdown } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  state = {
    type: 'vertical',
    color1: "#4da0b0",
    color2: "#d39d38"
  };
  render() {
    const { type, color1, color2 } = this.state;

    console.log('type', type);
    const direction = type === 'vertical' ? 'bottom' : 'right';

    return (
      <div className="App">
        <Header />
        <div class="restricted-width-area">
          <Card.Group className="cards">
            <Card>
              <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/2d38cc73343905.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg" />
              <Card.Content>
                <a>
                  <Icon name="user" />
                  Danielle
                </a>
              </Card.Content>
            </Card>
            <Card>
              <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/eac13142003297.Y3JvcCwxMTIwLDg3NiwwLDUyMQ.jpg" />
              <Card.Content>
                <a>
                  <Icon name="user" />
                  Superrare
                </a>
              </Card.Content>
            </Card>
            <Modal
              open
              dimmer="inverted"
              closeIcon
              trigger={
                <Card>
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/d0abd171491073.Y3JvcCwxNDIyLDExMTIsOTgsNDk.jpg" />
                  <Card.Content>
                    <a>
                      <Icon name="user" />
                      Something
                    </a>
                  </Card.Content>
                </Card>
              }
            >
              <Modal.Content className="modal-content">
                <div className="modal-sidebar">
                  <div className="title-container">Linear Gradient</div>
                  <div className="config-container">
                    <label htmlFor="type" className="form-label">
                      Type
                    </label>
                    <Dropdown
                      id="type"
                      options={[
                        { key: 1, text: "Vertical", value: 'vertical' },
                        { key: 2, text: "Horizontal", value: 'horizontal' },
                      ]}
                      onChange={(target, { value }) => this.setState({ type: value })}
                      defaultValue={type}
                      selection
                    />
                    <label for="type" className="form-label">
                      First color
                    </label>
                    <ColorInput
                      color={color1}
                      onChange={value => this.setState({ color1: value })}
                    />
                    <label for="type" className="form-label">
                      Second color
                    </label>
                    <ColorInput
                      color={color2}
                      onChange={value => this.setState({ color2: value })}
                    />
                    {/* <label for="type" className="form-label">
                    Distance
                  </label>
                  <Checkbox slider /> */}
                  </div>
                  <div className="author-container">
                    <a href="twitter.com/user">
                      <Icon name="user" />
                      Something
                    </a>
                  </div>
                </div>
                <div className="modal-preview">
                  <div
                    className="preview"
                    style={{
                      background: `linear-gradient(to ${direction}, ${color1}, ${color2})`
                    }}
                  />
                </div>
              </Modal.Content>
            </Modal>
          </Card.Group>
        </div>
      </div>
    );
  }
}

export default App;
