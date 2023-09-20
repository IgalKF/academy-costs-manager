import { HitButton } from '../../base-controls/hit-button/hit-button';
import './hit-button-group.css';
import React from "react";
/**
 * HIT Button Group control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * @returns HIT Button Group control component.
 */
const HitButtonGroup = () => {
    return <div className='hit-button-group'>
        <HitButton title='Add' clickEvent={()=>console.log('Add')} icon='add'></HitButton>
        <HitButton title='Filter' clickEvent={()=>console.log('filter')} icon='filter'></HitButton>
        <HitButton title='refresh' clickEvent={()=>console.log('refresh')} icon='refresh'></HitButton>
    </div>
};

export default HitButtonGroup;
