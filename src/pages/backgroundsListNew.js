import backgroundsList from "./backgroundsList";
import adaptationsNew from "./adaptationsNew";

export default [
  ...[0, 2, 3, 1, 4].map(index => adaptationsNew[index]),
  ...backgroundsList
];
