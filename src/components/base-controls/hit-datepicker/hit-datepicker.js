import React from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { HitLabel } from "../hit-label/hit-label";
import './hit-datepicker.css';

/**
 * HIT date picker control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties
 * @returns HIT date picker control component.
 */
const HitDatepicker = ({ children }) => {
  const labelElement = children ? <HitLabel>{children}</HitLabel> : undefined;

  return <div className='hit-datepicker'>
    <div class="inline-align-container">
      <div className="datepicker-label">
        {labelElement}
      </div>
      <DatePicker />
    </div>
  </div>;
};

export { HitDatepicker };
