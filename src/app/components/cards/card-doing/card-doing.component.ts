import { Component, inject, Input } from '@angular/core';
import { ToastService } from '../../../shared/toasts/toast.service';
import { ToastComponent } from '../../../shared/toasts/toast/toast.component';
import { Task } from '../../../models/task.model';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../shared/modals/modal.service';
import { ModalViewTaskComponent } from '../../../shared/modals/modal-view-task/modal-view-task.component';

@Component({
  selector: 'card-doing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-doing.component.html',
  styleUrl: './card-doing.component.scss'
})
export class CardDoingComponent {

  //service
  private _toastService = inject(ToastService);
  private _modalService = inject(ModalService);

  //Input
  @Input() task: Task | undefined;

  //Métodos

  finish() {
    this.openToastfinish();
  }

  openToastfinish() {
    this._toastService.open(ToastComponent, { stateToast: true, typeToast: 'completeTask' });
  }

  openModalViewTask() {
    this._modalService.open(ModalViewTaskComponent,
      { modal_viewTaskVisible: true, task: this.task }
    )
  }

}
