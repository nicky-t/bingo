import React from "react";
import "./masu.css";

const Masu = ({ column, row, value, isOpen, onClick }) => {
  return (
    <button
      onClick={() => onClick(column, row)}
      className={isOpen ? "container-open" : "container-close"}
    >
      {isOpen ? (
        <div className="open"></div>
      ) : (
        <p className="value">{row === 2 && column === 2 ? "Free!" : value}</p>
      )}
    </button>
  );
};

export default Masu;
