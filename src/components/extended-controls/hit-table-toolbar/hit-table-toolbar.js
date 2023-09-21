/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

// Import necessary dependencies from Material-UI
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import HitButtonGroup from "../hit-button-group/hit-button-group";
import './hit-table-toolbar.css';

/**
 * HIT Table Toolbar control - Encapsulates Material-UI's toolbar for custom reusability.
 * The header component of the table with title and options buttons.
 * @param {Object} properties - Component's properties (currently no properties).
 * ** onUpdateRecords -callback to execute on refresh button click.
 * @returns HIT Table Toolbar control component.
 */
const HitTableToolbar = ({ onUpdateRecords, addToDBFunc, onShowFilter }) => {

  return (
    <Toolbar className='hit-toolbar'>
      <HitButtonGroup onShowFilter={onShowFilter} onAddRecord={addToDBFunc} onUpdateRecords={onUpdateRecords} />
    </Toolbar>
  );
};

// Export the HitTableToolbar component
export default HitTableToolbar;
