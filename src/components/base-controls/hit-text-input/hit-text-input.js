import { FormControl, Input, InputLabel, TextField } from "@mui/material";
import React from "react";

/**
 * HIT text input control - Encapsulates MUI's complexity, providing dedicated flexibility and custom reusability.
 * @param {Object} properties - Component's properties:
 * @member {string} label - Input's label.
 * @returns HIT text input control component.
 */
const HitTextInput = ({ label,valueState,controlKey }) => {
    const [value, setValue] = valueState;

    const handleChange = (event) => {
        setValue({ ...value, [controlKey]:event?.target?.value });
      };
    return (
        <FormControl className="hit-select" fullWidth>
            {/* Render a Material-UI text field with an outlined variant and the specified label */}
            <TextField onBlur={handleChange} variant="outlined" label={label} className="select-input" />
        </FormControl>
    );
};

// Export the HitTextInput component
export { HitTextInput };
