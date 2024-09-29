import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastService } from '../../shared/toasts/toast.service';
import { ToastExportProjectComponent } from '../../shared/toasts/toast-export-project/toast-export-project.component';





@Component({
  selector: 'app-project-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-menu.component.html',
  styleUrl: './project-menu.component.scss'
})
export class ProjectMenuComponent {

  //servicio
  private _toastService = inject(ToastService);

  isSelected: boolean = false;
  isSelectedExport: boolean = false;



  //?Selected Project
  toggleSelectedProject() {
    this.isSelected = !this.isSelected; //close selected project
  }

  itemProjectSelected(){
    this.toggleSelectedProject(); //close selected project
  }

  //?Selected Export Project
  toggleSelectedExport() {
    this.isSelectedExport = !this.isSelectedExport;
  }

  selectExportText() {
    this.toggleSelectedExport();
    this._toastService.open(ToastExportProjectComponent,{stateExportToast: true, dataExportToast: 'Project saved to Text.'})
  }
  selectExportJson() {
    this.toggleSelectedExport();
    this._toastService.open(ToastExportProjectComponent,{stateExportToast: true, dataExportToast: 'Project saved to Json.'})
  }



}
