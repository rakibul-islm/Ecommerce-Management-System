import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StudentsModule } from './modules/students/students.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { OrderComponent } from './order/order.component';
import { AcceptedOrdersComponent } from './accepted-orders/accepted-orders.component';
import { ReportComponent } from './report/report.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    OrderComponent,
    AcceptedOrdersComponent,
    ReportComponent
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    StudentsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    AppRoutingModule,
  ],

  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
