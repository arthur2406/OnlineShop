import { DataModel } from "./DataModel";

export interface FinalOrderModel extends DataModel {
    id?: number,
    address: string,
    status?: string,
    hasInvoice: boolean,
    clientId: number,
    managerId: number
}