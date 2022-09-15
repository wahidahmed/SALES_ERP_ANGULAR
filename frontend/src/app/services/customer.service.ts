import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/ICustomer';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor(private http:HttpClient) { }

url='/data/customer.json';

  getAllCustomers():Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.url);
  }

  getCustomerById(id:number){
    return this.getAllCustomers().pipe(
       map(pArr=>{
         // throw new Error('something error');
        return pArr.find(p=>p.Id===id);
       })
     );
  }

}
