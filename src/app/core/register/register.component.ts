import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
// public form:FormGroup;

  constructor( private fb:FormBuilder) {
// this.form = this.fb.group({
//   username:"",
//   password:"",
//   email:"",
//   address:{}})
}
submit(){
  
}
  ngOnInit(): void {
  }

}
