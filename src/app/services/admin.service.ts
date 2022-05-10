import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Student } from '../Model/Student';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
studentUri:string ="http://localhost:9090/api/student"

  constructor(private http:HttpClient) { }
  getallStudents(){
   
  return this.http.get<Student[]>(this.studentUri).pipe(map(studunts=> studunts))
  
  }
}

