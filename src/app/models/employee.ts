import { Order } from "./order";
import { CashDrawer } from "./cash_drawer";

export class Employee {
    id: number
    name: string
    username:string
    password:string
    email: string
    number: string
    orders: Order[]
    cashDrawers: CashDrawer[]
}