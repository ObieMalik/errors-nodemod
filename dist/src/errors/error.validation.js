"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
class ValidationError extends Error {
    constructor(message) {
        super(message || 'Validation Error');
    }
}
exports.ValidationError = ValidationError;
//# sourceMappingURL=error.validation.js.map