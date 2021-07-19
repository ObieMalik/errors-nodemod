import { ErrorId } from './error-id'

/**
 * Base Error class. All custom error classes must extend from this class.
 */
export class BaseError extends Error {
    private _errorId?: ErrorId

    /**
     * Error Constructor
     * @param {string | ErrorId} error Error Message to log with the 
     * stack trace
     */
    constructor(error?: string | ErrorId) {
        const message: string = (error instanceof ErrorId) ?
            error.message : error

        super(message)

        if (error instanceof ErrorId)
            this._errorId = error
    }

    /**
     * Getter ErrorId
     */
    public get errorId(): ErrorId {
        return this._errorId
    }
}