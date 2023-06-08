import { Component,OnInit,NgZone } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  employeeForm: FormGroup;
  ngOnInit() {
    this.addEmployee();
  }
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public userService: UserService
  ) {}
  addEmployee() {
    this.employeeForm = this.fb.group({
      empname: [''],
      empemail: [''],
      dept:[''],
      addr:['']
    });
  }
  submitForm() {
    this.userService.CreateEmployee(this.employeeForm.value).subscribe((res) => {
      console.log('Employee added!');
      this.ngZone.run(() => this.router.navigateByUrl('/user-list'));
    });
  }
}
