import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Speaker } from 'src/app/Model/Speaker';
import { Student } from 'src/app/Model/Student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
 speaker!:Speaker;
 student!:Student;
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    if (this.auth.role=="speaker") {
      this.auth.speakrOwnProfInof().subscribe((sp)=>{
        this.speaker = sp;
        console.log(this.speaker)
      
      })
      console.log(this.speaker,this.auth.role);
      
    }
  }

}
