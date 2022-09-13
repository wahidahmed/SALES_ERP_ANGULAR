import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/interfaces/ICustomer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

allCustomers:Array<any>;

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.callGetAllCustomers();
  }

  callGetAllCustomers(){
    this.customerService.getAllCustomers().subscribe((data)=>{
      this.allCustomers=data;
    })
  }


}
