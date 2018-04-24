interface ValidationError extends Error { }
interface ValidationErrorConstructor extends ErrorConstructor {	 }

declare const ValidationError: ValidationErrorConstructor

interface ConflictError extends Error { }
interface ConflictErrorConstructor extends ErrorConstructor {	 }

declare const ConflictError: ConflictErrorConstructor;

interface NotImplementedError extends Error { }
interface NotImplementedErrorConstructor extends ErrorConstructor {	 }

declare const NotImplementedError: NotImplementedErrorConstructor;

interface ExpirationError extends Error { }
interface ExpirationErrorConstructor extends ErrorConstructor {	 }

declare const ExpirationError: ExpirationErrorConstructor;

interface DuplicateError extends Error { }
interface DuplicateErrorConstructor extends ErrorConstructor {	 }

declare const DuplicateError: DuplicateErrorConstructor;

interface NullError extends Error { }
interface NullErrorConstructor extends ErrorConstructor {	 }

declare const NullError: NullErrorConstructor;

interface AuthorizationError extends Error { }
interface AuthorizationErrorConstructor extends ErrorConstructor {	 }

declare const AuthorizationError: AuthorizationErrorConstructor;
