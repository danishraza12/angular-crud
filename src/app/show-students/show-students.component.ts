import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentsService } from '../Services/students.service';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent implements OnInit {
  public fetchedStudents: any;

  constructor(private studentsService: StudentsService, private router: Router) { }

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe(students => {
        this.fetchedStudents = students
      }
    )
  }
  
  editStudent(student: any) {
    console.log(`Edit button clicked: ${student.name}`)
  }
  
  deleteStudent(studentId: any) {
    console.log(`Delete button clicked: ${studentId}`)
  }

}
