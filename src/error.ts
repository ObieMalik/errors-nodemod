export class ValidationError extends Error { }

export class AuthorizationError extends Error { }

export class ConflictError extends Error { }

export class ExpirationError extends Error { }

export class NullError extends Error { }

export class DuplicateError extends Error { }

export class NotImplementedError extends Error {
    constructor( message?: string ) {
        super( message || 'Method Not Implemented' )
    }
}