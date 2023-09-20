/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

// Import the constant for the exception name
import { REQUIRED_PROPERTY_EXCEPTION } from "./constants/exception-constants";

/**
 * Custom exception class for handling cases when a required property is not defined.
 * @param {string} componentPath - The path to the component where the exception occurred.
 * @param {string} propertyName - The name of the property that is required but not defined.
 */
class RequiredPropertyException extends Error {
  constructor(componentPath, propertyName) {
    super();

    // Set the exception message with detailed information
    this.message = `${componentPath} - "${propertyName}" is a required property.`;
    
    // Set the name of the exception using the constant
    this.name = REQUIRED_PROPERTY_EXCEPTION;
  }
}

// Export the RequiredPropertyException class
export { RequiredPropertyException };
