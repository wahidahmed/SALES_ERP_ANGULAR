import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Supplier } from '../Models/Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

constructor(private http:HttpClient) { }

getSupplierList():Observable<Supplier[]>{
 return this.http.get<Supplier[]>('/data/suppplier.json').pipe(
  map((data)=>{
    return data;
  })
 )
}


}
