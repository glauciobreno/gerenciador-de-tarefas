import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css'],
})
export class TelaPrincipalComponent {
  tarefas: any[] = [
    {
      titulo: 'Desafio de design',
      descricao: 'Descrição da Tarefa Descrição da Tarefa Descrição da Tarefa',
      tipo: 'bg-primary',
    },
    {
      titulo: 'Entrevista de emprego',
      descricao: 'Descrição Descrição Descrição Descrição Descrição',
      tipo: 'bg-secondary',
    },
    {
      titulo: 'Tarefa 3',
      descricao: 'Descrição da Tarefa 3',
      tipo: 'bg-warning',
    },
    {
      titulo: 'Tarefa 4',
      descricao: 'Descrição da Tarefa 4',
      tipo: 'bg-danger',
    },
  ];

  emProgressoTarefa: any[] = [
    {
      titulo: 'Tarefa em Progresso 23',
      descricao: 'Descrição da Tarefa em Progresso 1',
      completo: 97,
    },
    {
      titulo: 'Tarefa em Progresso 6',
      descricao: 'Descrição da Tarefa em Progresso 2',
      completo: 42,
    },
    {
      titulo: 'Tarefa em Progresso 6',
      descricao: 'Descrição da Tarefa em Progresso 2',
      completo: 75,
    },
    {
      titulo: 'Tarefa em Progresso5',
      descricao: 'Descrição da Tarefa em Progresso 2',
      completo: 55,
    },
    {
      titulo: 'Tarefa em Progresso 4',
      descricao: 'Descrição da Tarefa em Progresso 2',
      completo: 32,
    },
    {
      titulo: 'Tarefa em Progresso 3',
      descricao: 'Descrição da Tarefa em Progresso 2',
      completo: 5,
    },
  ];

  tarefasCompletas: any[] = [
    {
      titulo: 'Tarefa Concluída 1',
      descricao: 'Descrição da Tarefa Concluída 1',
    },
    {
      titulo: 'Tarefa Concluída 2',
      descricao: 'Descrição da Tarefa Concluída 2',
    },
  ];

  showAllTasks() {
    console.log('Ver todos os cards de tarefas a fazer');
  }

  showInProgressTasks() {
    console.log('Ver todos os cards de tarefas em progresso');
  }
}
