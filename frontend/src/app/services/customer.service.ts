import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor(private http:HttpClient) { }

url='/data/customer.json';

  getAllCustomers():Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.url);
  }

  // getCustomerById(id:number):Observable<ICustomer>{
  //   // return this.http.get<ICustomer>(this.url).subscribe(d=>{})
  // }

}
