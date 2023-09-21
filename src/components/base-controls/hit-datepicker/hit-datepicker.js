/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/
import React from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './hit-datepicker.css';

/**
 * HIT date picker control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties
 * @returns HIT date picker control component.
 */
const HitDatepicker = ({ controlKey, label, valueState }) => {

  const [value, setValue] = valueState;

  // Handle selection change.
  const handleChange = (date) => {
    setValue({ ...value, [controlKey]: date });
  };

  return <div className="hit-control hit-datepicker">
    <div className="inline-align-container">
      <DatePicker format="DD/MM/YYYY" onChange={handleChange} value={value?.[controlKey]} label={label} />
    </div>
  </div>;
};

export { HitDatepicker };
