import { ItemModel } from "../models/ItemModel";
import { DatabaseCollection } from "../enumerations/DatabaseCollection";
import { ArgumentUndefinedOrNullError } from "../errors/ArgumentUndefinedOrNullError";
import { Queriable } from "../interfaces/Querieable";
import { DatabaseError } from "../errors/DatabaseError";
import { truncateSync } from "fs";
import { DataModel } from "../models/DataModel";

export class BaseRepository {

    /** Data source. */
    protected _db: Queriable;

    constructor(db: Queriable) {
        if (db == null) throw ArgumentUndefinedOrNullError.createErrArgNotSpec('db');
        this._db = db;
    }


    /** Get all rows from specified table. */
    protected async getRows<T extends DataModel>(collectionName: DatabaseCollection, sqlCondition?: string): Promise<T[]> {
        try {
            // Build sql string.
            let sqlString = `SELECT * FROM ${collectionName} `;
            if (sqlCondition != null) sqlString += sqlCondition;
            sqlString += ';';

            const result: T[] = await this._db.query(sqlString);        
            return result;
        } catch (err) {
            throw new DatabaseError('Unable to get rows', err);
        }
    }


    /** Insert rows into the specified table. */
    protected async addRows<T extends DataModel>(collectionName: DatabaseCollection, rowsData:T[]): Promise<T[]> {
        try {

            // Build SQL string.
            const fields = Object.keys(rowsData[0]).join(',');
            let valuesString: string = ''; 
            rowsData.forEach((item: T, index: number) => {
                let crrValString = '('; 
    
                crrValString += Object.values(item)
                    .map((val: any) =>  `'${val}'`)
                    .join(',');
    
                crrValString += index === rowsData.length - 1 ? ')' : '),'
                valuesString += crrValString;
            });
            const sqlString = `INSERT INTO ${collectionName} (${fields}) VALUES ${valuesString} RETURNING *;`;

            const result: T[] = await this._db.query(sqlString);

            return result; 
        } catch (err) {
            throw new DatabaseError('Unable to insert rows', err);
        }
    }


    /** Updates row in specified table. */
    protected async updateRows<T extends DataModel>(collectionName: DatabaseCollection, whereCondition :string, dataToUpdate: Partial<T>): Promise<T[]> {
        try {

            // Build SQL string.
            const rowData: string[] = [];
            Object.entries(dataToUpdate).forEach((keyValueArr) => {
                rowData.push(`${keyValueArr[0]}='${keyValueArr[1]}'`);
            });
            const setClause = rowData.join(','); 
            const sqlString = `UPDATE ${collectionName} ` +
                `SET ${setClause} ` +
                `WHERE ${whereCondition} ` +
                'RETURNING *;';


            const result: T[] = await this._db.query(sqlString);
            return result;

        } catch (err) {
            throw new DatabaseError('Unable to update row', err);
        }
    } 




    //#region Common methods.
    
    /** Get all rows from 'Item' table. */
    async getItems(): Promise<ItemModel[]> {
        const items: ItemModel[] = await this.getRows<ItemModel>(DatabaseCollection.Item);
        return items;
    }

    //#endregion
    
}