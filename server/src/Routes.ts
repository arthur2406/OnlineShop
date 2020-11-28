import { Application } from "express";
import { UserControllers } from "./controllers/UserControllers";
import { Queriable } from "./interfaces/Querieable";
import { PgDatabase } from "./PgDatabase";

export class Routes {

    constructor(app: Application, db: Queriable) {


        const userCtrls = new UserControllers(new UserRepository(db));
        const managerCtrls = new ManagerControllers(new ManagerRepository(db));
        const adminCtrls = new AdminControllers(new AdminRepository(db)); 

        // Here are all the routes. 

        // Customer routes.
        app.route('/api/customer/getItems').get(userCtrls.getItems);

        app.route('/api/customer/getOrders').get(userCtrls.getOrders);

        app.route('/api/customer/getBills').get(userCtrls.getBills);
        
        app.route('/api/customer/addToCart/:itemId').post(userCtrls.addToCart);

        app.route('/api/customer/createOrder').post(userCtrls.createOrder);
        
        app.route('/api/customer/pay/:bill_id').post(userCtrls.payBill);
        
        app.route('/api/customer/deleteFromCard/:itemId').delete(userCtrls.deleteFromCart);


        // Manager routes.
        app.route('/api/manager/getAssignedOrders').get(managerCtrls.getAssignedOrders);

        app.route('/api/manager/discardOrder/:orderId').post(managerCtrls.discardOrder);

        app.route('/api/manager/createBill/:orderId').post(managerCtrls.createBill);


        // Admin routes.
        app.route('/api/admin/addItem').post(adminCtrls.addItem);

        app.route('/api/admin/updateItem').put(adminCtrls.updateItem);

    }
}