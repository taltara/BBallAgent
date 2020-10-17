import React, { useState } from "react";

import TypeSwitcher from "../general/TypeSwitcher/TypeSwitcher";
import ColumnRow from "./PlayerSearchColumnRow";

const metricImperialData = [
  {
    type: { length: "cm", weight: "kg" },
    img: <p>metric</p>,
    // label: "metric",
  },
  {
    type: { length: "ft/inches", weight: "lbs" },
    img: <p>imperial</p>,
    // label: "imperial",
  },
];

const PlayerSearchColumn = (props) => {
  const { columnData, onDataChange, columnType, hasSwitch, setUnits } = props;
  const { id, title, filters } = columnData;
  const onColumnDataChange = (newData) => {
    onDataChange({ id, filter: newData });
  };

  //   console.log(columnData);
  const isSwitch = hasSwitch ? true : false;
  const handleType = setUnits ? setUnits : null;
  const titleCenterType = isSwitch ? "evenly" : "center";
  return (
    <div
      className={`player-search-column column-${columnType} flex column align-start space-center`}
    >
      <div className={`search-column-title flex align-center space-${titleCenterType}`}>

        <p className="column-title-title">{title}</p>
        {isSwitch ? (
          <TypeSwitcher
            handleTypeChange={handleType}
            dataTypes={metricImperialData}
            initType={0}
            animation="activeTab"
            switcherClass="type-switcher"
            switcherImgClass="switcher-img"
            swticherLabelClass="switcher-label"
            switchOnStart={false}
          />
        ) : null}
      </div>
      <section className="search-column-rows">
        {filters.map((filter, index) => {
          // console.log(filter);
          return (
            <ColumnRow
              key={index}
              rowData={filter}
              onDataChange={onColumnDataChange}
              isLast={index === filters.length - 1}
            />
          );
        })}
      </section>
    </div>
  );
};

export default PlayerSearchColumn;
