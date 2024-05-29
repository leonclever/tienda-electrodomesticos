import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.register(this.name, this.email, this.password).subscribe(response => {
      if (response) {
        this.router.navigate(['/login']);
      } else {
        alert('Registration failed');
      }
    });
  }
}
