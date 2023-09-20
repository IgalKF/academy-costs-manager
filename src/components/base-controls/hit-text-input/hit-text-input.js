/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slotzki  318875846
*/

// Import necessary Material-UI components
import { FormControl, Input, InputLabel, TextField } from "@mui/material";
import React from "react";

/**
 * HIT text input control - Encapsulates MUI's complexity, providing dedicated flexibility and custom reusability.
 * @param {Object} properties - Component's properties:
 * @member {string} label - Input's label.
 * @returns HIT text input control component.
 */
const HitTextInput = ({ label }) => {
    return (
        <FormControl className="hit-select" fullWidth>
            {/* Render a Material-UI text field with an outlined variant and the specified label */}
            <TextField variant="outlined" label={label} className="select-input" />
        </FormControl>
    );
};

// Export the HitTextInput component
export { HitTextInput };
