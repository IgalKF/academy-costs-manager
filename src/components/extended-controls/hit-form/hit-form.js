/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slotzki  318875846
*/

// Import React and exception classes
import React from "react";
import { InvalidPropertyException } from "../../../domain-model/exceptions/invalid-property-exception";
import { InvalidTypeException } from "../../../domain-model/exceptions/invalid-type-exception";
import { RequiredPropertyException } from "../../../domain-model/exceptions/required-property-exception";

// Import UI components
import { HitTextInput } from "../../base-controls/hit-text-input/hit-text-input";
import { HitSelect } from "../../base-controls/hit-select/hit-select";
import { HitDatepicker } from "../../base-controls/hit-datepicker/hit-datepicker";
import { HitButton } from "../../base-controls/hit-button/hit-button";

// Import styles for the component
import './hit-form.css'

// Define the HitForm component
const HitForm = ({ formControls, closeButtonOptions, submitButtonOptions }) => {

    // Validate that formControls is an array
    if (!Array.isArray(formControls)) {
        throw new InvalidPropertyException('HitForm', 'formControls', 'Should be an array.');
    }

    // Define default labels for buttons
    const closeButtonLabel = closeButtonOptions.label ?? 'Submit';
    const submitButtonLabel = submitButtonOptions.label ?? 'Submit';

    // Create an array of control elements based on formControls
    const controlElements = formControls.map(control => {
        // Type is required for every control element.
        if (!control.type) {
            throw new RequiredPropertyException('HitForm -> formControls', 'type');
        }

        // If type isn't a string type.
        if (typeof (control.type) != 'string') {
            throw new InvalidTypeException('type', typeof (control.type), 'string');
        }

        // Render UI components based on the control type
        switch (control.type) {
            case 'text':
                return (<HitTextInput></HitTextInput>);
            case 'select':
                return (<HitSelect></HitSelect>);
            case 'date':
                return (<HitDatepicker></HitDatepicker>);
            default:
                throw new InvalidPropertyException('HitForm -> formControls', 'type', `Invalid type was supported: ${control.type}.`)
        }
    });

    // Render the HitForm component
    return <div className='hit-form'>
        <div className='form-content'>
            {controlElements}
        </div>
        <div className='form-actions'>
            <HitButton type='outlined'>{closeButtonLabel}</HitButton>
            <HitButton type='contained'>{submitButtonLabel}</HitButton>
        </div>
    </div>
};

// Export the HitForm component
export { HitForm };
