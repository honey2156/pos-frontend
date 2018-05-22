import { Order } from "./order";

export class Customer {
    id: number
    name: string
    email: string
    number: string
    orders: Order[]
}