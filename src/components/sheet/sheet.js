import React, { useState, useEffect, useCallback } from "react";
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

  const [valueList, setValueList] = useState([
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
  ]);

  const [reachCountState, setReachCountState] = useState(0);
  const [isBingoState, setIsBingoState] = useState(false);

  const checkReach = useCallback(() => {
    let reachCount = 0;
    //横の列の確認
    for (let i = 0; i < bingoState.length; i++) {
      let count = 0;
      for (let j = 0; j < bingoState.length; j++) {
        if (bingoState[i][j]) {
          count++;
        }
        if (count === 4) {
          reachCount++;
          break;
        }
      }
    }
    //縦の列の確認
    for (let i = 0; i < bingoState.length; i++) {
      let count = 0;
      for (let j = 0; j < bingoState.length; j++) {
        if (bingoState[j][i]) {
          count++;
        }
        if (count === 4) {
          reachCount++;
          break;
        }
      }
    }
    //斜めの確認(左上から右下)
    let count = 0;
    for (let i = 0; i < bingoState.length; i++) {
      if (bingoState[i][i]) {
        count++;
      }
      if (count === 4) {
        reachCount++;
        break;
      }
    }
    //斜めの確認(右上から左下)
    count = 0;
    for (let i = 0; i < bingoState.length; i++) {
      if (bingoState[4 - i][i]) {
        count++;
      }
      if (count === 4) {
        reachCount++;
        break;
      }
    }

    setReachCountState(reachCount);
  }, [bingoState]);

  const checkBingo = useCallback(() => {
    //横の列の確認
    for (let i = 0; i < bingoState.length; i++) {
      let count = 0;
      for (let j = 0; j < bingoState.length; j++) {
        if (bingoState[i][j]) {
          count++;
        }
        if (count === 5) {
          setIsBingoState(true);
          return;
        }
      }
    }
    //縦の列の確認
    for (let i = 0; i < bingoState.length; i++) {
      let count = 0;
      for (let j = 0; j < bingoState.length; j++) {
        if (bingoState[j][i]) {
          count++;
        }
        if (count === 5) {
          setIsBingoState(true);
          return;
        }
      }
    }
    //斜めの確認(左上から右下)
    let count = 0;
    for (let i = 0; i < bingoState.length; i++) {
      if (bingoState[i][i]) {
        count++;
      }
      if (count === 5) {
        setIsBingoState(true);
        return;
      }
    }
    //斜めの確認(右上から左下)
    count = 0;
    for (let i = 0; i < bingoState.length; i++) {
      if (bingoState[4 - i][i]) {
        count++;
      }
      if (count === 5) {
        setIsBingoState(true);
        return;
      }
    }
  }, [bingoState]);

  useEffect(() => {
    setValueList(
      bingoState.map((c, _) =>
        c.map((__, rowIndex) => generateRandomValue(rowIndex))
      )
    );
  }, []);

  useEffect(() => {
    checkReach();
    checkBingo();
  }, [bingoState, checkReach]);

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
      default:
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
      {isBingoState ? <p className="bingo">Bingo！！</p> : null}
      {reachCountState > 0 ? (
        <p className="reach">{reachCountState}リーチ</p>
      ) : null}
      <div className="column">
        <div className="column-name">B列</div>
        <div className="column-name">I列</div>
        <div className="column-name">N列</div>
        <div className="column-name">G列</div>
        <div className="column-name">O列</div>
      </div>
      {bingoState.map((column, columnIndex) => (
        <div key={columnIndex} className="row-container">
          {column.map((state, rowIndex) => (
            <Masu
              key={(columnIndex * 5 + rowIndex).toString()}
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
