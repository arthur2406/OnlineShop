import { Queriable } from "../interfaces/Querieable";
import { BaseRepository } from "./BaseRepository";

export class ManagerRepository extends BaseRepository {
    constructor(db: Queriable) {
        super(db);
    }
}