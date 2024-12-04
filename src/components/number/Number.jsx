import React from "react";

import "./Number.scss";

const Number = () => {
  return (
    <div className="number">
      <div className="container">
        <h1>Орундар саны</h1>
        <div className="number__content">
          <div className="number__text">
            <span>№0</span>
            <span>20/32</span>
          </div>
          <div className="number__text">
            <span>№1</span>
            <span>8/8</span>
          </div>
          <div className="number__text">
            <span>№2</span>
            <span>9/9</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
