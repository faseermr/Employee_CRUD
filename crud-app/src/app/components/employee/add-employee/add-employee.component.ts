import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  employee_name?: string;
  employee_address?: string;

  addEmployee = () => {
    console.log(this.employee_name, this.employee_address);
    this.employeeService
      .create({
        name: this.employee_name,
        address: this.employee_address,
      })
      .subscribe((res) => {
        alert('Employee Successfully Added');
        this.getAllEmployees();
      });
  };

  getAllEmployees = () => {
    this.employeeService.getAll().subscribe((res) => {
      console.log(res);
    });
  };
}