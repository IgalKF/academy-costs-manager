/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slotzki  318875846
*/

import { HitButton } from '../../base-controls/hit-button/hit-button';
import './hit-button-group.css';

import React from "react";

const HitButtonGroup = () => {
    return <div className='hit-button-group'>
        <HitButton title='Add' clickEvent={()=>console.log('Add')} icon='add'></HitButton>
        <HitButton title='Filter' clickEvent={()=>console.log('filter')} icon='filter'></HitButton>
        <HitButton title='refresh' clickEvent={()=>console.log('refresh')} icon='refresh'></HitButton>
    </div>
};

export default HitButtonGroup;
