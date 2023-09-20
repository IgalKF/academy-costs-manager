import React from "react";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HitButtonGroup from "../hit-button-group/hit-button-group";

//The header component of the table with title and options buttons
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
