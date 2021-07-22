"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractError = void 0;
class AbstractError extends Error {
    constructor() {
        super('Abstract classes can\'t be instantiated.');
    }
}
exports.AbstractError = AbstractError;
//# sourceMappingURL=abstract-error.js.map