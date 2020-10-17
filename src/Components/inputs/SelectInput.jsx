import React, { useState, useEffect } from "react";

import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import utilService from "../../services/utilService";
import { options } from "../../selectOptions";

import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";

const SelectInput = (props) => {
  const { data, name, onDataChange, placeholder, value } = props;
  const { selectType, isMulti } = data;

  const [currSelected, setCurrSelected] = useState(name === "sortBy" ? { label: "Match", code: "match" } : null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (value) {
      console.log(value);
      // setCurrSelected(value.by);
    }
  }, [value]);

  useEffect(() => {
    utilService.setButtonRippleListeners("general-dark");
  }, []);

  useEffect(() => {
    onDataChange({ selected: currSelected });
  }, [currSelected]);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "tomato" : "",
    }),
    placeholder: () => ({
      fontSize: 14,
    }),
  };

  const DropdownIndicator = (props) => {
    return (
      <span anim="general-dark">
        <components.DropdownIndicator {...props}>
          <ArrowIcon className={`select-arrow ${isOpen ? "open-arrow" : ""}`} />
        </components.DropdownIndicator>
      </span>
    );
  };

  const animatedComponents = makeAnimated();
  console.log(name);
  return (
    <div className="select-input">
      <Select
        components={{
          DropdownIndicator: DropdownIndicator,
          animatedComponents,
        }}
        value={currSelected}
        onChange={(selectedOption) => {
          // console.log(selectedOption);
          setCurrSelected(selectedOption);
        }}
        options={options[selectType]}
        placeholder={
          placeholder
            ? placeholder
            : `Please Select ${
                selectType[0].toUpperCase() + selectType.slice(1)
              }`
        }
        isMulti={isMulti}
        closeMenuOnSelect={!isMulti}
        onMenuOpen={() => setIsOpen(true)}
        onMenuClose={() => setIsOpen(false)}
        styles={customStyles}
      />
    </div>
  );
};

export default SelectInput;
