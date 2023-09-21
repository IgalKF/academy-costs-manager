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
import { theme } from "./themes/default-theme";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { HitTable } from "./components/page-components/hit-table/hit-table";
import { CostTransactionsService, idb } from "./services/indexed-db/idb";
import { useEffect, useState } from "react";
import { InvalidTypeException } from "./domain-model/exceptions/invalid-type-exception";
import { HitHeader } from "./components/page-components/hit-header/hit-header";

/**
 * Main application component.
 * @returns Application component element.
 */
const App = () => {
  const [costTransactionRecords, setCostTransactionRecords] = useState([]);
  const [filterValues, setFilterValues] = useState({});
  const [filteredRecords, setFilteredRecordes] = useState([]);
  const [updateRecords, setUpdateRecords] = useState(true);

  const addToDB = (request) => {
    const isValidSum = /^\d+(\.\d{0,1})?$/.test(request?.sum);

    if (!isValidSum) {
      // Handle the case where the 'sum' is not a valid number with at most one decimal point
      // You can show an error message or perform any other action here
      console.error("Invalid 'sum'. Please enter a valid number with at most one decimal point.");
      return;
    }

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
          setFilteredRecordes(costTransactions);
        });
      });
      setUpdateRecords(false);
    }
  }, [updateRecords]);

  useEffect(() => {
    if (costTransactionRecords) {
      setFilteredRecordes(records => {
        records = [...costTransactionRecords];

        if (filterValues.fromDate) {
          records = records.filter(record => new Date(record.date) >= filterValues.fromDate);
        }

        if (filterValues.toDate) {
          records = records.filter(record => new Date(record.date) <= filterValues.toDate);
        }

        if (filterValues.category) {
          records = records.filter(record => record.category === filterValues.category);
        }

        return records;
      });
    }
  }, [filterValues, costTransactionRecords]);

  return (
    <div className="App">
      <HitHeader />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <HitTable
            filterState={[filterValues, setFilterValues]}
            addToDBFunc={addToDB}
            onUpdateRecords={() => setUpdateRecords(true)}
            costTransactionRecords={filteredRecords}
          />
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
};

export default App;
