import "./App.css";
import { HitDatepicker } from "./components/base-controls/hit-datepicker/hit-datepicker";
import { theme } from "./themes/default-theme";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { HitTable } from "./components/page-components/hit-table/hit-table";
import { HitTextInput } from "./components/base-controls/hit-text-input/hit-text-input";
import { CostTransactionsService, idb } from "./services/indexed-db/idb";
import { useEffect, useState } from "react";
import { InvalidTypeException } from "./domain-model/exceptions/invalid-type-exception";
import { HitFilter } from "./components/extended-controls/hit-filter/hit-filter";

/**
 * Main application component.
 * @returns Application component element.
 */
const App = () => {
  const [costTransactionRecords, setCostTransactionRecords] = useState([]);
  const [filterValues, setFilterValues] = useState({});

  useEffect(() => {
    idb.openCostsDB("costs", 1).then((db) => {
      if (!(db instanceof CostTransactionsService)) {
        throw new InvalidTypeException(
          "db",
          typeof db,
          "CostTransactionsService"
        );
      }

      db.addCost({
        category: "FOOD",
        description: "Salad",
        sum: 10,
      });

      db.getAllCosts().then((costTransactions) => {
        setCostTransactionRecords(costTransactions);
      });
    });
  }, []);

  useEffect(() => {
    console.log(costTransactionRecords);
  }, [costTransactionRecords]);

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <HitTable />
          <HitDatepicker>dfgdfgdfg</HitDatepicker>
          {/* <HitLabel fontType='title' bold={false}>dfsdsfds</HitLabel> */}
          <HitTextInput options={["dsfsdf"]} label="Choose Category" />
          <HitFilter filtersState={[filterValues, setFilterValues]}></HitFilter>
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
};

export default App;
