/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/
import { INVALID_TYPE_EXCEPTION } from "./constants/exception-constants";

/**
 * When a variable's type is invalid.
 * * variableName - The name of the variable the exception occured in.
 * * originalType - The name of the original type the exception occured by.
 * * expectedType - The name of the expected type the exception occured by.
 */
class InvalidTypeException extends Error {
  constructor(variableName, originalType, expectedType) {
    super();

    // Define error information.
    this.message = `${variableName} - expected type of the variable is "${expectedType}" and not "${originalType}".`;
    this.name = INVALID_TYPE_EXCEPTION;
  }
}

export { InvalidTypeException };
