import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../modal.service';
import { CommonModule } from '@angular/common';
import { ManageTaskService } from '../../../services/manage-task.service';

@Component({
  selector: 'app-modal-warning-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-warning-confirmation.component.html',
  styleUrl: './modal-warning-confirmation.component.scss'
})
export class ModalWarningConfirmationComponent {

  //Inputs
  @Input() modal_confirmationVisible: boolean = false;
  @Input() type: string = '';

  //Servicio
  private _modalService = inject(ModalService);
  private _manageTaskService = inject(ManageTaskService);

  allRemoveItems() {
    if (this.type === 'allRemove') {
      this._manageTaskService.removeAllTasks();
    }
    this.closeModalConfirmation();
  }

  //Métodos

  closeModalConfirmation() {
    this.modal_confirmationVisible = false
    this._modalService.close();
  }

}
