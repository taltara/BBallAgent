import React, { useState, useEffect } from "react";

import { Range, getTrackBackground } from "react-range";

const RangeInput = (props) => {
  const { data, onDataChange } = props;

  // const getInitialRange = () => {
  //   const halfPoint = (data.range[1] - data.range[0]) / 2 + data.range[0];
  //   const lowerHalfPoint = Math.floor((halfPoint - data.range[0]) / 2 + data.range[0]);
  //   const upperHalfPoint = Math.ceil(
  //     (data.range[1] - halfPoint) / 2 + halfPoint
  //   );
  //   // console.log(data);
  //   // console.log(halfPoint, lowerHalfPoint, upperHalfPoint);
  //   return [lowerHalfPoint, upperHalfPoint];
  // };
  
  const [currRange, setCurrRange] = useState([data.range[0] + 10, data.range[1] - 10]);

  useEffect(() => {
    onDataChange({ range: currRange });
  }, [currRange]);
  
  return (
    <div className="range-input flex align-center space-center">
      <Range
        step={data.step}
        min={data.range[0]}
        max={data.range[1]}
        values={currRange}
        onChange={(values) => setCurrRange(values)}
        renderTrack={({ props, children }) => (
          <div
            className="range-input-track flex align-center space-center"
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{ ...props.style }}
          >
            <p>{data.range[0]}</p>
            <div
              ref={props.ref}
              className="range-input-track-inner"
              style={{
                background: getTrackBackground({
                  values: currRange,
                  colors: ["#ccc", "#ff7600", "#ccc"],
                  min: data.range[0],
                  max: data.range[1],
                }),
              }}
            >
              {children}
            </div>
            <p>{data.range[1]}</p>
          </div>
        )}
        renderThumb={({ props, value, index, isDragged }) => (
          // <div className="range-input-thumb-container flex column align-center space-center">
          <div
            className="range-input-thumb"
            {...props}
            style={{ ...props.style }}
          >
            <svg width={isDragged ? "24px" : "10px"} viewBox="0 0 30 42" className={`thumb-tear ${isDragged ? "thumb-value-bigger" : ""}`}>
              <path
                fill="transparent"
                stroke="#000"
                strokeWidth="1"
                d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
              />
            </svg>
            <p
              className={`thumb-value flex align-center space-center ${isDragged ? "thumb-value-bigger" : ""}`}
            >
              {value}
            </p>

            <div
              style={{
                transition: "0.15s ease-in-out",
                height: "8px",
                width: "2.5px",
                backgroundColor: isDragged ? "#ff7600" : "#CCC",
              }}
            />
          </div>
          // </div>
        )}
      />
    </div>
  );
};

export default RangeInput;
