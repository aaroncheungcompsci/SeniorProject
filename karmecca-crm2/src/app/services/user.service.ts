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
  
  
}

