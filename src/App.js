import React, { Component } from "react";
import Header from "./Header/Header";
import ColorInput from "./ColorInput/ColorInput";
import PaletteDropdown from "./PaletteDropdown/PaletteDropdown";
import Range from "./Range/Range";
import { Card, Image, Modal, Dropdown } from "semantic-ui-react";
import 'rc-slider/assets/index.css';
import { numbers } from "./translations";
import "./App.css";

class App extends Component {
  state = {
    type: "vertical",
    palette: ["#aaf8ba", "#e8e309"],
    isSelectingColor: false,
    angle: 180
  };
  render() {
    const { type, palette, angle, isSelectingColor } = this.state;

    const direction = type === "vertical" ? "bottom" : "right";

    return (
      <div className="App">
        <Header />
        <div class="restricted-width-area">
          <Card.Group className="cards">
            <Card link={false}>
              <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/2d38cc73343905.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg" />
              <Card.Content>
                <div className="mini-title">Spirals</div>
                <a className="mini-author">Danielle</a>
              </Card.Content>
            </Card>
            <Card>
              <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/eac13142003297.Y3JvcCwxMTIwLDg3NiwwLDUyMQ.jpg" />
              <Card.Content>
                <div className="mini-title">Spread Tech</div>
                <a className="mini-author">Superrare</a>
              </Card.Content>
            </Card>
            <Modal
              open={isSelectingColor || true || undefined}
              closeIcon
              trigger={
                <Card as="div">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/d0abd171491073.Y3JvcCwxNDIyLDExMTIsOTgsNDk.jpg" />
                  <Card.Content>
                    <div className="mini-title">Circles Here</div>
                    <a className="mini-author">Something</a>
                  </Card.Content>
                </Card>
              }
            >
              <Modal.Content className="modal-content">
                <div className="modal-sidebar">
                  <div className="title-container">
                    <span className="title">Linear Gradient</span>
                    <br />
                    <span className="by-author">by</span>
                    <a className="author" href="twitter.com/user">
                      Something
                    </a>
                  </div>
                  <div className="config-container">
                    <label htmlFor="type" className="form-label">
                      Type
                    </label>
                    <Dropdown
                      id="type"
                      options={[
                        { key: 1, text: "Vertical", value: "vertical" },
                        { key: 2, text: "Horizontal", value: "horizontal" }
                      ]}
                      onChange={(target, { value }) =>
                        this.setState({ type: value })
                      }
                      defaultValue={type}
                      selection
                    />
                    <label for="type" className="form-label">
                      Palette
                    </label>
                    <PaletteDropdown
                      selectedPalette={palette}
                      palettes={[
                        ["#aaf8ba", "#e8e309"],
                        ["#d39d38", "#4da0b0"],
                        ["#c8f6ff", "#b438d3"]
                      ]}
                      onChange={palette => this.setState({ palette })}
                    />
                    {palette.map((color, index) => (
                      <>
                        <label for="type" className="form-label">
                          {numbers[index]} color
                        </label>
                        <ColorInput
                          color={color}
                          onChange={value =>
                            this.setState({
                              palette: [
                                ...palette.slice(0, index),
                                value,
                                ...palette.slice(index + 1, palette.length)
                              ]
                            })
                          }
                          onOpen={() =>
                            this.setState({ isSelectingColor: true })
                          }
                          onClose={() =>
                            this.setState({ isSelectingColor: false })
                          }
                        />
                      </>
                    ))}
                    <label for="type" className="form-label">
                    Angle
                    </label>
                    <Range min={0} max={360} value={angle} onChange={(value) => this.setState({angle: value})} />                    
                  </div>
                </div>
                <div className="modal-preview">
                  <div
                    className="preview"
                    style={{
                      background: `linear-gradient(${angle}deg, ${
                        palette[0]
                      }, ${palette[1]})`
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
