import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICustomer } from 'src/app/interfaces/ICustomer';

@Component({
  selector: 'app-addNewCustomer',
  templateUrl: './addNewCustomer.component.html',
  styleUrls: ['./addNewCustomer.component.css']
})
export class AddNewCustomerComponent implements OnInit {

  constructor() { }

  @ViewChild('customerForm') addNewCust:NgForm

  @Input() customerDataById:ICustomer;


  ngOnInit() {

  }

  onSubmit(){
    console.log(this.addNewCust.value.customerAddr);
  }
}
