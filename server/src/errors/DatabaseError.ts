import { InnerExceptionError } from "./InnerExceptionError";
/** Represents general database error. */
export class DatabaseError extends InnerExceptionError{
    constructor(msg?: string, innerError?: Error) {
        super(msg, innerError);
        this.name = DatabaseError.name;        
    }
}