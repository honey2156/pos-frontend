import { OrderDetail } from "./order_detail";

export class Product {
    id: number
    name: string
    description: string
    price: number
    stock: number
    orderDetails: OrderDetail[]
}