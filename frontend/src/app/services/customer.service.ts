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
    // return this.http.get<ICustomer[]>("http://localhost:5286/api/customer")
  }

  getCustomerById(id:number){
    return this.getAllCustomers().pipe(
       map(pArr=>{
         // throw new Error('something error');
        return pArr.find(p=>p.CustomerId===id);
       })
     );
  }

  saveCustomer(obj:ICustomer){
   return this.http.post('http://localhost:5286/api/customer',obj);
  }
  updateCustomer(id:number,obj:ICustomer){
    return this.http.put('http://localhost:5286/api/customer/'+id,obj);
   }

}
