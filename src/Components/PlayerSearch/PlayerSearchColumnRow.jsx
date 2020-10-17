import React from 'react';

import RangeInput from "../inputs/RangeInput";
import SelectInput from "../inputs/SelectInput.jsx";
import NumberInput from "../inputs/NumberInput";

const PlayerSearchColumnRow = (props) => {
    const { rowData, onDataChange, isLast } = props;
    const { inputType, inputName, label, data } = rowData;

    const onRowDataChange = (newData) => {
        onDataChange({ name: inputName, data: { ...newData } });
    }

    const getElementByInputType = () => {
        switch (inputType) {
            case "select":
                return <SelectInput data={data} name={inputName} onDataChange={onRowDataChange} />;
            case "range":
                return <RangeInput data={data} name={inputName} onDataChange={onRowDataChange} />;
            case "number":
                return <NumberInput data={data} name={inputName} onDataChange={onRowDataChange} />;
            default:
            return <SelectInput data={data} name={inputName} onDataChange={onRowDataChange} />;
        }
    }

    const inputElementByType = getElementByInputType();
    const rowAddClass = isLast ? "" : "row-border";
    return (
        <div className={`player-search-column-row row-${inputType} ${rowAddClass} flex align-center space-between`}>
            <p className="column-row-label">{label}</p>
            {inputElementByType}
        </div>
    )
}

export default PlayerSearchColumnRow
