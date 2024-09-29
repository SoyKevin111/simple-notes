import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'modal-add-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-add-card.component.html',
  styleUrl: './modal-add-card.component.scss'
})
export class ModalAddCardComponent {

  @Input() modal_addTaskVisible: boolean = false;
  private _modalService = inject(ModalService);


  closeModal_addTask() {
    this.modal_addTaskVisible = false;
    this._modalService.close();
  }


  onSubmit(event: Event): void {
    event.preventDefault();
    this.modal_addTaskVisible = false;
    this._modalService.close();
    //servicio para agregar la tarjeta.
  }

}
