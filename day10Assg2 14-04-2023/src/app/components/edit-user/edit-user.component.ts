import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  EmployeeList: any = [];
  updateEmployee: FormGroup;

  ngOnInit() {
    this.updateForm()
  }
  constructor(
    private actRoute: ActivatedRoute,
    public userService: UserService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.userService.GetEmployee(id).subscribe((data) => {
      this.updateEmployee = this.fb.group({
        empname: [data.empname],
        empemail: [data.empemail],
        dept: [data.dept],
        addr:[data.addr]
      })
    })
  }
  updateForm() {
    this.updateEmployee = this.fb.group({
      empname: [''],
      empemail: [''],
      dept: [''],
      addr:['']
    })
  }
  submitForm() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.userService.UpdateEmployee(id, this.updateEmployee.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/user-list'))
    })
  }
}
