import { DataModel } from "./DataModel";

export interface ItemModel extends DataModel  {
    id?: number,
    name: string,
    image?: string,
    description: string,
    price: number
}