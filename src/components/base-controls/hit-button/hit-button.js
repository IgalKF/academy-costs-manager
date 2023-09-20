/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slotzki  318875846
*/


import React from "react";
import { Button} from '@mui/material';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { HitIcon } from "../hit-icon/hit-icon";

/**
 * HIT button control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * * type - Button's style type (contained, outlined, text).
 * * clickEvent - Button's click event.
 * * icon - An optional icon to be displayed before the caption.
 * @returns HIT button control component.
 */
const HitButton = ({title, type, clickEvent, icon }) => {

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
