/**
 * The error, that can includes inner errors (exceptions). * 
 */
export abstract class InnerExceptionError extends Error {

    
    // Note 1: the InnerExceptionError cannot be declared as an interface, because this will not allow to do "instanceof", that can be useful in many scenarios. An example: logging inner errors.
    // Note 2: the word "exception" in the name of this class was used for usability to avoid inapposite names like "InnerErrorError", "HasInnerError", "ComplexError", and so on.


    /**
     * Determine whether this error contains any inner error.
     */
    public get hasInnerError(): boolean { return this.innerError != null }


    /**
     * The inner error of this error; can be not specified.
     */
    public readonly innerError?: Error | InnerExceptionError;


    constructor(message?: string, innerError?: Error | InnerExceptionError) {
        super(message);
        this.innerError = innerError;        
    }

}