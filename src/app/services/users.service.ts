import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { catchError, Observable} from 'rxjs';
import { User } from '../models/user-class';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor (public httpClient: HttpClient) { 
  }

// HttpClient API get() method => Fetch users list

  getUsers():Observable<User[]>{
  return this.httpClient.get<User[]>(environment.API_URL).pipe(map(response => response));;
  };
}


