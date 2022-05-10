import { Component, OnInit } from '@angular/core';
import { Student } from '../Model/Student';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  students:Student[]=[];
  constructor(private admin :AdminService) { }

  ngOnInit(): void {
    this.admin.getallStudents().subscribe(students=>this.students = students)
   
  }

}
