import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/navbar/top-navbar/top-navbar.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
