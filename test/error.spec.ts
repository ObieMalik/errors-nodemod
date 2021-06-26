import {
    AuthorizationError,
    ConflictError,
    DuplicateError,
    ExpirationError,
    NotImplementedError,
    NullError,
    ValidationError
} from '../src/index'

test( 'should be able to throw a validation error', () => {
    try {
        throw new ValidationError()
    } catch ( ex ) {
        expect( ex instanceof ValidationError ).toBeTruthy()
    }
} )

test( 'should be able to throw a expiration error', () => {
    try {
        throw new ExpirationError()
    } catch ( ex ) {
        expect( ex instanceof ExpirationError ).toBeTruthy()
    }
} )

test( 'should be able to throw a conflict error', () => {
    try {
        throw new ConflictError()
    } catch ( ex ) {
        expect( ex instanceof ConflictError ).toBeTruthy()
    }
} )

test( 'should be able to throw a not implemented error', () => {
    try {
        throw new NotImplementedError()
    } catch ( ex ) {
        expect( ex instanceof NotImplementedError ).toBeTruthy()
    }
} )

test( 'should be able to throw a null error', () => {
    try {
        throw new NullError()
    } catch ( ex ) {
        expect( ex instanceof NullError ).toBeTruthy()
    }
} )

test( 'should be able to throw a authorization error', () => {
    try {
        throw new AuthorizationError()
    } catch ( ex ) {
        expect( ex instanceof AuthorizationError ).toBeTruthy()
    }
} )

test( 'should be able to throw a duplicate error', () => {
    try {
        throw new DuplicateError()
    } catch ( ex ) {
        expect( ex instanceof DuplicateError ).toBeTruthy()
    }
} )
