import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../model/order.model';
import { StudentService } from '../modules/shared/service/student/student.service';




@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    public studentService: StudentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getAllOrder();
  }

  getAllOrder() {
    this.studentService.getAllOrder();
  }


  deleteOrder(id: number) {
    this.studentService.deleteOrder(id).subscribe(
      (data) => {
        this.getAllOrder();
      });
  }

  deleteOrders(id: number) {
        this.deleteOrder(id);
        this.toastrService.error('Order Rejected successfully !', 'Order');
      
  }


  createAccepted_order(id: number) {
    this.studentService.createAccepted_order(id).subscribe(
      (result: Order) => {
        this.deleteOrder(id);
        this.studentService.getAllOrder();

        this.toastrService.success('Order Accepted successfully !', 'Order');
      });
  }
}
