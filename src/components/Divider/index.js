import React from 'react';

import "./style.scss";

const Divider = ({ bgColor, title, subtitle }) => {
  return (
    <div className="divider" style={{ backgroundColor: bgColor }}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default Divider;