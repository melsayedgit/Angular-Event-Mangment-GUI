import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 role?:string;
 url ="http://localhost:9090/api/";
  constructor(private http:HttpClient) { }
  Login(username:string,password:string){
this.http.post<any>(this.url+"login",{username:username,password:password}).subscribe(res=>{
localStorage.setItem("jwt_token",res.token)

})
  
  }
}
