import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Route[] = [
  { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'boas-vindas', component: BoasVindasComponent },
  { path: '**', redirectTo: 'boas-vindas' }, // Redireciona para 'boas-vindas' em caso de URL inválida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
