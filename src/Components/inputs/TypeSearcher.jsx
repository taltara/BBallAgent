import React, { useState, useEffect } from "react";

import SelectInput from "../inputs/SelectInput.jsx";
import SortIcon from "../../assets/sort.svg";

const TypeSearcher = (props) => {
  const { onDataChange, currValue, handleAsc } = props;
  const { ascending } = currValue;

  const sortAscClass = ascending ? "" : "desc";
  // console.log(handleAsc);
  return (
    <div className="type-searcher flex align-center">
      <span
        className={`flex align-center space-center ${sortAscClass}`}
        onClick={handleAsc}
      >
        <img src={SortIcon} alt="" className="type-asc" />
        <p className="type-asc-text">{ascending ? "asc" : "desc"}</p>
      </span>
      <SelectInput
        data={{
          isMulti: false,
          selectType: "sortBy",
        }}
        name="sortBy"
        onDataChange={onDataChange}
        placeholder="Sort By"
        value={currValue}
      />
    </div>
  );
};

export default TypeSearcher;
