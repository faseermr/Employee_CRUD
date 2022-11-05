import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee/employee.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employees?: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees = () => {
    this.employeeService.getAll().subscribe((res) => {
      this.employees = res;
      // console.log(this.employees);
    });
  };

  deleteEmployee = (id: number) => {
    let option = window.confirm('Are you want to delete');
    if (option) {
      this.employeeService.delete(id).subscribe((res) => {
        this.getAllEmployees();
      });
    }
  };

  editEmployee = (id: number) => {
    this.router.navigateByUrl(`employee/edit/${id}`);
  };
}
