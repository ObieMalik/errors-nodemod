import { AbstractError } from './abstract-error';
import { ErrorId } from './error-id';

/**
 * Base Error class. All custom error classes must extend from this class.
 */
export class BaseError extends Error {
  private _errorId?: ErrorId;

  /**
   * Error Constructor
   * @param {string | ErrorId} error Error Message to log with the
   * stack trace
   */
  constructor(error?: string | ErrorId) {
    super(error instanceof ErrorId ? error.message : error);

    if (this.constructor === BaseError) {
      throw new AbstractError();
    }

    if (error instanceof ErrorId) {
      this._errorId = error;
    }
  }

  /**
   * Getter ErrorId
   */
  public get errorId(): ErrorId {
    return this._errorId;
  }
}