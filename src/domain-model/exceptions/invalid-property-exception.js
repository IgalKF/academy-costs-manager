import { INVALID_PROPERTY_EXCEPTION } from "./constants/exception-constants";

/**
 * When using an element property not as desgined.
 * * componentName - The name of the component the exception occured in.
 * * propertyName - The name of the property the exception occured by.
 * * message - The reason the exception occured by.
 */
class InvalidPropertyException extends Error {
  constructor(componentName, propertyName, message) {
    super();

    this.message = `${componentName} - "${propertyName}" property hasn't been used as expected: ${message}`;
    this.name = INVALID_PROPERTY_EXCEPTION;
  }
}

export { InvalidPropertyException };
