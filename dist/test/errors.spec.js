"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
test('should not be able to instantiate the BaseError abstract class', () => {
    try {
        throw new index_1.BaseError('This is an error message string.');
    }
    catch (ex) {
        const abstractError = new index_1.AbstractError();
        expect(ex.message).toEqual(abstractError.message);
    }
});
test('should be able to throw a validation error', () => {
    try {
        throw new index_1.ValidationError();
    }
    catch (ex) {
        expect(ex instanceof index_1.ValidationError).toBeTruthy();
    }
});
test('should be able to throw a validation error with just a message', () => {
    try {
        throw new index_1.ValidationError('This is an error message string.');
    }
    catch (ex) {
        expect(ex instanceof index_1.ValidationError).toBeTruthy();
        expect(ex.message).toEqual('This is an error message string.');
    }
});
test('should be able to throw a validation error with an error id', () => {
    const TEST_ERROR = new index_1.ErrorId(1000, 'test_error_name', 'This is an error message string.');
    try {
        throw new index_1.ValidationError(TEST_ERROR);
    }
    catch (ex) {
        expect(ex instanceof index_1.ValidationError).toBeTruthy();
        if (ex instanceof index_1.ValidationError) {
            expect(ex.errorId).toBeDefined();
            expect(ex.errorId.id).toEqual(TEST_ERROR.id);
            expect(ex.errorId.name).toEqual(TEST_ERROR.name);
            expect(ex.errorId.desc).toEqual(TEST_ERROR.desc);
        }
    }
});
test('should present valid message for error using ErrorId', () => {
    const TEST_ERROR = new index_1.ErrorId(1000, 'test_error_name', 'This is an error message string.');
    try {
        throw new index_1.ValidationError(TEST_ERROR);
    }
    catch (ex) {
        expect(ex instanceof index_1.ValidationError).toBeTruthy();
        if (ex instanceof index_1.ValidationError) {
            expect(ex.errorId.message).toContain(TEST_ERROR.id.toString());
            expect(ex.errorId.message).toContain(TEST_ERROR.name);
            expect(ex.errorId.message).toContain(TEST_ERROR.desc);
            const errorMessage = `${TEST_ERROR.id} | ${TEST_ERROR.name} | ${TEST_ERROR.desc}`;
            expect(ex.errorId.message).toEqual(errorMessage);
        }
    }
});
test('should present valid message for error using ErrorId w/o desc', () => {
    const errorId = new index_1.ErrorId(1000, 'test_error_name');
    try {
        throw new index_1.ValidationError(errorId);
    }
    catch (ex) {
        expect(ex instanceof index_1.ValidationError).toBeTruthy();
        if (ex instanceof index_1.ValidationError) {
            expect(ex.errorId).toBeDefined();
            expect(ex.errorId.id).toEqual(errorId.id);
            expect(ex.errorId.name).toEqual(errorId.name);
            expect(ex.errorId.desc).toBeUndefined();
            expect(ex.errorId.message).toContain(errorId.id.toString());
            expect(ex.errorId.message).toContain(errorId.name);
            const errorMessage = `${errorId.id} | ${errorId.name}`;
            expect(ex.errorId.message).toEqual(errorMessage);
        }
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
//# sourceMappingURL=errors.spec.js.map