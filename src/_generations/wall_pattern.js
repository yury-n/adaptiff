import React from "react";

export default {
  author: "Tim Holman",
  authorLink: "https://codepen.io/tholman",
  title: "Wall Pattern",
  thumbs: [
    "/thumbs/wall_pattern/4.png"
    // "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/37abb01e-9eb0-4ceb-8e7f-c247caed05a6/dcxhgrx-c2da73e5-9323-48c9-87dd-cfb71ec4651c.png",
    // "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/37abb01e-9eb0-4ceb-8e7f-c247caed05a6/dcxhgrd-46697057-35de-4418-893b-470889d04e89.png",
    // "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/37abb01e-9eb0-4ceb-8e7f-c247caed05a6/dcxhgr0-ba93084a-1e69-427b-a2a8-ce5efee44aa8.png"
  ],
  config: [],
  generate: ({ direction, palette, angle }) => {
    let background;
    if (direction === "custom_angle") {
      background = `linear-gradient(${angle}deg, ${palette[0]}, ${palette[1]})`;
    } else {
      background = `linear-gradient(to ${direction}, ${palette[0]}, ${
        palette[1]
      })`;
    }
    const styledObject = { background };
    return <div id="preview" className="preview" style={styledObject} />;
  }
};
