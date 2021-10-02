import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../model/order.model';
import { StudentService } from '../modules/shared/service/student/student.service';

@Component({
  selector: 'app-accepted-orders',
  templateUrl: './accepted-orders.component.html',
  styleUrls: ['./accepted-orders.component.css']
})
export class AcceptedOrdersComponent implements OnInit {

  constructor(
    public studentService: StudentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getAllAcceptedOrder();
  }

  getAllAcceptedOrder() {
    this.studentService.getAllAcceptedOrder();
  }


  deleteAcceptedOrder(id: number) {
    this.studentService.deleteAcceptedOrder(id).subscribe(
      (data) => {
        this.getAllAcceptedOrder();
      });
  }

  deleteAcceptedOrders(id: number) {
    this.deleteAcceptedOrder(id);

    this.toastrService.error('Product Returned !', 'Order');

  }


  createReport(id: number) {
    this.studentService.createReport(id).subscribe(
      (result: Order) => {
        this.deleteAcceptedOrder(id);
        this.studentService.getAllAcceptedOrder();

        this.toastrService.success('Product delivered successfully !', 'Order');
      });
  }

}

