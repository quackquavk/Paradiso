import React from "react";

const ChevronDown = ({ color = "#000000", cssClasses = "ion-icon" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={cssClasses} fill={color}>
      <path d="M496 132L256 372 16 132h480z"/>
    </svg>
  );
};
export default ChevronDown