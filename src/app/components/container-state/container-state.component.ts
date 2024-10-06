import { Component, inject, Input, OnInit } from '@angular/core';
import { ListCardStateComponent } from '../list-card-state/list-card-state.component';
import { ModalAddCardComponent } from "../../shared/modals/modal-add-card/modal-add-card.component";
import { ModalService } from '../../shared/modals/modal.service';
import { ModalWarningConfirmationComponent } from '../../shared/modals/modal-warning-confirmation/modal-warning-confirmation.component';
import { TaskMock } from '../../mocks/projects.mock';

@Component({
  selector: 'app-container-state',
  standalone: true,
  imports: [ListCardStateComponent],
  templateUrl: './container-state.component.html',
  styleUrl: './container-state.component.scss'
})
export class ContainerStateComponent {

  //servicio para invocar al modal:
  private _modalService = inject(ModalService);

  Tasks: TaskMock[] = [];



  openAddCard() {
    this._modalService.open(ModalAddCardComponent, { modal_addTaskVisible: true });
  }


  openModalConfirmation() {
    this._modalService.open(ModalWarningConfirmationComponent, { modal_confirmationVisible: true })
  }


}
