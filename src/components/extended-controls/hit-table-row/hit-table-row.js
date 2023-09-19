import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
const HitTableRow = (props) => {
    const {rowData,labelId,isItemSelected}=props;
    return <TableRow
    key={rowData.name}
    selected={isItemSelected}
  >
    <TableCell
      component="th"
      id={labelId}
      scope="row"
      padding="none"
    >
      {rowData.name}
    </TableCell>
    <TableCell align="right">{rowData.calories}</TableCell>
    <TableCell align="right">{rowData.fat}</TableCell>
    <TableCell align="right">{rowData.carbs}</TableCell>
    <TableCell align="right">{rowData.protein}</TableCell>
  </TableRow>
};

export default HitTableRow;
