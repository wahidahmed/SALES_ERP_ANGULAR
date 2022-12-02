import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private httpClient:HttpClient) { }

   getAllUsers():Observable<Users[]>{

    return this.httpClient.get<Users[]>('http://localhost:5286/api/UserInfo/GetUsers');
  }

  authUser(user:Users){
    console.log(user)
   return this.httpClient.post("http://localhost:5286/api/UserInfo/Login",user);
  }
}
