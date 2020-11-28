import { Queriable } from "../interfaces/Querieable";
import { BaseRepository } from "./BaseRepository";

export class UserRepository extends BaseRepository {
    constructor(db: Queriable) {
        super(db);
    }
    
}