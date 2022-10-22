import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iemployee } from '../interfaces/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

constructor(private httpClient:HttpClient) { }

private url='/data/employee.json';

getPurchaseList():Observable<Iemployee[]>{
  return this.httpClient.get<Iemployee[]>(this.url).pipe(
    map((data:Iemployee[])=> data)
  )
}

getPurchaseById(id:number){
  return this.getPurchaseList().pipe(
    map(
      (data)=>{
        return data.find(p=>p.EmployeeId==id);
      }
    )
  )
}

}
