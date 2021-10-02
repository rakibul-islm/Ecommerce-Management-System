import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/service/student/student.service';
import { Student } from 'src/app/model/student.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    public studentService: StudentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  createOrUpdateStudent(currentStudent: Student) {
    if (currentStudent.id === null) {
      this.createStudent(currentStudent);
    } else {
      this.updateStudent(currentStudent);
    }
  }

  createStudent(std: Student) {
    this.studentService.createStudent(std).subscribe(
      (result: Student) => {
        this.studentService.getAllStudent();

        this.toastrService.success('Product created successfully !', 'Product');
        this.clearStudent();
      });
  }

  updateStudent(std: Student) {
    this.studentService.updateStudent(std).subscribe(
      (result: Student) => {
        this.studentService.getAllStudent();
        this.toastrService.info('Product updated successfully !', 'Product');
        this.clearStudent();
      });
  }

  clearStudent() {
    this.studentService.currentStudent = {
      id: null,
      title: '',
      short_desc: '',
      price: null,
      quantity: null,
      description: '',
      image: '',
      images: '',
      cat_id: null,
    };

  }
}
