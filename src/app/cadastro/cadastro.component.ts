import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  constructor(private router: Router) {}

  username: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
