import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../../../shared/modals/modal.service';
import { ModalViewTaskComponent } from '../../../shared/modals/modal-view-task/modal-view-task.component';
import { TaskMock } from '../../../mocks/projects.mock';
 
@Component({
  selector: 'card-todo',
  standalone: true,
  imports: [],
  templateUrl: './card-todo.component.html',
  styleUrl: './card-todo.component.scss'
})
export class CardTodoComponent{


  private _modalService = inject(ModalService);


  openModalViewTask() {
    this._modalService.open(
      ModalViewTaskComponent,
      { modal_viewTaskVisible: true }
    )
  }
}
