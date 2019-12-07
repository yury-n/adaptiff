import { allAdaptations } from "./adaptations";

export default [
  {
    title: "rounded cut off lines",
    author: "kate.only",
    items: [109, 75, 79, 76, 80, 78, 77, 81, 74].map(
      index => allAdaptations[index]
    )
  },
  {
    title: "Artistic Smoke",
    author: "dragdropsite",
    authorLink: "https://github.com/dragdropsite/waterpipe.js/",
    items: [90, 98, 99, 100, 101, 102].map(index => allAdaptations[index])
  },
  {
    title: "mesh noise",
    author: "Derek Morash",
    authorLink: "https://codepen.io/derekmorash/pen/VdgGXZ",
    items: [43, 16, 25, 103, 104, 105, 106, 107, 108].map(
      index => allAdaptations[index]
    )
  }
];
