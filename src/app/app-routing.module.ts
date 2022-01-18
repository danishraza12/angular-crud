import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowStudentsComponent } from './show-students/show-students.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: ShowStudentsComponent },
  { path: 'addStudent', component: AddStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
