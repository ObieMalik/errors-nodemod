"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullError = void 0;
class NullError extends Error {
    constructor(message) {
        super(message || 'Null error.');
    }
}
exports.NullError = NullError;
//# sourceMappingURL=error.null.js.map