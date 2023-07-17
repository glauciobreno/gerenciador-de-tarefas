import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TelaPrincipalComponent } from './tarefas/tela-principal/tela-principal.component';
import { AdicionarTarefaComponent } from './tarefas/adicionar-tarefa/adicionar-tarefa.component';

const routes: Route[] = [
  { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },
  { path: 'boas-vindas', component: BoasVindasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'tarefas', component: TelaPrincipalComponent },
  { path: 'tarefas/nova-tarefa', component: AdicionarTarefaComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
