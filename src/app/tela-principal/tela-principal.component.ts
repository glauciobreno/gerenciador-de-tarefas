import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdicionarTarefaComponent } from '../adicionar-tarefa/adicionar-tarefa.component';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css'],
})
export class TelaPrincipalComponent {
  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalService.open(AdicionarTarefaComponent);
  }

  closeModal(modal: any) {
    modal.dismiss();
  }

  emProgressoTarefa: any[] = [
    // Array inicial de tarefas em progresso
  ];

  mostrarMaisTarefas: boolean = false;

  adicionarTarefas(): void {
    // fazer uma chamada à API
  }

  exibirMaisTarefas(): void {
    this.mostrarMaisTarefas = true;
  }

  tarefas: any[] = [
    {
      titulo: 'Desafio de design',
      descricao: 'Descrição da Tarefa Descrição da Tarefa Descrição da Tarefa',
      tipo: 'bg-primary-trf',
    },
    {
      titulo: 'Entrevista de emprego',
      descricao: 'Descrição Descrição Descrição Descrição Descrição',
      tipo: 'bg-secondary-trf',
    },
    {
      titulo: 'Tarefa 3',
      descricao: 'Descrição da Tarefa 3',
      tipo: 'bg-warning-trf',
    },
    {
      titulo: 'Tarefa 4',
      descricao: 'Descrição da Tarefa 4',
      tipo: 'bg-danger-trf',
    },
  ];

  emProgressoTarefas: any[] = [
    {
      titulo: 'Tarefa em Progresso 23',
      descricao: 'Descrição da Tarefa em Progresso 1',
      completo: 97,
      tipo: 'bg-warning-trf',
    },
    {
      titulo: 'Tarefa em Progresso 6',
      descricao: 'Descrição da Tarefa em Progresso 2',
      completo: 42,
      tipo: 'bg-secondary-trf',
    },
    {
      titulo: 'Tarefa em Progresso 6',
      descricao: 'Descrição da Tarefa em Progresso 2',
      completo: 75,
      tipo: 'bg-warning-trf',
    },
    {
      titulo: 'Tarefa em Progresso 6',
      descricao: 'Descrição da Tarefa em Progresso 2',
      completo: 42,
      tipo: 'bg-secondary-trf',
    },
    {
      titulo: 'Tarefa em Progresso 6',
      descricao: 'Descrição da Tarefa em Progresso 2',
      completo: 75,
      tipo: 'bg-warning-trf',
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
