import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../modal.service';
import { ToastService } from '../../toasts/toast.service';
import { ToastComponent } from '../../toasts/toast/toast.component';
import { ManageProjectService } from '../../../services/manage-project.service';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'modal-new-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-new-project.component.html',
  styleUrl: './modal-new-project.component.scss'
})
export class ModalNewProjectComponent {

  //Formulario reactivo
  newProjectForm: FormGroup;
  private _fb = inject(FormBuilder);

  //Inputs
  @Input() modal_newProjectVisible: boolean = false;

  //Servicio
  private _modalService = inject(ModalService);
  private _toastService = inject(ToastService);
  private _manageProjectService = inject(ManageProjectService);


  constructor() {
    this.newProjectForm = this._fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }


  //Métodos

  closeModal_newProject() {
    this.modal_newProjectVisible = false;
    this._modalService.close();
  }


  onSubmit() { //al generar el nuevo proyecto.
    if (this.newProjectForm.valid) {
      console.log(this.newProjectForm);
      const project = this.addProject();
      this.closeModal_newProject();
      this.openToastNewProject(project);
    }
  }

  //add
  addProject(): Project | undefined {
    const project: Project = { //por si es null o undefined
      id: this._manageProjectService.getUniqueProjectId(),
      title: this.newProjectForm.get('title')?.value ?? '',
      description: this.newProjectForm.get('description')?.value ?? '',
      tasks: []
    }
    this._manageProjectService.addProject(project);

    return project;
  }

  //Modal
  openToastNewProject(project: Project | undefined) {
    this._toastService.open(ToastComponent, { stateToast: true, typeToast: 'newProject', entityTitle: project?.title });
  }
}
