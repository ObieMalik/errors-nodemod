"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationError extends Error {
}
exports.ValidationError = ValidationError;
class AuthorizationError extends Error {
}
exports.AuthorizationError = AuthorizationError;
class ConflictError extends Error {
}
exports.ConflictError = ConflictError;
class ExpirationError extends Error {
}
exports.ExpirationError = ExpirationError;
class NullError extends Error {
}
exports.NullError = NullError;
class DuplicateError extends Error {
}
exports.DuplicateError = DuplicateError;
class NotImplementedError extends Error {
    constructor(message) {
        super(message || 'Method Not Implemented');
    }
}
exports.NotImplementedError = NotImplementedError;
//# sourceMappingURL=error.js.map