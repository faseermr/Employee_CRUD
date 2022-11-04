package com.simple.crud.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    EmployeeRepositary employeeRepositary;

    @GetMapping
     ResponseEntity<List<Employee>> getAllEmployees(){
       List<Employee> employees = employeeRepositary.findAll();
       return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    ResponseEntity<Employee> getEmployee(@PathVariable("id") long id){
        Employee employee = employeeRepositary.findById(id).orElseThrow();
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }
    @PostMapping
    ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
        employeeRepositary.save(employee);
        return new ResponseEntity<>(employee, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    ResponseEntity<Employee> addEmployee(@PathVariable("id")long id, @RequestBody Employee employee) {
        Employee edit_employee = employeeRepositary.findById(id).orElseThrow();
        edit_employee.setName(employee.getName());
        edit_employee.setAddress(employee.getAddress());
        employeeRepositary.save(edit_employee);
        return new ResponseEntity<>(edit_employee, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<HttpStatus> deleteEmployee(@PathVariable("id") long id){
        employeeRepositary.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
