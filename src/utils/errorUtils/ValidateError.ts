import BaseError from "./BaseError";

class ValidateError extends BaseError {
  constructor (
    statusCode = 403, 
    message = 'Forbidden'
  ) {
    super(statusCode, message);
  }
}
export default ValidateError;