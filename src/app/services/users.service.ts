import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RegisterForm } from '../auth/interfaces/registerForm';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../auth/interfaces/loginForm';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router,) { }

  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    return this.http.get(`${baseURL}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(tap((response: any) => {
      localStorage.setItem('token', response.token)
    }), map(response => true));
  }

  createUsers(formData: RegisterForm) {
    return this.http.post(`${baseURL}/users`, formData).pipe(tap((response: any) => {
      //save token local storege
      localStorage.setItem('token', response.token)
    }));
  }
  login(formData: LoginForm) {
    return this.http.post(`${baseURL}/login`, formData).pipe(tap((response: any) => {
      //save token local storege
      localStorage.setItem('token', response.token)
    }));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }
}
