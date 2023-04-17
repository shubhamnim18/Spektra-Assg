import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  EmployeesList: any = [];

  ngOnInit() {
    this.loadEmployees();
  }
  constructor(
    public userService: UserService
  ){ }
   // Issues list
   loadEmployees() {
    return this.userService.GetEmployees().subscribe((data: {}) => {
      this.EmployeesList = data;
    })
  }
    // Delete issue
    deleteEmployee(data){
      var index = index = this.EmployeesList.map(x => {return x.empname}).indexOf(data.empname);
       return this.userService.DeleteEmployee(data.id).subscribe(res => {
        this.EmployeesList.splice(index, 1)
         console.log('Employee deleted!')
       })
    }

}
