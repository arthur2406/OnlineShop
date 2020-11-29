import { Application } from "express";
import { AdminControllers } from "./controllers/AdminControllers";
import { GeneralControllers } from "./controllers/GeneralControllers";
import { ManagerControllers } from "./controllers/ManagerControllers";
import { ClientControllers } from "./controllers/ClientControllers";
import { Queriable } from "./interfaces/Querieable";
import { AdminRepository } from "./repositories/AdminRepository";
import { BaseRepository } from "./repositories/BaseRepository";
import { ManagerRepository } from "./repositories/ManagerRepository";
import { ClientRepository } from "./repositories/ClientRepository";

export class Routes {

    constructor(app: Application, db: Queriable) {

        const generalCtrls = new GeneralControllers(new BaseRepository(db));
        const clientCtrls = new ClientControllers(new ClientRepository(db));
        const managerCtrls = new ManagerControllers(new ManagerRepository(db));
        const adminCtrls = new AdminControllers(new AdminRepository(db)); 

        // Here are all the routes. 

        // General routes
        app.route('/api/general/getItems').get(generalCtrls.getItems);
        
        // Customer routes.
        app.route('/api/client/getOrders').get(clientCtrls.getOrders);

        app.route('/api/client/getBills').get(clientCtrls.getBills);
        
        app.route('/api/client/addToCart/:itemId').post(clientCtrls.addToCart);

        app.route('/api/client/createOrder').post(clientCtrls.createOrder);
        
        app.route('/api/client/pay/:bill_id').post(clientCtrls.payBill);
        
        app.route('/api/client/deleteFromCard/:itemId').delete(clientCtrls.deleteFromCart);


        // Manager routes.
        // app.route('/api/manager/getAssignedOrders').get(managerCtrls.getAssignedOrders);

        // app.route('/api/manager/discardOrder/:orderId').post(managerCtrls.discardOrder);

        // app.route('/api/manager/createBill/:orderId').post(managerCtrls.createBill);


        // // Admin routes.
        app.route('/api/admin/createItems').post(adminCtrls.createItems);

        app.route('/api/admin/updateItem/:itemId').put(adminCtrls.updateItem);

    }
}