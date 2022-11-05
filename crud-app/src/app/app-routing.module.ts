import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './components/employee/employee-details/employee-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'employee', component: EmployeeDetailsComponent },
  { path: 'employee/edit/:id', component: EditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
