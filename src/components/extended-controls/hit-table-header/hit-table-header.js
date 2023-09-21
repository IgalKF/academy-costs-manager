/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

// Import necessary dependencies from Material-UI
import React from "react";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';
import TableSortLabel from '@mui/material/TableSortLabel';

/**
 * HIT Table Header control - Encapsulates Material-UI's table header for custom reusability.
 * @param {Object} props - Component's properties:
 * @member {Array} headCells - An array of objects defining the table header cells.
 * @member {string} order - The current sorting order ('asc' or 'desc').
 * @member {string} orderBy - The currently sorted column ID.
 * @member {function} onRequestSort - The callback function for sorting columns.
 * @returns HIT Table Header control component.
 */
const HitTableHeader = (props) => {
    const { headCells, order, orderBy, onRequestSort } = props;

    // Function to create a sort handler for a specific property
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
};

// Export the HitTableHeader component
export default HitTableHeader;
