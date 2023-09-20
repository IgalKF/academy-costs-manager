/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slotzki  318875846
*/

// Import necessary dependencies
import React from "react";
import { InvalidPropertyException } from "../../../domain-model/exceptions/invalid-property-exception";
import { HitForm } from "../hit-form/hit-form";

// Define the HitFilter component
const HitFilter = ({ filters }) => {
    // Check if 'filters' is an array; if not, throw an exception
    if (!Array.isArray(filters)) {
        // Property 'filters' wasn't defined as intended.
        throw new InvalidPropertyException('HitFilter', 'filters', 'Should be an array.');
    }

    // Define options for the filter form
    const filterFormOptions = [
        {
            type: 'date',
        },
        {
            type: 'select',
        }
    ];

    // Create filter controls based on 'filters' array (To be completed)
    const filterControls = filters.map(/* To be completed */);

    // Render the HitFilter component
    return (
        <div className='hit-filter'>
            <HitForm>
                {/* Render filter controls here (To be completed) */}
            </HitForm>
        </div>
    );
};

// Export the HitFilter component
export { HitFilter };
