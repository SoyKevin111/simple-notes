import { Component, inject, Input } from '@angular/core';
import { ManageProjectService } from '../../../services/manage-project.service';

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

  //Inputs
  @Input() titleProject:string = '';
  @Input() descriptionProject:string = '';
  @Input() idProject:string = '';

  //Métodos
  onClick(event: MouseEvent) {
    event.stopPropagation(); // Detiene la propagación del evento
  }

  //Delete Project
  deleteProject(){
    this._manageProjectService.deleteProject(this.idProject);
  }

}
