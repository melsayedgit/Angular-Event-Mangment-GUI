import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 role?:string;
 url ="http://localhost:9090/api/";
  constructor(private http:HttpClient) { }
  Login(username:string,password:string){
  return this.http.post(this.url+"login",{username:username,password:password})
  

  }
}
