import React from "react";
import { InvalidPropertyException } from "../../../domain-model/exceptions/invalid-property-exception";

const HitFilter = ({ filters }) => {
    if (!Array.isArray(filters)) {
        // Property wasn't defined as intended.
        throw new InvalidPropertyException('HitFilter', 'filters', 'Should be an array.');
    }

    const filterControls = filters.map()
    return (<div className='hit-filter'>
    </div>);
};

export { HitFilter };
