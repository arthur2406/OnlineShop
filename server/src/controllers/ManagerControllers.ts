import { ManagerRepository } from "../repositories/ManagerRepository";

export class ManagerControllers {

    private _managerRepo: ManagerRepository;

    constructor(managerRepo: ManagerRepository) {
        this._managerRepo = managerRepo;
    }
}