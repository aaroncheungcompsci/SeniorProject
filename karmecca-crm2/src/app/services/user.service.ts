import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data : User[];
  private serviceUrl =
  'http://localhost:3001/api/customers';


  constructor(private http: HttpClient) { }


  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }
  addUser(user: User) {
    console.log(user);
    return this.http.post(this.serviceUrl, user);
  }
  deleteUser(id: String)
  {
    const url = `${this.serviceUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url)
  }
  
}

