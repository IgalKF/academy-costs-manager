/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slotzki  318875846
*/
import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
const HitTableRow = (props) => {
    const {rowData,labelId,isItemSelected}=props;
    return <TableRow
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
