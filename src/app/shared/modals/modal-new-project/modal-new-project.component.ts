import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../modal.service';
import { ToastService } from '../../toasts/toast.service';
import { ToastComponent } from '../../toasts/toast/toast.component';

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


  onSubmit() {
    if (this.newProjectForm.valid) {
      console.log(this.newProjectForm);
      this.closeModal_newProject();
      this.openToastNewProject();
    }
  }

  openToastNewProject() {
    this._toastService.open(ToastComponent, { stateToast: true, typeToast: 'newProject' });
  }
}
