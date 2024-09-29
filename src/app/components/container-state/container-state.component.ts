import { Component, Input } from '@angular/core';
import { ListCardStateComponent } from '../list-card-state/list-card-state.component';
import { ModalAddCardComponent } from "../../shared/modals/modal-add-card/modal-add-card.component";

@Component({
  selector: 'app-container-state',
  standalone: true,
  imports: [ListCardStateComponent, ModalAddCardComponent],
  templateUrl: './container-state.component.html',
  styleUrl: './container-state.component.scss'
})
export class ContainerStateComponent {
  
  


}
