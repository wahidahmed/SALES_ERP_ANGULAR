import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http'

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/navbar/top-navbar/top-navbar.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { AddNewCustomerComponent } from './components/customer/addNewCustomer/addNewCustomer.component';
import { CustomerService } from './services/customer.service';
import { ListCustomerComponent } from './components/customer/addNewCustomer/list-customer/list-customer.component';


const appRoutes:Routes=[
  {path:'add_new_product',component:AddProductComponent}
  ,{path:'add_new_customer',component:AddNewCustomerComponent}
  ,{path:'customer_list',component:ListCustomerComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    TopNavbarComponent,
    AddNewCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
