import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
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
filteredCustomers:Array<ICustomer>;
getCustomer:ICustomer={
  CustomerId: 0,
  CustomerName:'',
  CustomerAddress:'',
  CustomerPhone:''
};

  constructor(private customerService:CustomerService,private alertify:AlertifyService) { }

  ngOnInit() {
    this.callGetAllCustomers();
  }

  callGetAllCustomers(){
    this.customerService.getAllCustomers().subscribe((data)=>{
      console.log(data);
      this.allCustomers=data;
      this.filteredCustomers=this.allCustomers;
    })
  }


  onDelete(id:number){

    // this.alertify.warning('successfully delete the id -'+id);
  }

  onEdit(id:number,staticModal:any){
    staticModal.show()
    this.customerService.getCustomerById(id).subscribe((data)=>{
     this.getCustomer= data;
   })
  }

  isModalClose(value: boolean,staticModal:any){
    if(value){
      staticModal.hide()
    }
  }

  onFilterdData(event){
    this.filteredCustomers=event;
  }

}
