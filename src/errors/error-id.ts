/**
 * ErrorId is a class to identify error using a number id, a 
 * named identifier and message.
 */
export class ErrorId {
    /**
     * 
     * @param {number} id Id of the error. e.g. 1000
     * @param {string} name Name of the error. Try to use consistent
     *  naming scheme. e.g. user_not_found
     * @param {string} desc Message should include specific details about 
     * this type of error. e.g.: User with provided id could not be 
     * found. Try adding a user or use a different id.
     */
    constructor(
        public id: number,
        public name: string,
        public desc?: string
    ) {

    }

    /**
     * Get error message
     */
    public get message(): string {
        const hasDesc = !this.desc ||
            this.desc.length === 0 ||
            this.desc.trim() === ''

        return `${this.id} | ${this.name}${!hasDesc ? ' | ' + this.desc : ''}`
    }
}