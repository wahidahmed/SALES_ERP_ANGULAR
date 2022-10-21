import { AbstractControl } from "@angular/forms";

export class CustomValidatiors{
       static emailDomain(domainName:string){

          return((control: AbstractControl): { [key: string]: any } | null=> {

              if(control.value){
                console.log('sub',control)
                const email:string=control.value;
                const domian=email.substring(email.lastIndexOf('@')+1);
                if(domian.toLocaleLowerCase()===domainName.toLocaleLowerCase()){
                  return null;
                }
                else{
                return {'emailDomain':true};
                }
              }
              else{
                return null
              }
        })

      }
}
