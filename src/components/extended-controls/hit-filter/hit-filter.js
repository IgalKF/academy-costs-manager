import React from "react";
import { InvalidPropertyException } from "../../../domain-model/exceptions/invalid-property-exception";
import { HitForm } from "../hit-form/hit-form";

const HitFilter = ({ filtersState }) => {
    if (!Array.isArray(filtersState) || filtersState.length !== 2) {
        // filterState should be a state definition.
        throw new InvalidPropertyException('HitFilter', 'filters', 'Should be a state definition with state instance and state function.');
    }

    const filterFormOptions = [
        {
            key: 'fromDate',
            type: 'date',
            label: 'From',
        },
        {
            key: 'toDate',
            type: 'date',
            label: 'To',
        },
        {
            key: 'category',
            type: 'select',
            label: 'Category',
        }
    ];

    return (<div className='hit-filter'>
        <HitForm submitButtonOptions={{submitEventCallback: () => {}}} closeButtonOptions={{closeEventCallback: () => {}}}  valueState={filtersState} formControls={filterFormOptions}/ >
    </div>);
};

export { HitFilter };
