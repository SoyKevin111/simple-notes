import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from '../../shared/toasts/toast.service';
import { ToastComponent } from '../../shared/toasts/toast/toast.component';
import { PopoverInfoProjectComponent } from '../../shared/popovers/popover-info-project/popover-info-project.component';
import { projectsDefault } from '../../mocks/projects.mock';
import { Project } from '../../models/project.model';
import { ManageProjectService } from '../../services/manage-project.service';
import { pipe, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-project-menu',
  standalone: true,
  imports: [CommonModule, PopoverInfoProjectComponent],
  templateUrl: './project-menu.component.html',
  styleUrl: './project-menu.component.scss'
})
export class ProjectMenuComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

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
    //asignando datos por default
    this._manageProjectService.getProjects()
      .pipe(takeUntil(this.destroy$), tap(p => console.log(p)))
      .subscribe(p => {
        this.projects = p;
      });
    this._manageProjectService.getProjectSelected()
      .pipe(takeUntil(this.destroy$), tap(p => console.log('id: ' + p?.id + ' - selected: ' + p?.selected)))
      .subscribe(p => {
          this.nameItemSelected = p?.title || '';
          this.idItemSelected = p?.id || '';
      })

    this.nameItemSelected = this.projects.length < 1 ? 'Create New Project' : this.nameItemSelected;

  }

  //?Selected Project
  toggleSelectedProject() {
    this.isSelected = !this.isSelected;

  }

  //item project
  itemProjectSelected(name: string, id: string) {
    this.nameItemSelected = name;
    this.idItemSelected = id;
    const project = this._manageProjectService.getProjectById(this.idItemSelected);
    this._manageProjectService.setProjectSelected(project);
    this.toggleSelectedProject(); //toggle selected project.

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



  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
