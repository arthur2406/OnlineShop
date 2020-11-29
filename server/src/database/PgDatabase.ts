import { Pool, PoolClient, QueryResult, types } from 'pg';
import { ArgumentUndefinedOrNullError } from '../errors/ArgumentUndefinedOrNullError';
import { DatabaseConnectionError } from '../errors/DatabaseConnectionError';
import { DatabaseInvalidQueryError } from '../errors/DatabaseInvalidQueryError';
import { Queriable } from '../interfaces/Querieable';

export class PgDatabase implements Queriable {

    private _pool: Pool;


    constructor() {
        this._pool = new Pool({
           user: process.env.PGUSER,
           host: process.env.PGHOST,
           database: process.env.PGDATABASE,
           password: process.env.PGPASSWORD,
           port: parseInt(process.env.PGPORT)
        });

        // Override Numeric parser
        types.setTypeParser(1700, (val) => {
            return parseFloat(val);
        });
    }


    async query(sqlString: string): Promise<any[]> {
    
        let client: PoolClient
        try {
            client = await this._pool.connect();
        } catch  (err) {
            throw new DatabaseConnectionError('Unable to connect to database', err);
        }
        
        let rows: any[];
        try {
            const queryResult = await client.query(sqlString);
            rows = queryResult.rows;
            client.release();
        } catch (err: any) {
            if (sqlString == null) throw ArgumentUndefinedOrNullError.createErrArgNotSpec('sqlString.');
            throw new DatabaseInvalidQueryError(err.message);
        }

        return rows;
        
    }
}