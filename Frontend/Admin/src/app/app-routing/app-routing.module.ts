import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptedOrdersComponent } from '../accepted-orders/accepted-orders.component';
import { AdminComponent } from '../admin/admin.component';
import { LoginComponent } from '../login/login.component';
import { OrderComponent } from '../order/order.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ReportComponent } from '../report/report.component';



const routes: Routes = [

  {
    path: '', component: LoginComponent
  },
  {
    path: 'registration', component: RegistrationComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'order', component: OrderComponent
  },
  {
    path: 'accepted-order', component: AcceptedOrdersComponent
  },
  {
    path: 'report', component: ReportComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
