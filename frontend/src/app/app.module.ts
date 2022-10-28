import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListUnitComponent } from './components/product/list-unit/list-unit.component';
import { MaterialModuleModule } from './custom-module/material.module/material.module.module';
import { AddSupplierComponent } from './components/supplier/add-supplier/add-supplier.component';
import { ListSupplierComponent } from './components/supplier/list-supplier/list-supplier.component';
import { HighlightDirective } from './customDirective/highlight.directive';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { SortDirective } from './customDirective/sort.directive';
import { FilterDirective } from './customDirective/filter.directive';
import { PurchaseEntryComponent } from './components/purchase/purchase-entry/purchase-entry.component';
import { PurchaseEditComponent } from './components/purchase/purchase-edit/purchase-edit.component';
import { PromiseObservableComponent } from './components/promise-observable/promise-observable.component';
import { FormArrayPracticeComponent } from './components/formArray-practice/formArray-practice.component';
import { PurchaseListComponent } from './components/purchase/purchase-list/purchase-list.component';
import { PurchaseService } from './services/purchase.service';
import { AddEmployeeComponent } from './components/HR/add-employee/add-employee.component';
import { ListEmployeeComponent } from './components/HR/list-employee/list-employee.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AppRoutingModule } from './custom-module/app-routing/app-routing.module';
import { RegisterComponent } from './components/administation/register/register.component';


@NgModule({
  declarations: [
    AppComponent
    ,AddProductComponent
    ,AddNewCustomerComponent
    ,ListCustomerComponent
    ,ListProductComponent
    ,SalesEntryComponent
    ,SalesEditComponent
    ,AddUnitComponent
    , ListUnitComponent
    , AddSupplierComponent
    , ListSupplierComponent
    ,PurchaseEntryComponent
    ,PurchaseEditComponent
    ,PurchaseListComponent
    ,AddEmployeeComponent
    ,ListEmployeeComponent
    ,SidebarComponent
    ,HeaderComponent
    ,FooterComponent
    ,RegisterComponent
    ,HighlightDirective,SortDirective,FilterDirective

    ,TestTableLstFormComponent,TestComponentComponent,PromiseObservableComponent,FormArrayPracticeComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModuleModule,
    AppRoutingModule
  ],
  providers: [
    CustomerService
    ,AlertifyService
    ,ProdcutService
    ,PurchaseService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
