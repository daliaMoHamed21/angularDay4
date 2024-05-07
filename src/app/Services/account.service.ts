import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private router: Router) {}

  baseURL: string = 'http://localhost:3002/users';

  token: boolean = false;
  userRole: string | null = null;
  userData: any; 

  Login(email: string, password: string) {
    this.http
      .get(`${this.baseURL}?email=${email}&password=${password}`)
      .subscribe((data: any) => {
        console.log(data);
        if (Array.isArray(data) && data.length > 0) {
          this.token = true;
          this.userRole = data[0].role;
        }
      });
  }

  Register(user: any) { 
    user.role = "user";
    this.http.post(this.baseURL, user).subscribe(
      response => {
        console.log("Registration successful:", response);
      },
      error => {
        console.error("Registration failed:", error);
      }
    );
  }

  Logout() {
    this.token = false;
    this.router.navigate(['/home']);
  }

  isLogin() {
    return this.token;
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  isUser(): boolean {
    return this.userRole === 'user';
  }
}
