import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
  employee:any[] | undefined;
  constructor(private employeeService:EmployeeService){}
  displayEmployee(){
    this.employee=this.employeeService.getEmployee();
  }

}
