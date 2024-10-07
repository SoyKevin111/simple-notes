import { Component, inject} from '@angular/core';
import { ModalService } from '../../../shared/modals/modal.service';
import { ModalViewTaskComponent } from '../../../shared/modals/modal-view-task/modal-view-task.component';
 
@Component({
  selector: 'card-todo',
  standalone: true,
  imports: [],
  templateUrl: './card-todo.component.html',
  styleUrl: './card-todo.component.scss'
})
export class CardTodoComponent{

  //service
  private _modalService = inject(ModalService);


  //Métodos

  openModalViewTask() {
    this._modalService.open(
      ModalViewTaskComponent,
      { modal_viewTaskVisible: true }
    )
  }
}
