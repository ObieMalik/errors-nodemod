export class DuplicateError extends Error {
    constructor( message?: string ) {
        super( message || 'Resource duplicate error' )
    }
}
