import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastComponent } from '../../shared/toast/toast.component';





@Component({
  selector: 'app-project-menu',
  standalone: true,
  imports: [CommonModule, ToastComponent],
  templateUrl: './project-menu.component.html',
  styleUrl: './project-menu.component.scss'
})
export class ProjectMenuComponent {

  isSelected: boolean = false;
  isSelectedExport: boolean = false;
  showToast: boolean = false;

  typeToast:string = '';

  liHiddenSelected(){
    this.isSelected = !this.isSelected;
  }

  toggleSelectedProject() {
    this.isSelected = !this.isSelected;
  }

  toggleSelectedExport() {
    this.isSelectedExport = !this.isSelectedExport;
  }

  selectExportText() {
    this.typeToast = 'exportText';
    this.showToast = true; //activar
    this.toggleSelectedExport();
  }
  selectExportJson() {
    this.typeToast = 'exportJson';
    this.showToast = true; //activar
    this.toggleSelectedExport();
  }

  closeToastEv(){
    this.showToast = false; //activar
  }



}
