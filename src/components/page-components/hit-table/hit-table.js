/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

// Import necessary dependencies from Material-UI and React
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import HitTableHeader from "../../extended-controls/hit-table-header/hit-table-header";
import HitTableToolbar from "../../extended-controls/hit-table-toolbar/hit-table-toolbar";
import HitTableBody from "../../extended-controls/hit-table-body/hit-table-body";
import { HitFilter } from "../../extended-controls/hit-filter/hit-filter";

/**
 * HIT Table control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
** costTransactionRecords - All rows to show.
** onUpdateRecords - callback to invoke for update records from idb.
 * @returns HIT Table control component.
 */
const HitTable = ({ costTransactionRecords, onUpdateRecords, addToDBFunc, filterState }) => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("date");
  const [selected, setSelected] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterDisplay = () => {
    setShowFilter(!showFilter);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Calculate the number of empty rows for pagination
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - costTransactionRecords?.length) : 0;

  // Calculate the visible rows based on sorting and pagination
  const visibleRows = React.useMemo(
    () =>
      stableSort(costTransactionRecords, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, costTransactionRecords]
  );

  useEffect(() => {
    setPage(0);
  }, [filterState]);

  return (
    <Box>
      <Paper>
        <HitTableToolbar
          addToDBFunc={addToDBFunc}
          onUpdateRecords={onUpdateRecords}
          onShowFilter={handleFilterDisplay}
        />
        <TableContainer>
          <HitFilter showFilter={showFilter} filterState={filterState} />
        </TableContainer>
        <TableContainer>
          <Table
            size={"medium"}
          >
            <HitTableHeader
              headCells={headCells}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <HitTableBody
              isSelected={isSelected}
              visibleRows={visibleRows}
              emptyRows={emptyRows}
            />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={costTransactionRecords?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  if (array) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });

    return stabilizedThis.map((el) => el[0]);
  }
};

// Table header cells definition
const headCells = [
  {
    id: "date",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "category",
    numeric: false,
    disablePadding: false,
    label: "Category",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
  {
    id: "sum",
    numeric: true,
    disablePadding: false,
    label: "Sum",
  }
];

// Export the HitTable component
export { HitTable };
