import React from 'react';

import "./style.scss";

const Divider = ({ bgColor, title, subtitle }) => {
  return (
    <div className="divider" style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Divider;