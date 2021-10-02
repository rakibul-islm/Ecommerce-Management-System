import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from '../shared/service/student/student.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    StudentComponent,
    StudentListComponent,
  ],
  exports: [
    StudentComponent,
    StudentListComponent,
  ],
  providers: [
    StudentService
  ]
})
export class StudentsModule { }
