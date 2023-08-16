import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl=environment.apiUrl; // khi de la https thi mot vai loi khi dang nhap se khong hien thi ma chi hien thi la OK thoi
  private currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any){ 
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  Register(model: any){
    return this.http.post<User>(this.baseUrl + 'account/register',model).pipe(
       map( (user:User) => {
        if (user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
       })
    )
  }
  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }
 
  logout() {
    localStorage.removeItem("user");
    this.currentUserSource.next(null);
  }
}
