import React, { useState, useEffect } from "react";

import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import utilService from "../../services/utilService";

const NumberInput = (props) => {
  let inputRef = null;
  let upButtonRef = null;
  let downButtonRef = null;

  const { data, onDataChange } = props;
  const { min, max, step } = data;

  const [currNumber, setCurrNumber] = useState("");
  const [arrowsClasses, setArrowsClasses] = useState({ up: "", down: "" });

  useEffect(() => {
    utilService.setButtonRippleListeners("general-dark");
  }, []);

  useEffect(() => {
    onDataChange({ value: currNumber });
  }, [currNumber]);

  const animateArrowOnClick = (change) => {
    const field = change === "+" ? "up" : "down";
    setArrowsClasses((prevState) => ({
      ...prevState,
      [field]: "clicked-arrow",
    }));
    setTimeout(() => {
      setArrowsClasses((prevState) => ({ ...prevState, [field]: "" }));
    }, 150);
  };

  const pressNumberChange = (change) => {
    animateArrowOnClick(change);
    const maxNum = max ? max : Infinity;
    setCurrNumber((prevState) => {
      const countChange = +`${change}${step}`;
      // console.log(countChange, prevState);
      if (prevState === "") {
        if (countChange > 0) return countChange;
        else return 0;
      } else {
        return prevState + countChange >= min
          ? (prevState + countChange) >= maxNum
            ? prevState
            : +(+prevState + countChange).toFixed(1)
          : min;
      }
    });
  };

  const typeNumberChange = (event) => {
    console.log(event.target);
  };

  return (
    <div className="number-input flex align-center space-center">
      <input
        value={currNumber === "" ? 0 : currNumber}
        ref={(input) => {
          inputRef = input;
        }}
        maxLength={4}
        onChange={(event) => {
          event.persist();
          setCurrNumber((prevState) => {
            console.log(event.target);

            const newNum = +event.target.value.replace(/\D/, "");
            const maxNum = max ? max : Infinity;
            return newNum >= min && newNum <= maxNum ? newNum : prevState;
          });
        }}
      />
      <div className="number-input-arrows flex column align-center space-center">
        <div
          className="input-arrow-up flex align-center space-center"
          anim="general-dark"
        >
          <ArrowIcon
            className={`arrow-up ${arrowsClasses.up} flex align-center space-center`}
            ref={(input) => {
              upButtonRef = input;
            }}
            onClick={() => pressNumberChange("+")}
          />
        </div>
        <div
          className="input-arrow-down flex align-center space-center"
          anim="general-dark"
        >
          <ArrowIcon
            className={`arrow-down ${arrowsClasses.down} flex align-center space-center`}
            ref={(input) => {
              downButtonRef = input;
            }}
            onClick={() => pressNumberChange("-")}
          />
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
