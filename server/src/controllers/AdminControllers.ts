import { AdminRepository } from "../repositories/AdminRepository";
import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "../errors/apiErrorHandler";
import { ItemModel } from "../models/ItemModel";

export class AdminControllers {
    private _repo: AdminRepository;

    constructor(adminRepo: AdminRepository) {
        this._repo = adminRepo;
    }


    createItems = async (req: Request, res: Response, next: NextFunction) => {
        try { 
            const createdItems = await this._repo.createItems([
                {
                    name: 'iphone2',
                    image: 'path/to/iphone2.img',
                    description: 'overpriced',
                    price: 255.5 
                },
                {
                    name: 'iphone3',
                    image: 'path/to/iphone3.img',
                    description: 'overpriced shit',
                    price: 3552.4 
                }
            ]);
            res.json(createdItems);
        } catch (err) {
            apiErrorHandler(err, req, res, 'Unable to create items');
        } 
    }  


    updateItem = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const sampleDataToUpdate = {
                name: 'updated name',
                image: 'updated image'
            };
            const updatedItem = await this._repo.updateItemById(parseInt(req.params.itemId), sampleDataToUpdate);
            res.json(updatedItem);
        } catch (err) {
            apiErrorHandler(err, req, res, 'Unable to update item');
        }
    }
    
}