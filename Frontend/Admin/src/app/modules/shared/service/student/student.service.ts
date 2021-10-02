import { Injectable } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { Order } from 'src/app/model/order.model';
import { AcceptedOrder } from 'src/app/model/acceptedOrders';
import { Report } from 'src/app/model/report.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService {
  allStudent: Student[];
  allOrder: Order[];
  allAcceptedOrder: AcceptedOrder[];
  allReport: Report[];
  baseUrl: string = 'http://localhost:3000/';

  currentStudent: Student = {
    title: '',
    short_desc: '',
    price: null,
    quantity: null,
    description: '',
    id:null,
    image:'',
    images:'',
    cat_id:null,
  }

  currentOrder: Order = {
    id:null,
    order_id:null,
    product_id:null,
    quantity:null
 
  }



  constructor(
    private http: HttpClient,
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  getAllStudent() {
    this.ngxSpinnerService.show();
    return this.http.get<Student[]>(this.baseUrl+ 'products', headerOption).subscribe(
      (data: Student[]) => {
        this.allStudent = data;
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
      });
  }

  getAllOrder() {
    this.ngxSpinnerService.show();
    return this.http.get<Order[]>(this.baseUrl+ 'order', headerOption).subscribe(
      (data: Order[]) => {
        this.allOrder = data;
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
      });
  }


  getAllAcceptedOrder() {
    this.ngxSpinnerService.show();
    return this.http.get<AcceptedOrder[]>(this.baseUrl+ 'accepted_order', headerOption).subscribe(
      (data: AcceptedOrder[]) => {
        this.allAcceptedOrder = data;
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
      });
  }


  getAllReport() {
    this.ngxSpinnerService.show();
    return this.http.get<Report[]>(this.baseUrl+ 'report', headerOption).subscribe(
      (data: Report[]) => {
        this.allReport = data;
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
      });
  }

  deleteStudent(id: Number): Observable<Student> {
    return this.http.delete<Student>(this.baseUrl + 'products/' + id, headerOption);
  }


  deleteOrder(id: Number): Observable<Order> {
    return this.http.delete<Order>(this.baseUrl + 'order/' + id, headerOption);
  }

  deleteAcceptedOrder(id: Number): Observable<Order> {
    return this.http.delete<Order>(this.baseUrl + 'accepted_order/' + id, headerOption);
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl+ 'products/', student, headerOption);
  }

  createAccepted_order(id: Number): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'accepted_order/'+ id, headerOption);
  }

  createReport(id: Number): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'report/'+ id, headerOption);
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.baseUrl + 'products/' + student.id, student, headerOption);
  }
}
