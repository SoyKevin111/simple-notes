import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ToastService } from '../../shared/toasts/toast.service';
import { ToastComponent } from '../../shared/toasts/toast/toast.component';
import { dataProjectMock, ProjectMock } from '../../mocks/projects.mock';
import { PopoverInfoProjectComponent } from '../../shared/popovers/popover-info-project/popover-info-project.component';

@Component({
  selector: 'app-project-menu',
  standalone: true,
  imports: [CommonModule, PopoverInfoProjectComponent],
  templateUrl: './project-menu.component.html',
  styleUrl: './project-menu.component.scss'
})
export class ProjectMenuComponent implements OnInit {

  
  //simulation item project
  projects:ProjectMock[] = []



  nameItemSelected:string = '';

  //servicio
  private _toastService = inject(ToastService);

  isSelected: boolean = false;
  isSelectedExport: boolean = false;

  ngOnInit(): void {
      this.nameItemSelected = 'choose your project'
      this.getProjectsMock();
  }


  //?Selected Project
  toggleSelectedProject() {
    this.isSelected = !this.isSelected; //close selected project

  }

  itemProjectSelected(item:string){
    this.nameItemSelected = item;
    this.toggleSelectedProject(); //close selected project
  }

  //?Selected Export Project
  toggleSelectedExport() {
    this.isSelectedExport = !this.isSelectedExport;
  }

  selectExportText() {
    this.toggleSelectedExport();
    this._toastService.open(ToastComponent,{stateToast: true, typeToast: 'exportTxt'})
  }
  selectExportJson() {
    this.toggleSelectedExport();
    this._toastService.open(ToastComponent,{stateToast: true, typeToast: 'exportJson'})
  }




  //Prueba de datos falsos
  getProjectsMock(){
    this.projects = dataProjectMock
  }

}
