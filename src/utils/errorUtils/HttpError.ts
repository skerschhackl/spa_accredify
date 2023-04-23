import BaseError from "./BaseError";

class HttpError extends BaseError {
  constructor (statusCode: number, message: string) {
    super(statusCode, message);
  }
}
export default HttpError;
