import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
public form:FormGroup;
roles:any[]
selectedRole: string = "student";
url ="http://localhost:9090/api/";
@ViewChild("address") addressDiv!:ElementRef;


  constructor( 
    private fb:FormBuilder,
    private http:HttpClient
    ) {


this.roles = [{label: 'Student', value: 'student'}, {label: 'Speaker', value: 'speaker'},];
this.form = this.fb.group( {
  username:["",Validators.required],
  password:"",
  email:"",
  address:this.fb.group(
    {
      city:"",
      street:"",
      building:""
    }
    )})
}



submit(){
  
  if (this.selectedRole = "student") {
    this.http.post(this.url+"student/register",this.form.getRawValue())
    .subscribe(res=>{
      console.log(res);
    })
  } else {

  }
}
updateGUI(){
if (this.selectedRole!="student") 
{
  this.addressDiv.nativeElement.style = "display:none" 
  

} else {
  this.addressDiv.nativeElement.style = "display:block" 
}
}


    
  
  ngOnInit(): void {
  }

}
