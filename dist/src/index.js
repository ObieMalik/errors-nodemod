"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.NullError = exports.NotImplementedError = exports.ExpirationError = exports.DuplicateError = exports.ConflictError = exports.AuthorizationError = void 0;
const error_authorization_1 = require("./errors/error.authorization");
Object.defineProperty(exports, "AuthorizationError", { enumerable: true, get: function () { return error_authorization_1.AuthorizationError; } });
const error_conflict_1 = require("./errors/error.conflict");
Object.defineProperty(exports, "ConflictError", { enumerable: true, get: function () { return error_conflict_1.ConflictError; } });
const error_duplicate_1 = require("./errors/error.duplicate");
Object.defineProperty(exports, "DuplicateError", { enumerable: true, get: function () { return error_duplicate_1.DuplicateError; } });
const error_expiration_1 = require("./errors/error.expiration");
Object.defineProperty(exports, "ExpirationError", { enumerable: true, get: function () { return error_expiration_1.ExpirationError; } });
const error_notimplemented_1 = require("./errors/error.notimplemented");
Object.defineProperty(exports, "NotImplementedError", { enumerable: true, get: function () { return error_notimplemented_1.NotImplementedError; } });
const error_null_1 = require("./errors/error.null");
Object.defineProperty(exports, "NullError", { enumerable: true, get: function () { return error_null_1.NullError; } });
const error_validation_1 = require("./errors/error.validation");
Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function () { return error_validation_1.ValidationError; } });
//# sourceMappingURL=index.js.map