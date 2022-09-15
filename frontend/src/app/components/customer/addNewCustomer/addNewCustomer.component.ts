import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ICustomer } from 'src/app/interfaces/ICustomer';

@Component({
  selector: 'app-addNewCustomer',
  templateUrl: './addNewCustomer.component.html',
  styleUrls: ['./addNewCustomer.component.css']
})
export class AddNewCustomerComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('customerForm') addNewCust:NgForm

  @Input() customerDataById:ICustomer={
    Id: 0,
    CustomerName:'',
    CustomerAddress:'',
    CustomerPhone:''
  };

@Output()isModalClose=new EventEmitter<boolean>();

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.addNewCust.value.customerAddr);
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
