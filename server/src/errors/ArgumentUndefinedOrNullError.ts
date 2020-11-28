import { InnerExceptionError } from './InnerExceptionError';

/**
 * The error that is thrown when a undefined or null is passed to a method that does not accept it as a valid argument.
 */
export class ArgumentUndefinedOrNullError extends InnerExceptionError {
    constructor(msg?: string, innerError?: Error) {
        super(msg, innerError);
        this.name = ArgumentUndefinedOrNullError.name;        
    }


    /** Creates new error with message about not specified argument, like: "The "%ARGUMENT_NAME%" was not specified.". */
    static createErrArgNotSpec(argumentName?: string, innerError?: Error): ArgumentUndefinedOrNullError {
        const msg = 'The ' + (argumentName == null ? 'argument' : ('"' + argumentName + '"')) 
            + ' was not specified.';
        return new ArgumentUndefinedOrNullError(msg, innerError);
    }

}