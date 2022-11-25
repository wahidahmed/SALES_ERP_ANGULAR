import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Models/uset';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private httpClient:HttpClient) { }

   getAllUsers():Observable<Users[]>{
    return this.httpClient.get<Users[]>('');
  }
}
