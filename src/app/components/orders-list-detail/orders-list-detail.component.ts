import { Component, OnInit, Input } from '@angular/core';
import { OrderDetail } from '../../models/order_detail';
import { Order } from '../../models/order';

@Component({
  selector: 'app-orders-list-detail',
  templateUrl: './orders-list-detail.component.html',
  styleUrls: ['./orders-list-detail.component.css']
})
export class OrdersListDetailComponent implements OnInit {

  @Input() order: Order
  @Input() orderDetail: OrderDetail[] = []

  constructor() { }

  ngOnInit() {
  }

}
