import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/service/student/student.service';
import { Student } from 'src/app/model/student.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(
    public studentService: StudentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService.getAllStudent();
  }

  editStudent(student: Student) {
    this.studentService.currentStudent = Object.assign({}, student);
    this.toastrService.warning('Product edited successfully !', 'Product');
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      (data) => {
        this.getAllStudent();
        this.toastrService.error('Product deleted successfully !', 'Product');
      });
  }
}
