import { ItemModel } from "../models/ItemModel";
import { DatabaseCollection } from "../enumerations/DatabaseCollection";
import { ArgumentUndefinedOrNullError } from "../errors/ArgumentUndefinedOrNullError";
import { Queriable } from "../interfaces/Querieable";
import { DatabaseError } from "../errors/DatabaseError";

export abstract class BaseRepository {

    protected _db: Queriable;


    constructor(db: Queriable) {
        if (db == null) throw ArgumentUndefinedOrNullError.createErrArgNotSpec('db');
        this._db = db;
    }


    protected async getRows<T>(collectionName: DatabaseCollection): Promise<T[]> {
        try {
            const db = this._db;
            const sqlString = `SELECT * FROM ${collectionName};`;
            const result: T[] = await db.query(sqlString);        
            return result;
        } catch (err) {
            throw new DatabaseError('Unable to get rows', err);
        }
    }


    /** Get all rows from 'Item' table. */
    async getItems(): Promise<ItemModel[]> {
        const items: ItemModel[] = await this.getRows<ItemModel>(DatabaseCollection.Item);
        return items;
    }
    
}