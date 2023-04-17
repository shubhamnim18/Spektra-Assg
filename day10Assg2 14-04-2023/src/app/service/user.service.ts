import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../UserClass/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // POST
  CreateEmployee(data): Observable<User> {
    return this.http
      .post<User>(
        this.baseurl + '/employee/',
        JSON.stringify(data),
        this.httpOptions
      );
  }
  // GET
  GetEmployee(id): Observable<User> {
    return this.http
      .get<User>(this.baseurl + '/employee/' + id)
  }
  // GET
  GetEmployees(): Observable<User> {
    return this.http
      .get<User>(this.baseurl + '/employee/');
  }
  // PUT
  UpdateEmployee(id, data): Observable<User> {
    return this.http
      .put<User>(
        this.baseurl + '/employee/' + id,
        JSON.stringify(data),
        this.httpOptions
      );
  }
  // DELETE
  DeleteEmployee(id) {
    return this.http
      .delete<User>(this.baseurl + '/employee/' + id, this.httpOptions);
  }
}
