import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AlertifyService } from "./alertify.service";

@Injectable({
  providedIn:'root'
})

export class HttpErrorInterceptorService implements HttpInterceptor{

   constructor(private alertifyService:AlertifyService){

   }
  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log('http request started');
    return next.handle(req).pipe(
      catchError((err:HttpErrorResponse)=>{
        console.log('err',err);
        this.alertifyService.error('error:'+err.error+'');
        return throwError(err.error);
      })
    );
  }

}
