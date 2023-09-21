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
import { FormGroup } from "@mui/material";

// Define the HitForm component
const HitForm = ({ formControls, valueState, closeButtonOptions, submitButtonOptions, formColumns }) => {

    // Validate that formControls is an array
    if (!Array.isArray(formControls)) {
        throw new InvalidPropertyException('HitForm', 'formControls', 'Should be an array.');
    }

    // Define default labels for buttons.
    const closeButtonLabel = closeButtonOptions?.label ?? 'Close';
    const submitButtonLabel = submitButtonOptions?.label ?? 'Submit';

    const submitbuttonElement = submitButtonOptions?.submitEventCallback
        ? <HitButton
            clickEvent={submitButtonOptions?.submitEventCallback}
            type='contained'
            title={submitButtonLabel} />
        : undefined;

    const closeButtonElement = closeButtonOptions?.closeEventCallback
        ? <HitButton
            clickEvent={closeButtonOptions?.closeEventCallback}
            type='outlined'
            title={closeButtonLabel} />
        : undefined;

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
                        initialValue={control.value}
                    />);
            case 'number':
                return (
                    <HitTextInput
                        type={control.type}
                        valueState={valueState}
                        controlKey={control.key}
                        key={control.key}
                        label={control.label}
                        initialValue={control.value}
                    />);
            case 'select':
                return (
                    <HitSelect
                        valueState={valueState}
                        controlKey={control.key}
                        key={control.key}
                        label={control.label}
                        initialValue={control.value}
                        options={control.options}
                    />);
            case 'date':
                return (
                    <HitDatepicker
                        valueState={valueState}
                        controlKey={control.key}
                        key={control.key}
                        label={control.label}
                        initialValue={control.value}
                    />);
            default:
                throw new InvalidPropertyException(
                    'HitForm -> formControls',
                    'type',
                    `Invalid type was supported: ${control.type}.`);
        }
    });


    // Devide form to columns.
    const columnElements = [];

    for (let i = 0; i < formColumns; i++) {
        const columnControls = controlElements
            .filter((control, index) => index % formColumns === i);

        columnElements.push(<div className='form-column'>{columnControls}</div>);
    }

    const formContentElements = formColumns > 0 ? columnElements : controlElements;

    // Render the HitForm component
    return (
        <FormGroup className='hit-form'>
            <div className='form-content'>
                {formContentElements}
            </div>
            <div className='form-actions'>
                {closeButtonElement}
                {submitbuttonElement}
            </div>
        </FormGroup>);
};

// Export the HitForm component
export { HitForm };
