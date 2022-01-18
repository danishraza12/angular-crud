import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { StudentsModel, StudentsAdaptor } from '../Models/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient, private adaptor: StudentsAdaptor) { }

  public baseURL = "https://localhost:7175/api";

  // GET Students
  getStudents(): Observable<StudentsModel[]> {
    const url =  `${this.baseURL}/CRUD` 
    return this.http.get(url).pipe(
      map((data: any) => data.map((item: any) => this.adaptor.adapt(item)))
    )
  }

  // POST Students
  addStudent(studentObject: StudentsModel): Observable<any> {
    const url =  `${this.baseURL}/CRUD` 
    return this.http.post(url, studentObject);
  }

  // EDIT Student
  updateStudent(updatedStudent: StudentsModel): Observable<any> {
    const url = `${this.baseURL}/CRUD`
    return this.http.put(url, updatedStudent)
  }

}
