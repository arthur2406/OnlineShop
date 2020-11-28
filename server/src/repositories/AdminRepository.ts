import { Queriable } from "../interfaces/Querieable";
import { BaseRepository } from "./BaseRepository";

export class AdminRepository extends BaseRepository {
    constructor(db: Queriable) {
        super(db);
    }
}