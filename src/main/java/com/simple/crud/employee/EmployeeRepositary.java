package com.simple.crud.employee;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepositary extends JpaRepository<Employee,Long> {

}
