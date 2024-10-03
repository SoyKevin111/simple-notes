import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-warning-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-warning-confirmation.component.html',
  styleUrl: './modal-warning-confirmation.component.scss'
})
export class ModalWarningConfirmationComponent {

  @Input() modal_confirmationVisible:boolean = false;
  private _modalService = inject(ModalService);

  closeModalConfirmation(){
    this.modal_confirmationVisible = false
    this._modalService.close();
  }

}
