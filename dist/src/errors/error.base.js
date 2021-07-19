"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
const errorid_1 = require("./errorid");
class BaseError extends Error {
    constructor(error) {
        const message = (error instanceof errorid_1.ErrorId) ?
            error.message : error;
        super(message);
        if (error instanceof errorid_1.ErrorId)
            this._errorId = error;
    }
    get errorId() {
        return this._errorId;
    }
}
exports.BaseError = BaseError;
//# sourceMappingURL=error.base.js.map