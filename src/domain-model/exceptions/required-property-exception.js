/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slotzki  318875846
*/
import { REQUIRED_PROPERTY_EXCEPTION } from "./constants/exception-constants";

/**
 * When required property is not defined.
 * * componentName - The name of the component the exception occured in.
 * * propertyName - The name of the property the exception occured by.
 */
class RequiredPropertyException extends Error {
  constructor(componentPath, propertyName) {
    super();

    // Define error information.
    this.message = `${componentPath} - "${propertyName}" is a required property.`;
    this.name = REQUIRED_PROPERTY_EXCEPTION;
  }
}

export { RequiredPropertyException };
