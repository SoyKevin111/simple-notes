import { Component, inject, Input } from '@angular/core';
import { ToastService } from '../../../shared/toasts/toast.service';
import { ToastComponent } from '../../../shared/toasts/toast/toast.component';
import { Task } from '../../../models/task.model';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../shared/modals/modal.service';
import { ModalViewTaskComponent } from '../../../shared/modals/modal-view-task/modal-view-task.component';

@Component({
  selector: 'card-done',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-done.component.html',
  styleUrl: './card-done.component.scss'
})
export class CardDoneComponent {


  //service
  private _toastService = inject(ToastService);
  private _modalService = inject(ModalService);
  
  //Input
  @Input() task: Task | undefined;

  //Métodos

  openToastDel() {
    this._toastService.open(ToastComponent, { stateToast: true, typeToast: 'deleteTask' });
  }

  openModalViewTask(){
    this._modalService.open(ModalViewTaskComponent,
      { modal_viewTaskVisible: true, task: this.task }
    )
  }
}
