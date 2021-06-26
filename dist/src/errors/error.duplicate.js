"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateError = void 0;
class DuplicateError extends Error {
    constructor(message) {
        super(message || 'Resource duplicate error');
    }
}
exports.DuplicateError = DuplicateError;
//# sourceMappingURL=error.duplicate.js.map