import { DatabaseError } from "./DatabaseError";
import { InnerExceptionError } from "./InnerExceptionError";

/**
 * The error that is thrown when a Database connection errors occur.
 */
export class DatabaseConnectionError extends DatabaseError {
    constructor(msg?: string, innerError?: Error) {
        super(msg, innerError);
        this.name = DatabaseConnectionError.name;        
    }
}