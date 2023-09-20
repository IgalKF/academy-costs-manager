/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

// Import necessary dependencies from Material-UI
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HitButtonGroup from "../hit-button-group/hit-button-group";

/**
 * HIT Table Toolbar control - Encapsulates Material-UI's toolbar for custom reusability.
 * The header component of the table with title and options buttons.
 * @param {Object} properties - Component's properties (currently no properties).
 * ** onUpdateRecords -callback to execute on refresh button click.
 * @returns HIT Table Toolbar control component.
 */
const HitTableToolbar = (props) => {
  const {onUpdateRecords } = props;

  return (
    <Toolbar>
      {/* Render a title and the HitButtonGroup component within the toolbar */}
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Nutrition
      </Typography>
      <HitButtonGroup onUpdateRecords={onUpdateRecords}/>
    </Toolbar>
  );
};

// Export the HitTableToolbar component
export default HitTableToolbar;
