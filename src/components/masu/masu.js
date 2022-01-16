import React from "react";
import "./masu.css";

const Masu = ({ column, row, value, isOpen, onClick }) => {
  return (
    <button
      onClick={() => onClick(column, row)}
      className={isOpen ? "container-open" : "container-close"}
    >
      <p>column: {column}</p>
      <p>row: {row}</p>
      <p>isOpen: {isOpen}</p>
      <p>value: {row === 2 && column === 2 ? "Free!" : value}</p>
    </button>
  );
};

export default Masu;
