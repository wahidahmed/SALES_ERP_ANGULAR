import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from 'src/app/components/product/add-product/add-product.component';
import { ListProductComponent } from 'src/app/components/product/list-product/list-product.component';
import { AddUnitComponent } from 'src/app/components/product/add-unit/add-unit.component';
import { AddNewCustomerComponent } from 'src/app/components/customer/addNewCustomer/addNewCustomer.component';
import { ListCustomerComponent } from 'src/app/components/customer/addNewCustomer/list-customer/list-customer.component';
import { SalesEntryComponent } from 'src/app/components/sales/sales-entry/sales-entry.component';
import { SalesEditComponent } from 'src/app/components/sales/sales-edit/sales-edit.component';
import { AddSupplierComponent } from 'src/app/components/supplier/add-supplier/add-supplier.component';
import { ListSupplierComponent } from 'src/app/components/supplier/list-supplier/list-supplier.component';
import { PurchaseEntryComponent } from 'src/app/components/purchase/purchase-entry/purchase-entry.component';
import { PurchaseEditComponent } from 'src/app/components/purchase/purchase-edit/purchase-edit.component';
import { PurchaseListComponent } from 'src/app/components/purchase/purchase-list/purchase-list.component';
import { AddEmployeeComponent } from 'src/app/components/HR/add-employee/add-employee.component';
import { ListEmployeeComponent } from 'src/app/components/HR/list-employee/list-employee.component';
import { TestTableLstFormComponent } from 'src/app/components/sales/test-table-lst-form/test-table-lst-form.component';
import { TestComponentComponent } from 'src/app/components/test-component/test-component.component';
import { FormArrayPracticeComponent } from 'src/app/components/formArray-practice/formArray-practice.component';
import { PromiseObservableComponent } from 'src/app/components/promise-observable/promise-observable.component';
import { RegisterComponent } from 'src/app/components/administation/register/register.component';
import { LoginComponent } from 'src/app/components/administation/login/login.component';
import { DasahboardComponent } from 'src/app/components/dasahboard/dasahboard.component';


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
  ,{path:'purchase_edit/:id',component:PurchaseEditComponent}
  ,{path:'purchase_list',component:PurchaseListComponent}
  ,{path:'add_employee',component:AddEmployeeComponent}
  ,{path:'employee_list',component:ListEmployeeComponent}
  ,{path:'register',component:RegisterComponent}
  ,{path:'dashboard',component:DasahboardComponent}
  ,{path:'',component:LoginComponent}

  ,{path:'sales_test',component:TestTableLstFormComponent}
  ,{path:'test',component:TestComponentComponent}
  ,{path:'test_formArray',component:FormArrayPracticeComponent}
  ,{path:'promise_observable',component:PromiseObservableComponent}
]
@NgModule({
  declarations: [

  ],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
