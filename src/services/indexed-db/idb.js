/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

/**
 * Indexed database service containing declaration for Indexed DB operations.
 */
class IndexedDatabaseService {
  return;
}

/**
 * An instance representing the namespace of the library (equivilent to `window.idb`).
 */
const idb = new IndexedDatabaseService();

/**
 * A database service encupsulating the cost transactions object store's operations.
 */
class CostTransactionsService {

  /** Constructor function for instance initializtion.
   * @param {IDBDatabase} dbConfiguration - An open database instance. */
  constructor(dbConfiguration) {
    this.dbConfiguration = dbConfiguration;
  }

  /**
   * Insert a new cost transaction to the database. 
   * @param {CostTransactionRequest} costTransaction 
   * @returns {boolean} Whether the transaction has been added successfully or not.
   */
  addCost = async (costTransaction) => {

    // Cost addition asynchronous promise instaciation.
    const costAdditionResult = new Promise((resolve, reject) => {
      const validateKey = this.dbConfiguration
        .transaction(['costTransactions'], 'readwrite')
        .objectStore('costTransactions')
        .add({
          category: costTransaction.category,
          description: costTransaction.description,
          sum: costTransaction.sum,
          date: new Date().toLocaleDateString()
        });

      // Resolve promise call with insertion success..
      validateKey.onsuccess = (event) => {
        console.debug('Database connection succeded.')
        resolve(true);
      };

      // Error handling assignment.
      validateKey.onerror = (event) => {
        reject(new Error('Invalid key definition.'))
      };
    });

    return await costAdditionResult;
  }

  /**
 * Get all cost transactions from the database. 
 * @param {CostTransactionRequest} costTransaction 
 * @returns {CostTransactionResponse} All records of cost transactions.
 */
  getAllCosts = async (costTransaction) => {

    // Cost addition asynchronous promise instaciation.
    const costAdditionResult = new Promise((resolve, reject) => {
      const validateKey = this.dbConfiguration
        .transaction(['costTransactions'], 'readwrite')
        .objectStore('costTransactions')
        .getAll();

      // Resolve promise call with insertion success..
      validateKey.onsuccess = (event) => {
        console.debug('Database connection succeded.')
        resolve(event.currentTarget.result);
      };

      // Error handling assignment.
      validateKey.onerror = (event) => {
        reject(new Error('Invalid key definition.'))
      };
    });

    return await costAdditionResult;
  }
}


/**
 * Open connection with cost application's database.
 * @param {string} databaseName - Requested database name to start a connection with.
 * @param {number} databaseVersion - 
 * @returns {databaseOpeningPromise} databaseOpeningPromise - an async database opening operation resolves an open database instance.
 */
IndexedDatabaseService.prototype.openCostsDB = async (databaseName, databaseVersion) => {
  const databaseOpeningPromise = new Promise((resolve, reject) => {
    // Open database connection.
    const request = indexedDB.open(databaseName, databaseVersion);

    // Resolve a database connection on success.
    request.onsuccess = (event) => {
      resolve(new CostTransactionsService(event.target.result));
    };

    // Error handling assignment.
    request.onerror = (event) => {
      console.error('can\'t connect...');
      reject(new Error('can\'t connect...'));
    };

    // Detrmine what happens when a version is being upgraded.
    request.onupgradeneeded = (event) => {
      // Save the IDBDatabase interface
      const db = event.target.result;

      // Create an objectStore for this database
      const objectStore = db.createObjectStore("costTransactions", { autoIncrement: true });

      // Create all of the indexes needed for the cost transaction object store.
      objectStore.createIndex("sum", "sum", { unique: false });
      objectStore.createIndex("category", "category", { unique: false });
      objectStore.createIndex("description", "description", { unique: false });
      objectStore.createIndex("date", "date", { unique: false });
    };
  });

  return await databaseOpeningPromise;
}

/**
 * Cost transaction request.
 */
class CostTransactionRequest {
  /**
   * The total cost of the given transaction.
   * @type {number}
   * @public
   */
  sum;

  /**
   * The category of the given transaction.
   * @type {string}
   * @public
   */
  category;

  /**
   * The description of the given transaction.
   * @type {string}
   * @public
   */
  description;
}

/**
 * Cost transaction response.
*/
class CostTransactionResponse {
  /**
   * unique identifier of the cost transaction.
   * @type {number}
   * @public
   */
  id;

  /**
   * The total cost of the given transaction.
   * @type {number}
   * @public
   */
  sum;

  /**
   * The category of the given transaction.
   * @type {string}
   * @public
   */
  category;

  /**
   * The description of the given transaction.
   * @type {string}
   * @public
   */
  description;

  /**
   * The date which the cost transaction was added.
   * @type {Date}
   * @public
   */
  date;
}

export { CostTransactionRequest, CostTransactionResponse, CostTransactionsService, idb };