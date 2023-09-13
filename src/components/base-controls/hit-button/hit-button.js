import React from "react";
import { Button } from '@mui/material'

/**
 * HIT button control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * * type - Button's style type (contained, outlined, text).
 * * clickEvent - Button's click event.
 * @returns HIT button control component.
 */
const HitButton = ({ children, type, clickEvent }) => {
    return <div className='hit-button'>
        <Button startIcon='' onClick={clickEvent} variant={type}>{children}</Button>
    </div>;
};

export { HitButton };
