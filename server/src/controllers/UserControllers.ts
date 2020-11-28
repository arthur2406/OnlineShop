import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../repositories/UserRepository";

/** Controllers for user routes. */
export class UserControllers {

    private _userRepo: UserRepository;


    constructor(userRepo: UserRepository) {
        this._userRepo = userRepo;
    }


    async getItems(req: Request, res: Response, next: NextFunction) {
        try {
            const items = await this.userRepo.getAllProducts();
            res.json(items);
        } catch (e) {
            apiErrorHandler(e, req, res, 'Unable to get all items');
        }
    }


    async getOrders(req: Request, res: Response, next: NextFunction) {

    }


    async getBills(req: Request, res: Response, next: NextFunction) {

    }


    async addToCart(req: Request, res: Response, next: NextFunction) {
    
        const itemId = req.params.itemId; 

    }


    async createOrder(req: Request, res: Response, next: NextFunction) {
        
    }


    async payBill(req: Request, res: Response, next: NextFunction) {
        const billId = req.params.billId;


    }
    

    async deleteFromCart(req: Request, res: Response, next: NextFunction) {
        const itemId = req.params.itemId;
        
    }  


}