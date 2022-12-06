import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

constructor(private httpClient:HttpClient) { }

AddNewUser(user:Users){
  console.log(user)
 return this.httpClient.post("http://localhost:5286/api/UserInfo/Register",user);
}

}
