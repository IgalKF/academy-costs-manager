import React, { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import HitTableHeader from "../../extended-controls/hit-table-header/hit-table-header";
import HitTableToolbar from "../../extended-controls/hit-table-toolbar/hit-table-toolbar";
import HitTableBody from "../../extended-controls/hit-table-body/hit-table-body";

const createData = (date, category, description, sum) => {
  return {
    date,
    category,
    description,
    sum,
  };
};

const rows = [
  createData(305,"Cupcake",  '3.7', 67),
  createData(452,"Donut",  '25.0', 51),
  createData(262,"Eclair",  '16.0', 24),
  createData(159,"Frozen yoghurt",  '6.0', 24),
  createData(356, "Gingerbread", '16.0', 49),
  createData(408, "Honeycomb", '3.2', 87),
  createData(237,"Ice cream sandwich",  '9.0', 37),
  createData(375,"Jelly Bean",  '0.0', 94),
  createData(518,"KitKat",  '26.0', 65),
  createData(392,"Lollipop",  '0.2', 98),
  createData(318,"Marshmallow",  '0', 81),
  createData(360,"Nougat",  '19.0', 9),
  createData(437,"Oreo",  '18.0', 63),
];

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
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

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

const HitTable = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("date");
  const [selected, setSelected] = useState([]);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <HitTableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            size={"medium"}
          >
            <HitTableHeader
              headCells={headCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
export { HitTable };
