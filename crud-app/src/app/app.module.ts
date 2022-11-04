import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './components/employee/employee-details/employee-details.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';

@NgModule({
  declarations: [AppComponent, EmployeeDetailsComponent, AddEmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}