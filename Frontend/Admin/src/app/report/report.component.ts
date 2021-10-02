import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../modules/shared/service/student/student.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(
    public studentService: StudentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getAllReport();
  }

  getAllReport() {
    this.studentService.getAllReport();
  }

}

  
