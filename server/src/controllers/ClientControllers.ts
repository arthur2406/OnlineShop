import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "../errors/apiErrorHandler";
import { ArgumentUndefinedOrNullError } from "../errors/ArgumentUndefinedOrNullError";
import { ClientRepository } from "../repositories/ClientRepository";

/** Controllers for user routes. */
export class ClientControllers {

    private _repo: ClientRepository;


    constructor(clientRepo: ClientRepository) {
        if (clientRepo == null) throw ArgumentUndefinedOrNullError.createErrArgNotSpec('clientRepo');

        this._repo = clientRepo;
    }


    getOrders = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orders = await this._repo.getOrders(1);
            res.json(orders);
        } catch (e) {
            apiErrorHandler(e, req, res, 'Unable to get all orders');
        }
    }


    getBills = async (req: Request, res: Response, next: NextFunction) => {

    }


    addToCart = async (req: Request, res: Response, next: NextFunction) => {
    
        const itemId = req.params.itemId; 

    }


    createOrder = async (req: Request, res: Response, next: NextFunction) => {
        
    }


    payBill = async (req: Request, res: Response, next: NextFunction) => {
        const billId = req.params.billId;

    }
    

    deleteFromCart = async (req: Request, res: Response, next: NextFunction) => {
        const itemId = req.params.itemId;
        
    }  


}