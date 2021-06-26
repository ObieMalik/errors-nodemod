"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationError = void 0;
class AuthorizationError extends Error {
    constructor(message) {
        super(message || 'Authorization not available to access resource.');
    }
}
exports.AuthorizationError = AuthorizationError;
//# sourceMappingURL=error.authorization.js.map