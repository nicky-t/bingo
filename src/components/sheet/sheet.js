import React from "react";
import Masu from "../masu/masu";
import "./sheet.css";

const Sheet = () => {
  const bingoSheet = [
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
  ];

  const valueList = [];

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

  return (
    <>
      {bingoSheet.map((column) => (
        <div className="row-container">
          {column.map((row) => (
            <Masu
              column={bingoSheet.indexOf(column)}
              row={row}
              value={generateRandomValue(row)}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Sheet;
