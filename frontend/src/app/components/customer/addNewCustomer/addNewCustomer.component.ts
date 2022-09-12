import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addNewCustomer',
  templateUrl: './addNewCustomer.component.html',
  styleUrls: ['./addNewCustomer.component.css']
})
export class AddNewCustomerComponent implements OnInit {
@ViewChild('customerForm') addNewCust:NgForm
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.addNewCust);
  }
}
