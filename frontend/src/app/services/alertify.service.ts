import { Injectable } from '@angular/core';

import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

success(message:string){
  alertify.success(message);
}

warning(message:string){
 alertify.warning(message);

}

error(message:string){
  alertify.error(message);
 }

 confirm(message:string,okCallBack:(parm?:any)=>any){
  alertify.confirm(message,function(e){
    if(e){okCallBack()}else{}
  });
}


}


