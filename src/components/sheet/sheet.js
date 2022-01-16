import React, { useState, useEffect } from "react";
import Masu from "../masu/masu";
import "./sheet.css";

const Sheet = () => {
  const [bingoState, setBingoState] = useState([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ]);

  const [valueList, setValueList] = useState(
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4]
  );

  useEffect(() => {
    setValueList(
      bingoState.map((c, columnIndex) =>
        c.map((state, rowIndex) => generateRandomValue(rowIndex))
      )
    );
  }, []);

  const generateRandomValue = (row) => {
    let min;
    let max;
    let randomNum;
    switch (row) {
      case 0:
        min = 1;
        max = 15;

        while (true) {
          randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
          if (!valueList.includes(randomNum)) {
            valueList.push(randomNum);
            return randomNum;
          }
        }
      case 1:
        min = 16;
        max = 30;

        while (true) {
          randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
          if (!valueList.includes(randomNum)) {
            valueList.push(randomNum);
            return randomNum;
          }
        }
      case 2:
        min = 31;
        max = 45;

        while (true) {
          randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
          if (!valueList.includes(randomNum)) {
            valueList.push(randomNum);
            return randomNum;
          }
        }
      case 3:
        min = 46;
        max = 60;

        while (true) {
          randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
          if (!valueList.includes(randomNum)) {
            valueList.push(randomNum);
            return randomNum;
          }
        }
      case 4:
        min = 61;
        max = 75;

        while (true) {
          randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
          if (!valueList.includes(randomNum)) {
            valueList.push(randomNum);
            return randomNum;
          }
        }
    }
  };

  const handleClick = (column, row) => {
    const newState = bingoState.map((c, columnIndex) =>
      c.map((state, rowIndex) => {
        if (columnIndex === column && rowIndex === row) {
          return true;
        }
        return state;
      })
    );

    setBingoState(newState);
  };

  return (
    <>
      {bingoState.map((column, columnIndex) => (
        <div className="row-container">
          {column.map((state, rowIndex) => (
            <Masu
              column={columnIndex}
              row={rowIndex}
              value={valueList[columnIndex][rowIndex]}
              isOpen={state}
              onClick={handleClick}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Sheet;
