/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/


import React from "react";
import { Button} from '@mui/material';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { HitIcon } from "../hit-icon/hit-icon";
import { InvalidPropertyException } from "../../../domain-model/exceptions/invalid-property-exception";
import { RequiredPropertyException } from "../../../domain-model/exceptions/required-property-exception";

/**
 * HIT button control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * * title - Tooltip's hover title.
 * * type - Button's style type (contained, outlined, text).
 * * clickEvent - Button's click event-mandatory.
 * * icon - An optional icon to be displayed before the caption.
 * @returns HIT button control component.
 */
const HitButton = ({title, type, clickEvent, icon }) => {
  
  if (title &&typeof title != 'string') {
    // Property wasn't defined as intended.
    throw new InvalidPropertyException('HitButton', 'title', 'Should be a string.');
  }

  if (type && typeof type != 'string') {
    // Property wasn't defined as intended.
    throw new InvalidPropertyException('HitButton', 'type', 'Should be a string.');
  }

  if (!clickEvent) {
    // Property wasn't defined.
    throw new RequiredPropertyException('HitButton', 'clickEvent');
  }

  if (typeof clickEvent != 'function') {
    // Property wasn't defined as intended.
    throw new InvalidPropertyException('HitButton', 'clickEvent', 'Should be a function.');
  }

  if (icon && typeof icon != 'string') {
    // Property wasn't defined as intended.
    throw new InvalidPropertyException('HitButton', 'icon', 'Should be a string.');
  }


    const iconElement = icon ? <HitIcon>{icon}</HitIcon> : undefined;

    return <div className='hit-button'>
        {icon?(<Tooltip title={title}>
          <IconButton onClick={clickEvent}>
            {iconElement}
          </IconButton>
        </Tooltip>): (<Button onClick={clickEvent} variant={type}>{title}</Button>)}
    </div>;
};

export { HitButton };
