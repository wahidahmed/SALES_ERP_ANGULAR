import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ICustomer } from 'src/app/interfaces/ICustomer';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-addNewCustomer',
  templateUrl: './addNewCustomer.component.html',
  styleUrls: ['./addNewCustomer.component.css']
})
export class AddNewCustomerComponent implements OnInit {

  constructor(private router: Router,private alertifyService:AlertifyService,private customerSrvice:CustomerService) { }

  @ViewChild('customerForm') addNewCust:NgForm

  @Input() customerDataById:ICustomer={
    CustomerId: 0,
    CustomerName:'',
    CustomerAddress:'',
    CustomerPhone:''
  };

@Output()isModalClose=new EventEmitter<boolean>();

  ngOnInit() {

  }

  onSubmit(){
    this.alertifyService.confirm('are you sure to save',()=>{
      console.log(this.addNewCust);
      this.customerSrvice.saveCustomer(this.addNewCust.value).subscribe(
        (res)=>{
          console.log(res);
          this.alertifyService.success('successfully saved the customer');
          this.router.navigate(['/customer_list']);
        },
        (err)=>{
          console.log(err.error);
          this.alertifyService.error(err.error);
        }
      );
    })

  }

  onReset(){
    if(this.router.url==='/customer_list'){
        this.isModalClose.emit(true);
    }
    else{
      this.isModalClose.emit(false);
    }
  }

}
