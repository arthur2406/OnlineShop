import { ItemModel } from "../models/ItemModel";
import { Queriable } from "../interfaces/Querieable";
import { BaseRepository } from "./BaseRepository";
import { DatabaseCollection } from "../enumerations/DatabaseCollection";
import { ArgumentUndefinedOrNullError } from "../errors/ArgumentUndefinedOrNullError";

export class AdminRepository extends BaseRepository {
    constructor(db: Queriable) {
        super(db);
    }


    /** Inserts items into database. */
    async createItems(itemsData: ItemModel[]): Promise<ItemModel[]> {
        if (itemsData == null) throw ArgumentUndefinedOrNullError.createErrArgNotSpec('itemsData.');

        const items: ItemModel[] = await this.addRows<ItemModel>(DatabaseCollection.Item, itemsData);
        return items;
    }


    /** Updates item with specified id with passed data. */
    async updateItemById(itemId: number, itemDataToUpdate: Partial<ItemModel>): Promise<ItemModel[]> {
        if (itemId == null) throw ArgumentUndefinedOrNullError.createErrArgNotSpec('itemId.');
        if (itemDataToUpdate == null) throw ArgumentUndefinedOrNullError.createErrArgNotSpec('itemDataToUpdate.');

        const whereCondition = `Id = ${itemId}`;
        const updatedItem = await this.updateRows<ItemModel>(DatabaseCollection.Item, whereCondition, itemDataToUpdate);
        return updatedItem;

    }
}