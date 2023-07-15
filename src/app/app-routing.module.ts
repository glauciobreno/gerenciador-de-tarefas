import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

const routes: Route[] = [
  { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'principal', component: TelaPrincipalComponent },
  { path: 'boas-vindas', component: BoasVindasComponent },
  { path: '**', redirectTo: 'login' }, // Redireciona para 'boas-vindas' em caso de URL inválida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
