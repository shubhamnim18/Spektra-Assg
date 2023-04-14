import { Component,OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './userdet/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'day10Assg1';
  userdetails:User;
  constructor(private user:UserService){}

  ngOnInit(): void {
      this.user.GetUsers().subscribe(data=>{
        this.userdetails=data
      });
  }
}
