import { OrderDetail } from "./order_detail";
import { Customer } from "./customer";

export class Order {
    id: number
    customerId: number
    customer:Customer
    employeeId: number
    status: boolean
    orderDate: string
    orderTime: string
    paymentMode: string
    totalAmount: number
    orderDetails: OrderDetail[]
}