import React from "react";

export const Button = ({ text, isLoading, loadingText, ...rest }) => (
  <button {...rest}>
    <span>{isLoading ? loadingText : text}</span>
    {isLoading && <div />}
  </button>
);