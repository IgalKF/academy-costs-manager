import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HitTableRow from "../../extended-controls/hit-table-row/hit-table-row";

const HitTableBody = (props) => {
  const { visibleRows, emptyRows,isSelected } = props;
  return (
    <TableBody>
      {visibleRows.map((row, index) => {
        const isItemSelected = isSelected(row.name);
        const labelId = `enhanced-table-${index}`;

        return (
          <HitTableRow
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
