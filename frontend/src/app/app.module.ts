import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/navbar/top-navbar/top-navbar.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { AddNewCustomerComponent } from './components/customer/addNewCustomer/addNewCustomer.component';


const appRoutes:Routes=[
  {path:'add_new_product',component:AddProductComponent}
  ,{path:'add_new_customer',component:AddNewCustomerComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    TopNavbarComponent,
    AddNewCustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
