/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

// Import necessary dependencies from Material-UI icons and custom styles
import React from "react";
import Refresh from '@mui/icons-material/Refresh';
import Calendar from '@mui/icons-material/CalendarToday';
import Filter from '@mui/icons-material/Tune';
import Add from '@mui/icons-material/Add';
import './hit-icon.css';

/**
 * HIT icon control - Encapsulates MUI's complexity, providing dedicated flexibility and custom reusability.
 * @param {Object} properties - Component's properties:
 * @returns Custom icon element.
 */
const HitIcon = ({ children }) => {
    let iconElement;

    // Determine an explicit SVG offload based on the 'children' prop.
    // Expanded by demand for specific icon types.
    switch (children) {
        case 'refresh':
            iconElement = <Refresh />; // Render the 'Refresh' icon
            break;
        case 'calendar':
            iconElement = <Calendar/>; // Render the 'Calendar' icon
            break;
        case 'filter':
            iconElement = <Filter/>; // Render the 'Filter' icon
            break;
        case 'add':
            iconElement = <Add/>; // Render the 'Add' icon
            break;
        default:
            break;
    }

    // Render the HitIcon component with the determined icon element
    return (
        <div className='hit-icon'>
            {iconElement}
        </div>
    );
};

// Export the HitIcon component
export { HitIcon };
