import { allAdaptations } from "./adaptations";

export default [
  [90, 98, 99, 100, 101, 102],
  87,
  86,
  85,
  84,
  3,
  88,
  82,
  83,
  [74, 75, 79, 76, 80, 78, 77, 81],
  70,
  69,
  67,
  66,
  65,
  63,
  61,
  58,
  89,
  57,
  56,
  49,
  55,
  54,
  43,
  51,
  64,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  2,
  47,
  6,
  8,
  9,
  62,
  42,
  46,
  3,
  68,
  53,
  40,
  1,
  39,
  71,
  37,
  10,
  11,
  // 60,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  59,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37
].map(index => {
  if (Array.isArray(index)) {
    const firstInArray = index[0];
    const adaptation = { ...allAdaptations[firstInArray] };
    adaptation.groupAdaptations = index.map(i => allAdaptations[i]);
    return adaptation;
  }
  return allAdaptations[index];
});
