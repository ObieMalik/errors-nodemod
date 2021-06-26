export class AuthorizationError extends Error {
    constructor( message?: string ) {
        super( message || 'Authorization not available to access resource.' )
    }
}
