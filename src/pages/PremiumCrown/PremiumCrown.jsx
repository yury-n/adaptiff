import React from "react";

import s from "./PremiumCrown.module.css";

export default () => (
  <svg
    width="90"
    height="56"
    viewBox="0 0 90 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={s["premium-icon"]}
  >
    <path
      d="M62.694 21.292L44.95 0L27.21 21.292L0 0L10.646 44.943C10.646 50.5 15.154 55.004 20.707 55.004H69.198C74.751 55.004 79.257 50.5 79.257 44.943L89.902 0L62.694 21.292ZM44.985 31.515C42.739 31.515 40.915 29.691 40.915 27.445C40.915 25.197 42.739 23.375 44.985 23.375C47.233 23.375 49.055 25.197 49.055 27.445C49.055 29.69 47.233 31.515 44.985 31.515Z"
      fill="url(#paint0_radial)"
    />
    <defs>
      <radialGradient
        id="paint0_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(44.951 27.502) rotate(90) scale(27.502 44.951)"
      >
        <stop stopColor="#FAFF00" />
        <stop offset="1" stopColor="orange" stopOpacity="0.63" />
      </radialGradient>
    </defs>
  </svg>
);
