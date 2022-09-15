import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProdcutService {

  constructor(private http:HttpClient) { }

  url='/data/product.json';

 //this is the link of pipe function details  https://www.tektutorialshub.com/angular/angular-observable-pipe/

 getProductList():Observable<IProduct[]>{
  return this.http.get<IProduct[]>(this.url).pipe(
     map((data) => {
       return data;
     }),
     catchError(this.errorHandler)
   );
 }

 errorHandler(error: HttpErrorResponse) {
  return throwError(error.message || "server error.");
}

}
