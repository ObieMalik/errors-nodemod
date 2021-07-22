"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
const abstract_error_1 = require("./abstract-error");
const error_id_1 = require("./error-id");
class BaseError extends Error {
    constructor(error) {
        const message = (error instanceof error_id_1.ErrorId) ?
            error.message : error;
        super(message);
        if (this.constructor === BaseError)
            throw new abstract_error_1.AbstractError();
        if (error instanceof error_id_1.ErrorId)
            this._errorId = error;
    }
    get errorId() {
        return this._errorId;
    }
}
exports.BaseError = BaseError;
//# sourceMappingURL=base-error.js.map