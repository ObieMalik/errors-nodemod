"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = void 0;
class ConflictError extends Error {
    constructor(message) {
        super(message || 'Conflict Error');
    }
}
exports.ConflictError = ConflictError;
//# sourceMappingURL=error.conflict.js.map