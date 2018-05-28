import { Product } from "./product";

export class OrderDetail {
    id: number
    orderId: number
    productId: number
    product: Product
    price: number
    quantity: number
}