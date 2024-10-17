import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../../../shared/modals/modal.service';
import { ModalViewTaskComponent } from '../../../shared/modals/modal-view-task/modal-view-task.component';
import { Task } from '../../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-todo.component.html',
  styleUrl: './card-todo.component.scss'
})
export class CardTodoComponent {

  //service
  private _modalService = inject(ModalService);

  //Input task
  @Input() task: Task | undefined;

  //Métodos

  openModalViewTask() {
    this._modalService.open(
      ModalViewTaskComponent,
      { modal_viewTaskVisible: true , task: this.task}
    )
  }
}
