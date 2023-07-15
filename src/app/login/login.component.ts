import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class LoginComponent {
  constructor(private router: Router) {}

  username: string = '';
  public password!: string;
  public showPassword: boolean = false;

  redirectToCadastro() {
    this.router.navigate(['/cadastro']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
