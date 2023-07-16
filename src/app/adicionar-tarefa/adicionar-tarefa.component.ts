import { Component, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html',
  styleUrls: ['./adicionar-tarefa.component.css'],
})
export class AdicionarTarefaComponent {
  constructor(@Inject(NgbModal) private modalService: NgbModal) {}

  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  closeModal(modal: any) {
    modal.dismiss();
  }
}
