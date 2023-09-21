/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/
import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { InvalidPropertyException } from "../../../domain-model/exceptions/invalid-property-exception";
import { RequiredPropertyException } from "../../../domain-model/exceptions/required-property-exception";

/**
 * HIT Table Row control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * * rowData - row properties of each column.
 * * labelId - unique row id.
 * * isItemSelected - checks if the row should be displayed.
 * @returns HIT Table Row control component.
 */
const HitTableRow = ({ rowData, labelId, isItemSelected }) => {

  if (!rowData) {
    // Property wasn't defined.
    throw new RequiredPropertyException('HitTableRow', 'rowData');
  }

  if (typeof rowData != "object") {
    // Property wasn't defined as intended.
    throw new InvalidPropertyException('HitTableRow', 'rowData', 'Should be an object.');
  }

  if (labelId && typeof labelId != 'string') {
    // Property wasn't defined as intended.
    throw new InvalidPropertyException('HitTableRow', 'labelId', 'Should be a string.');
  }

  if (isItemSelected === undefined) {
    // Property wasn't defined.
    throw new RequiredPropertyException('HitTableRow', 'isItemSelected');
  }

  if (typeof isItemSelected != "boolean") {
    // Property wasn't defined as intended.
    throw new InvalidPropertyException('HitTableRow', 'isItemSelected', 'Should be boolean.');
  }


  return <TableRow
    id={labelId}
    key={rowData.name}
    selected={isItemSelected}
  >

    <TableCell >{rowData.date}</TableCell>
    <TableCell >{rowData.category}</TableCell>
    <TableCell >{rowData.description}</TableCell>
    <TableCell >{rowData.sum}</TableCell>
  </TableRow>
};

export default HitTableRow;
