import React from "react";
import './hit-label.css'
import { FormControl, InputLabel } from "@mui/material";

/**
 * HIT label control - Encapsulates MUI's complexity, providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * * bold - Should be bold or not (boolean).
 * * fontType - Font size type (title, subtitle, content).
 * * controlLabel - Define label text that wraps a control.
 * * labelId - Needed if control label to determine label element.
 * @returns Cusom icon element.
 */
const HitLabel = ({ children, bold, fontType, controlLabel, labelId }) => {
	const labelProperties = ['hit-label'];

	// Add consistent bold property.
	if (bold) {
		labelProperties.push('bold');
	}

	// Add consistent size type.
	if (fontType) {
		labelProperties.push(fontType);
	}

	// Define as a readable class string.
	const labelClass = labelProperties.join(' ');

	let labelElement = (
		<div className={labelClass}>
			{children}
		</div>);

	// If the lable is a control label.
	if (controlLabel) {
		// Add MUI needed properties.
		labelElement = (
			<FormControl className="control-label" size="small">
				<InputLabel id={labelId}>{controlLabel}</InputLabel>
				{labelElement}
			</FormControl>);
	}

	return labelElement;
};

export { HitLabel };
