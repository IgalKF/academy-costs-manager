/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HitTableRow from "../../extended-controls/hit-table-row/hit-table-row";
import { InvalidPropertyException } from "../../../domain-model/exceptions/invalid-property-exception";
import { RequiredPropertyException } from "../../../domain-model/exceptions/required-property-exception";

/**
 * HIT Table Body control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * * visibleRows - Rows to display.
 * * emptyRows - Avoid a layout jump when reaching the last page with empty rows..
 * * isSelected - A list of selected rows.
 * @returns HIT Table Body control component.
 */
const HitTableBody = ({ visibleRows, emptyRows, isSelected }) => {
  if (!visibleRows) {
    // Property wasn't defined.
    throw new RequiredPropertyException('HitTableBody ', 'visibleRows');
  }

  if (typeof visibleRows != "object") {
    // Property wasn't defined as intended.
    throw new InvalidPropertyException('HitTableBody', 'visibleRows', 'Should be an object.');
  }
  if (emptyRows === undefined) {
    // Property wasn't defined.
    throw new RequiredPropertyException('HitTableBody ', 'emptyRows');
  }

  if (typeof emptyRows != "number") {
    // Property wasn't defined as intended.
    throw new InvalidPropertyException('HitTableBody', 'emptyRows', 'Should be a number.');
  }
  if (!isSelected) {
    // Property wasn't defined.
    throw new RequiredPropertyException('HitTableBody ', 'isSelected');
  }

  if (typeof isSelected != "function") {
    // Property wasn't defined as intended.
    throw new InvalidPropertyException('HitTableBody', 'isSelected', 'Should be a function.');
  }


  return (
    <TableBody>
      {visibleRows.map((row, index) => {
        const labelId = `enhanced-table-${index}`;

        return (
          <HitTableRow
            key={row.id}
            rowData={row}
            labelId={labelId}
            isItemSelected={false}
          />
        );
      })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: 53 * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default HitTableBody;
