import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee/employee.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employee_id = this.activeRoute.snapshot.paramMap.get('id');
    this.getEmployeeById(this.employee_id);
  }

  employee_name?: string;
  employee_address?: string;
  employee_id: any;
  editEmployee?: Employee;

  getEmployeeById = (id: any) => {
    this.employeeService.getById(id).subscribe((res) => {
      this.editEmployee = res;
      console.log(this.editEmployee);
    });
  };

  updateEmployee = () => {
    console.log(this.editEmployee);
    this.employeeService
      .update(this.editEmployee?.id, {
        name: this.editEmployee?.name,
        address: this.editEmployee?.address,
      })
      .subscribe((res) => {
        alert('Employee updated successfully');
        this.router.navigateByUrl(`employee`);
      });
  };
}
