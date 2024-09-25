import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-project-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-menu.component.html',
  styleUrl: './project-menu.component.scss'
})
export class ProjectMenuComponent {

  isSelected: boolean = false;
  isSelectedExport: boolean = false;

  toggleSelectedProject() {
    this.isSelected = !this.isSelected;
  }

  toggleSelectedExport() {
    this.isSelectedExport = !this.isSelectedExport;
  }

}
