import React from "react";
import { InvalidPropertyException } from "../../../domain-model/exceptions/invalid-property-exception";
import { HitForm } from "../hit-form/hit-form";

const HitFilter = ({ filters }) => {
    if (!Array.isArray(filters)) {
        // Property wasn't defined as intended.
        throw new InvalidPropertyException('HitFilter', 'filters', 'Should be an array.');
    }

    const filterFormOptions = [
        {
            type: 'date',
        },
        {
            type: 'select',
        }
    ];

    const filterControls = filters.map()
    return (<div className='hit-filter'>
        <HitForm>
            
        </HitForm>
    </div>);
};

export { HitFilter };
