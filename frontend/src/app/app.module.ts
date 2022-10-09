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

const appRoutes:Routes=[
  {path:'add_new_product/:id',component:AddProductComponent}
  ,{path:'product_list',component:ListProductComponent}
  ,{path:'add_new_unit',component:AddUnitComponent}
  ,{path:'add_new_customer',component:AddNewCustomerComponent}
  ,{path:'customer_list',component:ListCustomerComponent}
  ,{path:'sales_entry',component:SalesEntryComponent}
  ,{path:'sales_edit',component:SalesEditComponent}
  ,{path:'add_supplier',component:AddSupplierComponent}
  ,{path:'supplier_list',component:ListSupplierComponent}
  ,{path:'purchase_entry',component:PurchaseEntryComponent}
  ,{path:'purchase_edit',component:PurchaseEditComponent}
  ,{path:'purchase_list',component:PurchaseListComponent}

  ,{path:'sales_test',component:TestTableLstFormComponent}
  ,{path:'test',component:TestComponentComponent}
  ,{path:'test_formArray',component:FormArrayPracticeComponent}
  ,{path:'promise_observable',component:PromiseObservableComponent}
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
    , ListUnitComponent, AddSupplierComponent, ListSupplierComponent,PurchaseEntryComponent,PurchaseEditComponent,PurchaseListComponent

    ,HighlightDirective,SortDirective,FilterDirective

    ,TestTableLstFormComponent,TestComponentComponent,PromiseObservableComponent,FormArrayPracticeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModuleModule
  ],
  providers: [
    CustomerService
    ,AlertifyService
    ,ProdcutService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
