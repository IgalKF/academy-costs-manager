import React from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './hit-datepicker.css';

/**
 * HIT date picker control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties
 * @returns HIT date picker control component.
 */
const HitDatepicker = ({ children }) => {
  return <div className='hit-datepicker'>
    <div className="inline-align-container">
      <DatePicker label={children} />
    </div>
  </div>;
};

export { HitDatepicker };
