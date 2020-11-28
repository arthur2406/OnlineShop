import { Request, Response, NextFunction } from 'express';

export const apiErrorHandler = (
    err: any, 
    req: Request, 
    res: Response, 
    message: string) => {
        
    const error: ErrorApiMessage = { error: true, message };
    res.json(error);

}


export interface ErrorApiMessage {
    error: boolean,
    message: string
}