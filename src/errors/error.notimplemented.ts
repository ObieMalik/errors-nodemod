export class NotImplementedError extends Error {
    constructor( message?: string ) {
        super( message || 'Method not implemented' )
    }
}
