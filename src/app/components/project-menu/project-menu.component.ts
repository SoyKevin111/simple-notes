import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ToastService } from '../../shared/toasts/toast.service';
import { ToastComponent } from '../../shared/toasts/toast/toast.component';
import { PopoverInfoProjectComponent } from '../../shared/popovers/popover-info-project/popover-info-project.component';
import { projectsDefault } from '../../mocks/projects.mock';
import { Project } from '../../models/project.model';
import { ManageProjectService } from '../../services/manage-project.service';

@Component({
  selector: 'app-project-menu',
  standalone: true,
  imports: [CommonModule, PopoverInfoProjectComponent],
  templateUrl: './project-menu.component.html',
  styleUrl: './project-menu.component.scss'
})
export class ProjectMenuComponent implements OnInit {

  //uso
  projects: Project[] = [];

  //servicio
  private _toastService = inject(ToastService);
  private _manageProjectService = inject(ManageProjectService);

  //
  isSelected: boolean = false;
  isSelectedExport: boolean = false;
  //
  nameItemSelected: string = '';
  idItemSelected: string = '';


  ngOnInit(): void {
    this.nameItemSelected = 'choose your project'
    //asignando datos por default
    this._manageProjectService.getProjects().subscribe(p => {
      this.projects = p;
    })
  }


  //?Selected Project
  toggleSelectedProject() {
    this.isSelected = !this.isSelected; //close selected project

  }

  //item project
  itemProjectSelected(name: string, id: string) {
    this.nameItemSelected = name;
    this.idItemSelected = id;
    this.toggleSelectedProject(); //close selected project
  }

  //?Selected Export Project
  //toggle
  toggleSelectedExport() {
    this.isSelectedExport = !this.isSelectedExport;
  }

  // export y txt
  selectExportText() {
    this.toggleSelectedExport();
    this._toastService.open(ToastComponent, { stateToast: true, typeToast: 'exportTxt' })
  }
  selectExportJson() {
    this.toggleSelectedExport();
    this._toastService.open(ToastComponent, { stateToast: true, typeToast: 'exportJson' })
  }



}
