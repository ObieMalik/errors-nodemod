"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotImplementedError = void 0;
class NotImplementedError extends Error {
    constructor(message) {
        super(message || 'Method not implemented');
    }
}
exports.NotImplementedError = NotImplementedError;
//# sourceMappingURL=error.notimplemented.js.map