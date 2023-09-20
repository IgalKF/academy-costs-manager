import React from "react";
import { InvalidPropertyException } from "../../../domain-model/exceptions/invalid-property-exception";
import { InvalidTypeException } from "../../../domain-model/exceptions/invalid-type-exception";
import { RequiredPropertyException } from "../../../domain-model/exceptions/required-property-exception";
import { HitTextInput } from "../../base-controls/hit-text-input/hit-text-input";
import { HitSelect } from "../../base-controls/hit-select/hit-select";
import { HitDatepicker } from "../../base-controls/hit-datepicker/hit-datepicker";
import { HitButton } from "../../base-controls/hit-button/hit-button";
import './hit-form.css'

const HitForm = ({ formControls, closeButtonOptions, submitButtonOptions }) => {

    if (!Array.isArray(formControls)) {
        throw new InvalidPropertyException('HitForm', 'formControls', 'Should be an array.');
    }

    const closeButtonLabel = closeButtonOptions.label ?? 'Submit';
    const submitButtonLabel = submitButtonOptions.label ?? 'Submit';

    const controlElements = formControls.map(control => {
        // Type is required for every control element.
        if (!control.type) {
            throw new RequiredPropertyException('HitForm -> formControls', 'type');
        }

        // If type isn't a string type.
        if (typeof (control.type) != 'string') {
            throw new InvalidTypeException('type', typeof (control.type), 'string');
        }

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

export { HitForm };
