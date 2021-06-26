export class NullError extends Error {
    constructor( message?: string ) {
        super( message || 'Null error.' )
    }
}
