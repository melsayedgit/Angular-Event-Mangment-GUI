import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Speaker } from './Model/Speaker';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role?: string;
  isloggedin = false;
  username = "";
  url = "http://localhost:9090/api/";

  constructor(private http: HttpClient,private router:Router) {

   }

  Login(username: string, password: string) {
    this.http.post<any>(this.url + "login", { username: username, password: password }).subscribe(res => {
      localStorage.setItem("jwt_token", res.token)
      this.username = username
      this.isloggedin = true;
      this.router.navigateByUrl("/")
      this.role= res.role;
    })
  }
logout(){
  this.isloggedin = false;
  localStorage.removeItem("jwt_token")
  this.username =""
}
 speakrOwnProfInof (){
  return this.http.get<Speaker>(this.url+"Speaker/getownprofile")
  
 }
}
