/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slotzki  318875846
*/
import { FormControl, Input, InputLabel, TextField } from "@mui/material";
import React from "react";

/**
 * HIT button control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * @member {string} label - Input's label.
 * @returns HIT button control component.
 */
const HitTextInput = ({ label }) => {
    return (
        <FormControl className="hit-select" fullWidth>
            <TextField variant="outlined" label={label} className="select-input" />
        </FormControl>
    );
};

export { HitTextInput };
