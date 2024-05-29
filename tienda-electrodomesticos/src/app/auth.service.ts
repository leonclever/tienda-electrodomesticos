import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'test@test.com', password: '12345', name: 'Test User' }
  ];
  private currentUser: any;

  login(email: string, password: string): Observable<boolean> {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      return of(true);
    } else {
      return of(false);
    }
  }

  register(name: string, email: string, password: string): Observable<boolean> {
    const userExists = this.users.some(u => u.email === email);
    if (!userExists) {
      this.users.push({ name, email, password });
      return of(true);
    } else {
      return of(false);
    }
  }

  getCurrentUser() {
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
  }
}
