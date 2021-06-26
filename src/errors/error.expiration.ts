export class ExpirationError extends Error {
    constructor( message?: string ) {
        super( message || 'Resource or request has expired' )
    }
}
