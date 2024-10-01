import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-search.component.html',
  styleUrl: './modal-search.component.scss'
})
export class ModalSearchComponent {

  @Input() modal_SearchVisible:boolean = false;
  private _modalService =  inject(ModalService);

  closeModalSearch(){
    this.modal_SearchVisible = false;
    this._modalService.close();
  }
}
