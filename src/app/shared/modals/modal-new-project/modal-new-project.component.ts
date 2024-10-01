import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../modal.service';

@Component({
  selector: 'modal-new-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-new-project.component.html',
  styleUrl: './modal-new-project.component.scss'
})
export class ModalNewProjectComponent {
  @Input() modal_newProjectVisible: boolean = false;

  newProjectForm: FormGroup;

  private _fb = inject(FormBuilder);
  private _modalService = inject(ModalService);

  constructor() {
    this.newProjectForm = this._fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  closeModal_newProject() {
    this.modal_newProjectVisible = false;
    this._modalService.close();
  }


  onSubmit() {
    if (this.newProjectForm.valid) {
      console.log(this.newProjectForm);
      this.closeModal_newProject();
    }
  }
}
