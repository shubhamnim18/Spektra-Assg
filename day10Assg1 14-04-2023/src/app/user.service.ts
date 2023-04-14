import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './userdet/user';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  //retrive
  GetUsers(): Observable<User> {
    return this.http
      .get<User>(this.baseurl + '/user/');
  }

}
