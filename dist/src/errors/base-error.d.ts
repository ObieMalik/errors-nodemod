import { ErrorId } from './error-id';
export declare class BaseError extends Error {
    private _errorId?;
    constructor(error?: string | ErrorId);
    get errorId(): ErrorId;
}
