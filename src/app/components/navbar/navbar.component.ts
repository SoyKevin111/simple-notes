import { Component, inject } from '@angular/core';
import { ModalService } from '../../shared/modals/modal.service';
import { ModalNewProjectComponent } from '../../shared/modals/modal-new-project/modal-new-project.component';
import { ModalSearchComponent } from '../../shared/modals/modal-search/modal-search.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  //servicio
  private _modalService = inject(ModalService);


  //Métodos

  openModalNewProject() {
    this._modalService.open(ModalNewProjectComponent, { modal_newProjectVisible: true });
  }

  openModalSearch() {
    this._modalService.open(ModalSearchComponent, { modal_SearchVisible: true });
  }

}
