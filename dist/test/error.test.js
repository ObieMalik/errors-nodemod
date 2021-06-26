"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../dist/src/index");
test('should be able to throw a validation error', () => {
    try {
        throw new index_1.ValidationError();
    }
    catch (ex) {
        expect(ex instanceof index_1.ValidationError).toBeTruthy();
    }
});
test('should be able to throw a expiration error', () => {
    try {
        throw new index_1.ExpirationError();
    }
    catch (ex) {
        expect(ex instanceof index_1.ExpirationError).toBeTruthy();
    }
});
test('should be able to throw a conflict error', () => {
    try {
        throw new index_1.ConflictError();
    }
    catch (ex) {
        expect(ex instanceof index_1.ConflictError).toBeTruthy();
    }
});
test('should be able to throw a not implemented error', () => {
    try {
        throw new index_1.NotImplementedError();
    }
    catch (ex) {
        expect(ex instanceof index_1.NotImplementedError).toBeTruthy();
    }
});
test('should be able to throw a null error', () => {
    try {
        throw new index_1.NullError();
    }
    catch (ex) {
        expect(ex instanceof index_1.NullError).toBeTruthy();
    }
});
test('should be able to throw a authorization error', () => {
    try {
        throw new index_1.AuthorizationError();
    }
    catch (ex) {
        expect(ex instanceof index_1.AuthorizationError).toBeTruthy();
    }
});
test('should be able to throw a duplicate error', () => {
    try {
        throw new index_1.DuplicateError();
    }
    catch (ex) {
        expect(ex instanceof index_1.DuplicateError).toBeTruthy();
    }
});
//# sourceMappingURL=error.test.js.map