import { FinalOrderModel } from "../models/FinalOrderModel";
import { DatabaseCollection } from "../enumerations/DatabaseCollection";
import { Queriable } from "../interfaces/Querieable";
import { BaseRepository } from "./BaseRepository";

export class ClientRepository extends BaseRepository {
    constructor(db: Queriable) {
        super(db);
    }


    /** Get all rows from 'FinalOrder' table. */
    async getOrders(clientId: number): Promise<FinalOrderModel[]> {
        const condition = `WHERE ClientId = ${clientId}`;
        const orders: FinalOrderModel[] = await this.getRows<FinalOrderModel>(DatabaseCollection.FinalOrder, condition);
        return orders;
    }

    
    // async createOrder(orderData: OrderModel) {

    // }


}