import { allAdaptations } from "./adaptations";

export default [
  {
    title: "Artistic Smoke",
    author: "dragdropsite",
    authorLink: "https://github.com/dragdropsite/waterpipe.js/",
    items: [90, 98, 99, 100, 101, 102].map(index => allAdaptations[index])
  },
  {
    title: "rounded cut off lines",
    author: "kate.only",
    isPremium: true,
    items: [74, 75, 79, 76, 80, 78, 77, 81].map(index => allAdaptations[index])
  }
];
