import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee=[
    {id:101,name:'Shubham',dept:'Developer',email:'shubham@gmail.com'},
    {id:102,name:'Rajat',dept:'Technician',email:'rajat@gmail.com'},
    {id:103,name:'Rakesh',dept:'Testing',email:'rakesh@gmail.com'},
    {id:104,name:'Shrinath',dept:'Developer',email:'shrinath@gmail.com'},
    {id:105,name:'Suraj',dept:'DevOps',email:'suraj@gmail.com'},
    {id:106,name:'Omkar',dept:'Developer',email:'omkar@gmail.com'},
  ]

  constructor() { }

  getEmployee(){
    return this.employee;
  }

}
