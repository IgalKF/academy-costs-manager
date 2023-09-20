/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slotzki  318875846
*/
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HitButtonGroup from "../hit-button-group/hit-button-group";

/**
 * HIT Table Toolbar control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * The header component of the table with title and options buttons
 * @param {Object} properties - Cpmponent's properties:
 * @returns HIT Table Toolbar control component.
 */
const HitTableToolbar = (props) => {
  const { } = props;

  return (
    <Toolbar>
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      
      <HitButtonGroup/>
    </Toolbar>
  );
};



export default HitTableToolbar ;
