import React, { Component } from "react";
import Header from "./Header/Header";
import ColorInput from "./ColorInput/ColorInput";
import PaletteDropdown from "./PaletteDropdown/PaletteDropdown";
import Range from "./Range/Range";
import { Button, Card, Image, Modal, Dropdown } from "semantic-ui-react";
import MiniCard from "./MiniCard/MiniCard";
import { ResizableBox } from "react-resizable";
import "rc-slider/assets/index.css";
import { numbers } from "./translations";
import html2canvas from "html2canvas";
import "./App.css";

const generation = {
  thumbs: [
    "https://mir-s3-cdn-cf.behance.net/projects/404/2d38cc73343905.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/37abb01e-9eb0-4ceb-8e7f-c247caed05a6/dcxhgrx-c2da73e5-9323-48c9-87dd-cfb71ec4651c.png",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/37abb01e-9eb0-4ceb-8e7f-c247caed05a6/dcxhgrd-46697057-35de-4418-893b-470889d04e89.png",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/37abb01e-9eb0-4ceb-8e7f-c247caed05a6/dcxhgr0-ba93084a-1e69-427b-a2a8-ce5efee44aa8.png"
  ],
  config: [
    {
      key: "direction",
      type: "select",
      options: [
        { key: 1, text: "Left to Right", value: "right" },
        { key: 2, text: "Right to Left", value: "left" },
        { key: 3, text: "Top to Bottom", value: "bottom" },
        { key: 4, text: "Bottom to Top", value: "top" }
      ]
    },
    {
      key: "angle",
      type: "range",
      min: 0,
      max: 360
    }
  ]
};

class App extends Component {
  state = {
    direction: "right",
    palette: ["#aaf8ba", "#e8e309"],
    isSelectingColor: false,
    angle: 180
  };
  render() {
    const { direction, palette, angle, isSelectingColor } = this.state;

    let background;
    if (direction === "custom_angle") {
      background = `linear-gradient(${angle}deg, ${palette[0]}, ${palette[1]})`;
    } else {
      background = `linear-gradient(to ${direction}, ${palette[0]}, ${
        palette[1]
      })`;
    }

    const styledObject = { background };

    return (
      <div className="App">
        <Header />
        <div class="restricted-width-area">
          <Card.Group className="cards">
            <MiniCard {...generation} />
            <Card>
              <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/eac13142003297.Y3JvcCwxMTIwLDg3NiwwLDUyMQ.jpg" />
              <Card.Content>
                <div className="mini-title">Spread Tech</div>
                <span className="mini-by-author">by</span>
                <a className="mini-author">Superrare</a>
              </Card.Content>
            </Card>
            <Modal
              open={isSelectingColor || undefined}
              closeIcon
              trigger={
                <Card as="div">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/d0abd171491073.Y3JvcCwxNDIyLDExMTIsOTgsNDk.jpg" />
                  <Card.Content>
                    <div className="mini-title">Circles Here</div>
                    <span className="mini-by-author">by</span>
                    <a className="mini-author">Something</a>
                  </Card.Content>
                </Card>
              }
            >
              <ResizableBox
                width={Math.round(window.innerWidth * 0.7)}
                height={Math.round(window.innerHeight * 0.6)}
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
                      <label className="form-label">Direction</label>
                      <Dropdown
                        id="type"
                        options={[
                          {
                            key: 0,
                            text: "Custom Angle",
                            value: "custom_angle"
                          },
                          { key: 1, text: "Left to Right", value: "right" },
                          { key: 2, text: "Right to Left", value: "left" },
                          { key: 3, text: "Top to Bottom", value: "bottom" },
                          { key: 4, text: "Bottom to Top", value: "top" }
                        ]}
                        onChange={(target, { value }) =>
                          this.setState({ direction: value })
                        }
                        defaultValue={direction}
                        selection
                      />
                      {direction === "custom_angle" && (
                        <>
                          <label className="form-label">Angle</label>
                          <Range
                            min={0}
                            max={360}
                            value={angle}
                            onChange={value => this.setState({ angle: value })}
                          />
                        </>
                      )}
                      <label className="form-label">Palette</label>
                      <PaletteDropdown
                        selectedPalette={palette}
                        palettes={[
                          ["#aaf8ba", "#e8e309"],
                          ["#d39d38", "#4da0b0"],
                          ["#8E2DE2", "#4A00E0"],
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
                    </div>
                  </div>
                  <div className="modal-preview">
                    <div
                      id="capture"
                      className="preview"
                      style={styledObject}
                    />
                    <Button
                      icon="download"
                      basic
                      className="download-button"
                      content="Download"
                      onClick={this.download}
                    />
                  </div>
                </Modal.Content>
              </ResizableBox>
            </Modal>
          </Card.Group>
        </div>
      </div>
    );
  }

  download = () => {
    html2canvas(document.getElementById("capture")).then(function(canvas) {
      const link = document.createElement("a");
      var image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      link.download = "generation.png";
      link.setAttribute("href", image);
      link.click();
    });
  };
}

export default App;
