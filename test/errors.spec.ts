import { ErrorId } from '../src/errors/error-id'
import {
    AuthorizationError,
    ConflictError,
    DuplicateError,
    ExpirationError,
    NotImplementedError,
    NullError,
    ValidationError
} from '../src/index'

test('should be able to throw a validation error', () => {
    try {
        throw new ValidationError()
    } catch (ex) {
        expect(ex instanceof ValidationError).toBeTruthy()
    }
})

test('should be able to throw a validation error with just a message', () => {
    try {
        throw new ValidationError('This is an error message string.')
    } catch (ex) {
        expect(ex instanceof ValidationError).toBeTruthy()
        expect(ex.message).toEqual('This is an error message string.')
    }
})

test('should be able to throw a validation error with an error id', () => {
    const TEST_ERROR = new ErrorId(
        1000, 'test_error_name', 'This is an error message string.'
    )

    try {
        throw new ValidationError(TEST_ERROR)
    } catch (ex) {
        expect(ex instanceof ValidationError).toBeTruthy()

        if (ex instanceof ValidationError) {
            expect(ex.errorId).toBeDefined()
            expect(ex.errorId.id).toEqual(TEST_ERROR.id)
            expect(ex.errorId.name).toEqual(TEST_ERROR.name)
            expect(ex.errorId.desc).toEqual(TEST_ERROR.desc)
        }
    }
})

test('should present valid message for error using ErrorId',
    () => {
        const TEST_ERROR = new ErrorId(
            1000, 'test_error_name', 'This is an error message string.'
        )

        try {
            throw new ValidationError(TEST_ERROR)
        } catch (ex) {
            expect(ex instanceof ValidationError).toBeTruthy()

            if (ex instanceof ValidationError) {
                expect(ex.errorId.message).toContain(TEST_ERROR.id.toString())
                expect(ex.errorId.message).toContain(TEST_ERROR.name)
                expect(ex.errorId.message).toContain(TEST_ERROR.desc)

                const errorMessage =
                    `${TEST_ERROR.id} | ${TEST_ERROR.name} | ${TEST_ERROR.desc}`

                expect(ex.errorId.message).toEqual(errorMessage)
            }
        }
    })

test('should present valid message for error using ErrorId w/o desc',
    () => {
        const errorId = new ErrorId(
            1000, 'test_error_name'
        )

        try {
            throw new ValidationError(errorId)
        } catch (ex) {
            expect(ex instanceof ValidationError).toBeTruthy()

            if (ex instanceof ValidationError) {
                expect(ex.errorId).toBeDefined()
                expect(ex.errorId.id).toEqual(errorId.id)
                expect(ex.errorId.name).toEqual(errorId.name)
                expect(ex.errorId.desc).toBeUndefined()
                expect(ex.errorId.message).toContain(errorId.id.toString())
                expect(ex.errorId.message).toContain(errorId.name)

                const errorMessage = `${errorId.id} | ${errorId.name}`

                expect(ex.errorId.message).toEqual(errorMessage)
            }
        }
    })


test('should be able to throw a expiration error', () => {
    try {
        throw new ExpirationError()
    } catch (ex) {
        expect(ex instanceof ExpirationError).toBeTruthy()
    }
})

test('should be able to throw a conflict error', () => {
    try {
        throw new ConflictError()
    } catch (ex) {
        expect(ex instanceof ConflictError).toBeTruthy()
    }
})

test('should be able to throw a not implemented error', () => {
    try {
        throw new NotImplementedError()
    } catch (ex) {
        expect(ex instanceof NotImplementedError).toBeTruthy()
    }
})

test('should be able to throw a null error', () => {
    try {
        throw new NullError()
    } catch (ex) {
        expect(ex instanceof NullError).toBeTruthy()
    }
})

test('should be able to throw a authorization error', () => {
    try {
        throw new AuthorizationError()
    } catch (ex) {
        expect(ex instanceof AuthorizationError).toBeTruthy()
    }
})

test('should be able to throw a duplicate error', () => {
    try {
        throw new DuplicateError()
    } catch (ex) {
        expect(ex instanceof DuplicateError).toBeTruthy()
    }
})