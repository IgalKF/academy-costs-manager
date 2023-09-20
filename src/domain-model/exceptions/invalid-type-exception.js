/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slotzki  318875846
*/

// Import the constant for the exception name
import { INVALID_TYPE_EXCEPTION } from "./constants/exception-constants";

/**
 * Custom exception class for handling cases when a variable's type is invalid.
 * @param {string} variableName - The name of the variable where the exception occurred.
 * @param {string} originalType - The name of the original type of the variable that caused the exception.
 * @param {string} expectedType - The name of the expected type for the variable.
 */
class InvalidTypeException extends Error {
  constructor(variableName, originalType, expectedType) {
    super();

    // Set the exception message with detailed information
    this.message = `${variableName} - expected type of the variable is "${expectedType}" and not "${originalType}".`;
    
    // Set the name of the exception using the constant
    this.name = INVALID_TYPE_EXCEPTION;
  }
}

// Export the InvalidTypeException class
export { InvalidTypeException };
