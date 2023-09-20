/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

import { HitButton } from '../../base-controls/hit-button/hit-button';
import './hit-button-group.css';
import React from "react";
/**
 * HIT Button Group control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * ** onUpdateRecords -callback to execute on refresh button click.
 * @returns HIT Button Group control component.
 */
const HitButtonGroup = (props) => {
    const {onUpdateRecords}=props;
    return <div className='hit-button-group'>
        <HitButton title='Add' clickEvent={()=>console.log('Add')} icon='add'></HitButton>
        <HitButton title='Filter' clickEvent={()=>console.log('filter')} icon='filter'></HitButton>
        <HitButton title='refresh' clickEvent={onUpdateRecords} icon='refresh'></HitButton>
    </div>
};

export default HitButtonGroup;
