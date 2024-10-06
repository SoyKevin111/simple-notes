import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ToastService } from '../../shared/toasts/toast.service';
import { ToastComponent } from '../../shared/toasts/toast/toast.component';
import { dataProjectMock, ProjectMock, TaskMock } from '../../mocks/projects.mock';
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
  projects: ProjectMock[] = dataProjectMock;

  //servicio mock



  nameItemSelected: string = '';
  idItemSelected: string = '';


  //servicio
  private _toastService = inject(ToastService);

  isSelected: boolean = false;
  isSelectedExport: boolean = false;

  ngOnInit(): void {
    this.nameItemSelected = 'choose your project'
  }


  //?Selected Project
  toggleSelectedProject() {
    this.isSelected = !this.isSelected; //close selected project

  }

  itemProjectSelected(name: string, id: string) {
    this.nameItemSelected = name;
    this.idItemSelected = id;
    this.toggleSelectedProject(); //close selected project
  }

  //?Selected Export Project
  toggleSelectedExport() {
    this.isSelectedExport = !this.isSelectedExport;
  }

  selectExportText() {
    this.toggleSelectedExport();
    this._toastService.open(ToastComponent, { stateToast: true, typeToast: 'exportTxt' })
  }
  selectExportJson() {
    this.toggleSelectedExport();
    this._toastService.open(ToastComponent, { stateToast: true, typeToast: 'exportJson' })
  }



}
