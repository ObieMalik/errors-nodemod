"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpirationError = void 0;
class ExpirationError extends Error {
    constructor(message) {
        super(message || 'Resource or request has expired');
    }
}
exports.ExpirationError = ExpirationError;
//# sourceMappingURL=error.expiration.js.map