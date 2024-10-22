import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ManageProjectService } from '../../../services/manage-project.service';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-modal-edit-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-edit-project.component.html',
  styleUrl: './modal-edit-project.component.scss'
})
export class ModalEditProjectComponent implements AfterContentInit {


  project: Project | undefined;

  //Input
  @Input() modal_editProjectVisible: boolean = false;
  @Input() idProject: string = ''; //desde el popover

  //Servicio
  private _manageProjectService = inject(ManageProjectService);

  //Form reactive
  editProjectForm: FormGroup;
  private _fb = inject(FormBuilder)


  constructor() {

    //inicializando form group
    this.editProjectForm = this._fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  ngAfterContentInit(): void {
    this.project = this._manageProjectService.getProjectById(this.idProject);
    if (this.project) {
      this.editProjectForm.patchValue({
        title: this.project.title,
        description: this.project.description
      })
    }
  }

  //Métodos
  closeModal_editProject() {
    this.modal_editProjectVisible = false;
  }

  onSubmit() {
    if (this.editProjectForm.valid && this.project) {
      const projectUp = {
        ...this.project,
        title: this.editProjectForm.get('title')?.value || '',
        description: this.editProjectForm.get('description')?.value || ''
      }
      this._manageProjectService.updateProjects(projectUp);
      this.closeModal_editProject();
    }
  }
}
