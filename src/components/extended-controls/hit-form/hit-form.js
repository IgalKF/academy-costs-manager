/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
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
const HitForm = ({ formControls, valueState, closeButtonOptions, submitButtonOptions }) => {

    // Validate that formControls is an array
    if (!Array.isArray(formControls)) {
        throw new InvalidPropertyException('HitForm', 'formControls', 'Should be an array.');
    }

    // Initialize default labels for the form.
    // Define default labels for buttons
    const closeButtonLabel = closeButtonOptions?.label ?? 'Close';
    const submitButtonLabel = submitButtonOptions?.label ?? 'Submit';

    const submitbuttonElement = submitButtonOptions?.submitEventCallback
        ? <HitButton
            clickEvent={submitButtonOptions?.submitEventCallback}
            type='contained'
            title={submitButtonLabel}/>
        : null;

    const closeButtonElement = closeButtonOptions?.closeEventCallback
        ? <HitButton
            clickEvent={closeButtonOptions?.closeEventCallback}
            type='outlined' 
            title={closeButtonLabel}/>
        : null;

    // Create an array of control elements based on formControls
    const controlElements = formControls.map(control => {
        if (!control?.type) {
            // Type is required for every control element.
            throw new RequiredPropertyException('HitForm -> formControls', 'type');
        }

        if (!control?.key) {
            // A key is required for every control element.
            throw new RequiredPropertyException('HitForm -> formControls', 'key');
        }

        if (typeof (control.type) != 'string') {
            // If type isn't a string type.
            throw new InvalidTypeException('type', typeof (control.type), 'string');
        }

        if (typeof (control.key) != 'string') {
            // If the key isn't a string type.
            throw new InvalidTypeException('key', typeof (control.type), 'string');
        }

        if (!valueState) {
            // Property wasn't defined.
            throw new RequiredPropertyException('HitSelect', 'valueState');
        }

        // Initialize components by requested or default properties.
        // Render UI components based on the control type
        switch (control.type) {
            case 'text':
                return (
                    <HitTextInput
                        valueState={valueState}
                        controlKey={control.key}
                        key={control.key}
                        label={control.label}
                        initialValue={control.value} />);
            case 'select':
                return (
                    <HitSelect
                        valueState={valueState}
                        controlKey={control.key}
                        key={control.key}
                        options={control.value ?? []}
                        label={control.label}
                        initialValue={control.value} />);
            case 'date':
                return (
                    <HitDatepicker
                        valueState={valueState}
                        controlKey={control.key}
                        key={control.key}
                        label={control.label}
                        initialValue={control.value} />);
            default:
                throw new InvalidPropertyException(
                    'HitForm -> formControls',
                    'type',
                    `Invalid type was supported: ${control.type}.`)
        }
    });

    // Render the HitForm component
    return <div className='hit-form'>
        <div className='form-content'>
            {controlElements}
        </div>
        <div className='form-actions'>
            {closeButtonElement}
            {submitbuttonElement}
        </div>
    </div>
};

// Export the HitForm component
export { HitForm };
