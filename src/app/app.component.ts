import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gerenciador-de-tarefas';
  constructor(private router: Router) {}

  isPaginaLoginCadastro(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/login' || currentRoute === '/cadastro';
  }
}
