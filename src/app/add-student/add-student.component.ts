import { Component, OnInit } from '@angular/core';

import { StudentsModel } from '../Models/students.model';
import { StudentsService } from '../Services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  cities = ['Karachi', 'Lahore', 'Islamabad', 'Multan', 'Quetta'];
  genders = ['Male', 'Female'];
  degreeStatusList = ['Complete', 'Incomplete', 'Frozen'];
  model = new StudentsModel('', '', '', '', '', '', '', '', '', '', '');

  constructor(public studentsService: StudentsService) { }

  ngOnInit(): void { }

  public postResponse: any;

  // condition = true;
  submitted = false;

  // On form submit
  onSubmit() { 
    // this.submitted = true;

    // Call add student service
    this.studentsService.addStudent(this.model).subscribe(data => {
      this.postResponse = data;
    })
  }

}
