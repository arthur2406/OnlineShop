import { ArgumentUndefinedOrNullError } from "../errors/ArgumentUndefinedOrNullError";
import { Request, Response, NextFunction } from "express";
import { BaseRepository } from "../repositories/BaseRepository";
import { apiErrorHandler } from "../errors/apiErrorHandler";

export class GeneralControllers {
    private _repo: BaseRepository;

    constructor(repo: BaseRepository) {
        if (repo == null) throw ArgumentUndefinedOrNullError.createErrArgNotSpec('repo');


        this._repo = repo;
    }


    getItems = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const items = await this._repo.getItems();
            res.json(items);
        } catch (e) {
            apiErrorHandler(e, req, res, 'Unable to get all items');
        }
    }
}