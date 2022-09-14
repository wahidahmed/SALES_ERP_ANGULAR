import { Component, OnInit, TemplateRef } from '@angular/core';
import { ICustomer } from 'src/app/interfaces/ICustomer';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

allCustomers:Array<ICustomer>;
getCustomerById:ICustomer;

  constructor(private customerService:CustomerService,private alertify:AlertifyService) { }

  ngOnInit() {
    this.callGetAllCustomers();
  }

  callGetAllCustomers(){
    this.customerService.getAllCustomers().subscribe((data)=>{
      this.allCustomers=data;
    })
  }



  onDelete(id:number,staticModal:any){
    staticModal.show()
    this.customerService.getAllCustomers().subscribe((data)=>{
     return data.find((x)=>x.Id===1);
    })
    // this.alertify.warning('successfully delete the id -'+id);
  }



}
