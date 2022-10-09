import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Purchase } from '../Models/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

constructor(private httpClient:HttpClient) { }
  private url='/data/purchase.json';

  getPurchaseList():Observable<Purchase[]>{
    return this.httpClient.get<Purchase[]>(this.url).pipe(
      map((data:Purchase[])=> data)
    )
  }

  getPurchaseById(id:number){
    return this.getPurchaseList().pipe(
      map(
        (data)=>{
          return data.find(p=>p.purchaseMasterId==id);
        }
      )
    )
  }
}
