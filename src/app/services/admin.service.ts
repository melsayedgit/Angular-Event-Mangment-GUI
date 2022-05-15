import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Speaker } from '../Model/Speaker';
import { Student } from '../Model/Student';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
studentUri:string ="http://localhost:9090/api/student/"
SpeakerUri:string ="http://localhost:9090/api/speaker/"
  constructor(private http:HttpClient) { }
  getallStudents(){
   
  return this.http.get<Student[]>(this.studentUri).pipe(map(studunts=> studunts))
  }
  
  removeStudent(id:number){
    this.http.delete(this.studentUri+id).subscribe();
  }
  editStudent(id:number,newEmail:string){
    return this.http.put(this.studentUri+id,{email:newEmail})

  }
//speaker
getallSpeakers(){
   
  return this.http.get<Speaker[]>(this.studentUri)
  }
  
  removeSpeaker(id:number){
    this.http.delete(this.SpeakerUri+id).subscribe();
  }
  editSpeaker(id:number,newEmail:string,address:any){
    return this.http.put(this.SpeakerUri+id,{email:newEmail,address:address})

  }


}

