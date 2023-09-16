import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { InvalidPropertyException } from "../../../domain-model/exceptions/invalid-property-exception";
import './hit-select.css';
import { HitLabel } from "../hit-label/hit-label";

const HitSelect = ({ options, label }) => {
  if (!Array.isArray(options)) {
    // Property wasn't defined as intended.
    throw new InvalidPropertyException('HitSelect', 'options', 'Should be an array.');
  }

  const optionsList = options.map((option) => {
    if (option.value && option.label) {
      // If a value exists for the key.
      return <MenuItem value={option.value}>{option.label}</MenuItem>;
    } else if (option.value) {
      // If only the key exists.
      return <MenuItem value={option.value}>{option.value}</MenuItem>;
    } else if (typeof option === 'object') {
      // Property wasn't defined as intended.
      throw new InvalidPropertyException('HitSelect', 'options', 'Invalid object structure.');
    } else {
      // If it's just a string array.
      return <MenuItem value={option}>{option}</MenuItem>;
    }
  });

  const timeStamp = new Date().getTime();
  const labelId = `${timeStamp}`;

  return (
      <HitLabel controlLabel={label} labelId={labelId}>
        <Select label={label} labelId={labelId} className="select-input">
          {optionsList}
        </Select>
      </HitLabel>
  );
};

export { HitSelect };
