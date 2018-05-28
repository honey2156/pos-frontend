import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../models/order';
import { OrderDetail } from '../../models/order_detail';
import { ReloadCartService } from '../../services/reload-cart.service';

@Component({
  selector: 'app-saved-orders-detail',
  templateUrl: './saved-orders-detail.component.html',
  styleUrls: ['./saved-orders-detail.component.css']
})
export class SavedOrdersDetailComponent implements OnInit {

  @Input() order: Order
  @Input() orderDetail: OrderDetail[] = []

  constructor(
    private reloadCartService: ReloadCartService,
    private router: Router) { }

  ngOnInit() {
  }

  reloadOrder(order: Order) {
    this.reloadCartService.updateOrder(order)
    this.router.navigate(['checkout'])
  }

  
}
