import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowStudentsComponent } from './show-students/show-students.component';

import { HttpClientModule } from '@angular/common/http';
import { AddStudentComponent } from './add-student/add-student.component';
import { NavbarComponent } from './show-students/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowStudentsComponent,
    AddStudentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
