import { DatabaseError } from "./DatabaseError";
import { InnerExceptionError } from "./InnerExceptionError";

/**
 * The error that is thrown when an invalid query string was passed.
 */
export class DatabaseInvalidQueryError extends DatabaseError {
    constructor(msg?: string, innerError?: Error) {
        super(msg, innerError);
        this.name = DatabaseInvalidQueryError.name;        
    }
}