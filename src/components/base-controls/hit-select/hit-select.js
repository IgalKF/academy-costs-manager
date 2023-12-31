/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { InvalidPropertyException } from "../../../domain-model/exceptions/invalid-property-exception";
import './hit-select.css';
import { RequiredPropertyException } from "../../../domain-model/exceptions/required-property-exception";

/**
 * @param {Object} properties - Cpmponent's properties:
 * @member {{ value, label }[] | string[]} options - A set of options to select form. 
 * @member {{ label }} label - The label of the control. 
 * @member {[state, setState]} valueState - State definitions [state, set state function]. 
 * @returns Cusom select element.
 */
const HitSelect = ({ controlKey, options, label, valueState, initialValue }) => {
  if (!controlKey) {
    // Property wasn't defined.
    throw new RequiredPropertyException('HitSelect', 'key');
  }

  if (!options) {
    // Property wasn't defined.
    throw new RequiredPropertyException('HitSelect', 'options');
  }

  if (!Array.isArray(options)) {
    // Property wasn't defined as intended.
    throw new InvalidPropertyException('HitSelect', 'options', 'Should be an array.');
  }

  if (!valueState) {
    // Property wasn't defined.
    throw new RequiredPropertyException('HitSelect', 'valueState');
  }

  // Initialize selection state.
  const [value, setValue] = valueState;
  const selectedValue = initialValue ?? value[controlKey] ?? '';

  const optionsList = options.map((option) => {
    if (option.value && option.label) {
      // If a value exists for the key.
      return (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>);
    } else if (option.value) {
      // If only the key exists.
      return (<MenuItem key={option.value} value={option.value}>{option.value}</MenuItem>);
    } else if (option.label && !option.value) {
      // If there's a null value for selection cancellation like 'None' or 'All'
      return (<MenuItem key={option.label} value="">{option.label}</MenuItem>);
    }
    else if (typeof option === 'object') {
      // Property wasn't defined as intended.
      throw new InvalidPropertyException('HitSelect', 'options', 'Invalid object structure.');
    } else {
      // If it's just a string array.
      return (<MenuItem key={option} value={option}>{option}</MenuItem>);
    }
  });

  // Generate a unique identifier for dynamic label purpose.
  const timeStamp = new Date().getTime();
  const labelId = `select-${timeStamp}`;

  // Set label if provided.
  const labelElement = label ? (<InputLabel id={labelId}>{label}</InputLabel>) : null;

  // Handle selection change.
  const handleChange = (event) => {
    setValue({ ...value, [controlKey]: event.target.value });
  };

  return (
    <FormControl className="hit-control hit-select">
      {labelElement}
      <Select onChange={handleChange} value={selectedValue} label={label} labelId={labelId} className="select-input">
        {optionsList}
      </Select>
    </FormControl>
  );
};

export { HitSelect };
