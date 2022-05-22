import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/Model/Student';
import { AdminService } from 'src/app/services/admin.service';
import {Speaker} from "../../Model/Speaker";
import {Event as itiEvent} from "../../Model/Event";
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  public form:FormGroup;
  public mainSpeaker:Speaker = {_id:0,username:"new",email:"new@website.com", address:{city:"city",street:"street",building:"building"} };
  public Speakers:Speaker[] =[];
  public otherSpeakers:Speaker[] =[];
  public students:Student[]=[];
  public selectedStudent:Student[]=[];
  public events:itiEvent[]=[];

  constructor(  private fb:FormBuilder, private admin:AdminService) {
    this.form = this.fb.group( {
      title:["",Validators.required],
      date:"",
      mainSpeaker:"",
      otherSpeakers:[],
      students:[],
    });


   }

  ngOnInit(): void {
    this.admin.getallSpeakers().subscribe(speakrs=>{
      this.Speakers =speakrs;

    });
    this.admin.getallStudents().subscribe(sts=>{
      this.students=sts;

    });
    this.admin.getallEvents().subscribe(eves=>{
      this.events=eves;

    });
  }

  submit(){
  this.admin.CreateEvent(this.form.getRawValue())
  this.admin.getallEvents().subscribe(eves=>{
    this.events=eves;

  });
  }
}
