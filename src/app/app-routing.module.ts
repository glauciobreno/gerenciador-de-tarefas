import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';

const routes: Routes = [
  { path: '**', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Rota padrão redireciona para 'login'
    { path: 'login', component: LoginComponent },
  ];
}
