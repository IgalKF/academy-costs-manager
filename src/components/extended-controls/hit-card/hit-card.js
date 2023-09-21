/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

import { Card } from "@mui/material";
import React from "react";

/**
 * HIT Card control - Encapsulates MUI's complexity, providing dedicated flexibility and custom reusability.
 * @param {Object} properties - Component's properties:
 * @member {React.ReactNode} children - The content to be placed inside the card.
 * @returns HIT Card control component.
 */
const HitCard = ({ children }) => {
    return (
        <div className='hit-card'>
            <Card>{children}</Card>
        </div>
    );
};

// Export the HitCard component
export { HitCard };
