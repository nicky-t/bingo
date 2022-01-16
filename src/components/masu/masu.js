import React from "react";
import "./masu.css";

const Masu = ({ column, row, value }) => {
  return (
    <div class="container">
      <p>column: {column}</p>
      <p>row: {row}</p>
      <p>value: {row === 2 && column === 2 ? "Free!" : value}</p>
    </div>
  );
};

export default Masu;
