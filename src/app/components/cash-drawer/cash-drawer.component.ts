import { Component, OnInit } from '@angular/core';
import { CashDrawer } from '../../models/cash_drawer';
import { CashDrawerService } from '../../services/cash-drawer.service';

@Component({
  selector: 'app-cash-drawer',
  templateUrl: './cash-drawer.component.html',
  styleUrls: ['./cash-drawer.component.css']
})
export class CashDrawerComponent implements OnInit {

  drawer:CashDrawer
  employeeId:number

  constructor(private cashDrawerService:CashDrawerService) { }

  ngOnInit() {
    this.employeeId = JSON.parse(localStorage.getItem('loggedUser')).id
    console.log(this.employeeId)
    this.getCashDrawer()
  }

  getCashDrawer(){
    this.cashDrawerService.getEmployeeDrawer(this.employeeId)
    .subscribe(drawer=>{
      this.drawer = drawer
    })
  }

  setOpeningBalance(startingBalance:number){
    this.cashDrawerService.setOpeningDrawer(this.employeeId, {startingBalance} as CashDrawer)
  }
}
