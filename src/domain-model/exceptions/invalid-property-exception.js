/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

// Import the constant for the exception name
import { INVALID_PROPERTY_EXCEPTION } from "./constants/exception-constants";

/**
 * Custom exception class for handling cases when an element property is not used as intended.
 * @param {string} componentName - The name of the component where the exception occurred.
 * @param {string} propertyName - The name of the property that caused the exception.
 * @param {string} message - The reason for the exception.
 */
class InvalidPropertyException extends Error {
  constructor(componentName, propertyName, message) {
    super();

    // Set the exception message with detailed information
    this.message = `${componentName} - "${propertyName}" property hasn't been used as expected: ${message}`;
    
    // Set the name of the exception using the constant
    this.name = INVALID_PROPERTY_EXCEPTION;
  }
}

// Export the InvalidPropertyException class
export { InvalidPropertyException };
