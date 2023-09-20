/*
<<<<<<< HEAD
👥 Team Members:
👤 Igal Khalfin    313190811
👤 Itay Halaf      205585193
👤 Tamara Slotzki  318875846
=======
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
>>>>>>> 459bf6253ebd4d8d42c6aa50d634d643251e112f
*/

// Import necessary modules and components
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
  const [updateRecords, setUpdateRecords] = useState(true);

  const addToDB=(request)=>{
    idb.openCostsDB("costs", 1).then((db) => {
      if (!(db instanceof CostTransactionsService)) {
        // Throw an exception if the database type is invalid
        throw new InvalidTypeException(
          "db",
          typeof db,
          "CostTransactionsService"
        );
      }

      // Add a cost transaction record to the database
      db.addCost({
        category: request?.category,
        description: request?.description,
        sum: request?.sum,
      });
    });
  }

  useEffect(() => {
    if (updateRecords) {
      // Open the indexedDB database
      idb.openCostsDB("costs", 1).then((db) => {
        if (!(db instanceof CostTransactionsService)) {
          // Throw an exception if the database type is invalid
          throw new InvalidTypeException(
            "db",
            typeof db,
            "CostTransactionsService"
          );
        }

        // Retrieve all cost transactions from the database
        db.getAllCosts().then((costTransactions) => {
          setCostTransactionRecords(costTransactions);
        });
      });
      setUpdateRecords(false);
    }
  }, [updateRecords]);

  useEffect(() => {
    // Log the cost transaction records to the console
    console.log(costTransactionRecords);
  }, [costTransactionRecords]);

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <HitTable addToDBFunc={addToDB} onUpdateRecords={()=>setUpdateRecords(true)} costTransactionRecords={costTransactionRecords} />
          <HitFilter filtersState={[filterValues, setFilterValues]}></HitFilter>
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
};

export default App;
