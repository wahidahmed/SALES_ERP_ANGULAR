import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/navbar/top-navbar/top-navbar.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { AddNewCustomerComponent } from './components/customer/addNewCustomer/addNewCustomer.component';
import { CustomerService } from './services/customer.service';
import { ListCustomerComponent } from './components/customer/addNewCustomer/list-customer/list-customer.component';
import { AlertifyService } from './services/alertify.service';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { ProdcutService } from './services/prodcut.service';
import { SalesEntryComponent } from './components/sales/sales-entry/sales-entry.component';
import { SalesEditComponent } from './components/sales/sales-edit/sales-edit.component';
import { TestTableLstFormComponent } from './components/sales/test-table-lst-form/test-table-lst-form.component';
import { AddUnitComponent } from './components/product/add-unit/add-unit.component';



const appRoutes:Routes=[
  {path:'add_new_product/:id',component:AddProductComponent}
  ,{path:'product_list',component:ListProductComponent}
  ,{path:'add_new_unit',component:AddUnitComponent}
  ,{path:'add_new_customer',component:AddNewCustomerComponent}
  ,{path:'customer_list',component:ListCustomerComponent}
  ,{path:'sales_entry',component:SalesEntryComponent}
  ,{path:'sales_edit',component:SalesEditComponent}
  ,{path:'sales_test',component:TestTableLstFormComponent}
]
@NgModule({
  declarations: [
    AppComponent
    ,AddProductComponent
    ,TopNavbarComponent
    ,AddNewCustomerComponent
    ,ListCustomerComponent
    ,ListProductComponent
    ,SalesEntryComponent
    ,SalesEditComponent
    ,AddUnitComponent

    ,TestTableLstFormComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),

  ],
  providers: [
    CustomerService
    ,AlertifyService
    ,ProdcutService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
