/**
 * Abstract Error
 */
export class AbstractError extends Error {
    /**
     * Throwable error when attempting to instantiate an abstract class.
     */
    constructor() {
        super('Abstract classes can\'t be instantiated.')
    }
}