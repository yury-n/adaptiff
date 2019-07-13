import React from "react";
import * as Kawaii from "react-kawaii";

export default {
  author: "Miuki Miu",
  authorLink: "https://react-kawaii.now.sh",
  title: "React Kawaii",
  thumb: "/thumbs/react_kawaii/1.jpg",
  thumbBackgroundSize: "200px",
  config: [
    {
      key: "character",
      text: "Character",
      type: "select",
      defaultValue: "Cat",
      options: [
        {
          key: 0,
          text: "Backpack",
          value: "Backpack"
        },
        { key: 1, text: "Browser", value: "Browser" },
        { key: 2, text: "Cat", value: "Cat" },
        { key: 3, text: "CreditCard", value: "CreditCard" },
        { key: 4, text: "Ghost", value: "Ghost" },
        { key: 5, text: "IceCream", value: "IceCream" },
        { key: 5, text: "Mug", value: "Mug" },
        { key: 5, text: "Planet", value: "Planet" },
        { key: 5, text: "SpeechBubble", value: "SpeechBubble" }
      ]
    },
    {
      key: "mood",
      text: "Mood",
      type: "select",
      defaultValue: "blissful",
      options: [
        {
          key: 0,
          text: "Blissful",
          value: "blissful"
        },
        { key: 1, text: "Lovestruck", value: "lovestruck" },
        { key: 2, text: "Happy", value: "happy" },
        { key: 3, text: "Excited", value: "excited" },
        { key: 4, text: "Sad", value: "sad" },
        { key: 5, text: "Shocked", value: "shocked" }
      ]
    },
    {
      key: "size",
      text: "Size",
      type: "range",
      defaultValue: 250,
      min: 100,
      max: 500
    }
  ],
  palettes: [
    ["#facb7d", "#cdecfd"],
    ["#a6e191", "#4a5159"],
    ["#f2a5dc", "#fff"],
    ["#e0e4e8", "#fff"],
    ["#83d1fb", "#fff"]
  ],
  generate: ({ palette, size, mood, character }) => {
    const styledObject = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: palette[1]
    };
    const KawaiiComponent = Kawaii[character];
    return (
      <div id="preview" className="preview" style={styledObject}>
        <KawaiiComponent size={size} mood={mood} color={palette[0]} />
      </div>
    );
  }
};
