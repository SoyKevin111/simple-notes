import { Component, inject, Input } from '@angular/core';
import { ManageProjectService } from '../../../services/manage-project.service';
import { ModalService } from '../../modals/modal.service';
import { ModalEditProjectComponent } from '../../modals/modal-edit-project/modal-edit-project.component';

@Component({
  selector: 'popover-info-project',
  standalone: true,
  imports: [],
  templateUrl: './popover-info-project.component.html',
  styleUrl: './popover-info-project.component.scss'
})
export class PopoverInfoProjectComponent {

  //Servicio
  private _manageProjectService = inject(ManageProjectService);
  private _modalService = inject(ModalService); //enviar id al modal

  //Inputs
  @Input() titleProject: string = '';
  @Input() descriptionProject: string = '';
  @Input() idProject: string = '';

  //Métodos
  onClick(event: MouseEvent) {
    event.stopPropagation(); // Detiene la propagación del evento
  }

  //Delete Project
  deleteProject() {
    this._manageProjectService.deleteProject(this.idProject);
  }

  openModal_editProject() {
    this._modalService.open(ModalEditProjectComponent, { modal_editProjectVisible: true, idProject: this.idProject });
  }

}
