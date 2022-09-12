import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/navbar/top-navbar/top-navbar.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';


const appRoutes:Routes=[
  {path:'add_new_product',component:AddProductComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
