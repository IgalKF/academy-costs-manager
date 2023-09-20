import React from "react";
import Refresh from '@mui/icons-material/Refresh';
import Calendar from '@mui/icons-material/CalendarToday';
import Filter from '@mui/icons-material/Tune';
import Add from '@mui/icons-material/Add';
import './hit-icon.css';

/**
 * HIT icon control - Encapsulates MUI's complexity, providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * @returns Cusom icon element.
 */
const HitIcon = ({ children }) => {
    let iconElement;

    // Determine an explicit SVG offload.
    // Expanded by demand.
    switch (children) {
        case 'refresh':
            iconElement = <Refresh />
            break;
        case 'calendar':
            iconElement = <Calendar/>
            break;
        case 'filter':
            iconElement = <Filter/>
            break;
        case 'add':
            iconElement = <Add/>
            break;
        default:
            break;
    }

    return <div className='hit-icon'>
        {iconElement}
    </div>
};

export { HitIcon };
