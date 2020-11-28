import { AdminRepository } from "../repositories/AdminRepository";

export class AdminControllers {
    private _adminRepo: AdminRepository;

    constructor(adminRepo: AdminRepository) {
        this._adminRepo = adminRepo;
    }
}