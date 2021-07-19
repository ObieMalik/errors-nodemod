import { ErrorId } from './errorid';
export declare class BaseError extends Error {
    private _errorId?;
    constructor(error?: string | ErrorId);
    get errorId(): ErrorId;
}
