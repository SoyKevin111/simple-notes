import { Component, inject, OnInit } from '@angular/core';
import { ModalService } from '../../shared/modals/modal.service';
import { ModalNewProjectComponent } from '../../shared/modals/modal-new-project/modal-new-project.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  //servicio modal new project
  private _newProjectModal = inject(ModalService);

  openModalNewProject() {
    this._newProjectModal.open(ModalNewProjectComponent, { modal_newProjectVisible: true });
  }

}
