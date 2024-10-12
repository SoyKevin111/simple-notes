import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ManageProjectService } from '../../../services/manage-project.service';
import { Project } from '../../../models/project.model';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-edit-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-edit-project.component.html',
  styleUrl: './modal-edit-project.component.scss'
})
export class ModalEditProjectComponent{


  //Input
  @Input() modal_editProjectVisible: boolean = false;
  @Input() idProject: string = ''; //desde el popover

  //Proyecto a usar
  //project$: Observable<Project | undefined>

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

  //Métodos
  closeModal_editProject() {
    this.modal_editProjectVisible = false;
  }

  onSubmit() {
    if (this.editProjectForm.valid) {

      this.closeModal_editProject();
    }
  }

/*   editProject(): Project | undefined {



    this._manageProjectService.editProject(updatedProject);
    return updatedProject
  } */
}
