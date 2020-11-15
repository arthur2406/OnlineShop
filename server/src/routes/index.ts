import { Application, Request, Response } from "express"

export const useRoutesForApp = (app: Application) => {
    app.use('/api/', (req: Request, res: Response) => {
        res.send({ text: 'Hello' });
    });
}