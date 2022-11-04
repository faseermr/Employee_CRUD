import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee/employee.model';
import { BaseUrl } from '../Http-Common';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${BaseUrl}/employee`);
  }

  getById(id: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${BaseUrl}/employee/${id}`);
  }

  create(employee: Employee): Observable<Employee> {
    return this.http.post(`${BaseUrl}/employee`, employee);
  }

  update(id: number, employee: Employee): Observable<Employee> {
    return this.http.put(`${BaseUrl}/employee/${id}`, employee);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${BaseUrl}/employee/${id}`);
  }
}
