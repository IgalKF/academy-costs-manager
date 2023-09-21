import { FormControl, TextField } from "@mui/material";
import React from "react";

/**
 * HIT text input control - Encapsulates MUI's complexity, providing dedicated flexibility and custom reusability.
 * @param {Object} properties - Component's properties:
 * @member {string} type - Input's field type.
 * @member {string} label - Input's label.
 * @returns HIT text input control component.
 */
const HitTextInput = ({ type, label, valueState, controlKey }) => {
    const [value, setValue] = valueState;

    // Initialize field type with text as default value.
    const fieldType = type ?? 'text';

    const handleChange = (event) => {
        setValue({ ...value, [controlKey]: event?.target?.value });
    };
    return (
        <FormControl className="hit-control hit-select">
            <TextField type={fieldType} onBlur={handleChange} variant="outlined" label={label} className="select-input" />
        </FormControl>
    );
};

// Export the HitTextInput component
export { HitTextInput };
