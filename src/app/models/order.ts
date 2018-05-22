import { OrderDetail } from "./order_detail";

export class Order {
    id: number
    customerId: number
    employeeId: number
    status: boolean
    orderDate: string
    paymentMode: string
    totalAmount: number
    orderDetails: OrderDetail[]
}